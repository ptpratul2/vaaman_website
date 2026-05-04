import { NextResponse } from "next/server";
import { getApiBaseUrl, getEnvValue } from "@/lib/frappe";

export const dynamic = "force-dynamic";

// Function to generate a clean, text-only HTML response
function generateHtmlResponse(title: string, message: string, colorClass: string) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <style>
                body { font-family: system-ui, -apple-system, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background: #f8fafc; margin: 0; }
                .card { background: white; padding: 40px; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); text-align: center; max-width: 400px; width: 90%; }
                h1 { margin: 0 0 12px 0; font-size: 28px; font-weight: 700; }
                p { color: #64748b; margin: 0; line-height: 1.6; font-size: 16px; }
                .success-text { color: #10b981; }
                .danger-text { color: #ef4444; }
                .info-text { color: #3b82f6; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1 class="${colorClass}">${title}</h1>
                <p>${message}</p>
            </div>
        </body>
        </html>
    `;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const applicantId = searchParams.get("applicantId");
  const token = searchParams.get("token");
  const action = searchParams.get("action") || "approve"; 

  if (!applicantId || !token) {
    return new NextResponse("Invalid or missing parameters.", { status: 400 });
  }

  if (action !== "approve" && action !== "reject") {
    return new NextResponse("Invalid action requested.", { status: 400 });
  }

  const rawBaseUrl = getEnvValue("FRAPPE_API_BASE_URL");
  const apiKey = getEnvValue("FRAPPE_API_KEY");
  const apiSecret = getEnvValue("FRAPPE_API_SECRET");

  if (!rawBaseUrl || !apiKey || !apiSecret) {
    return new NextResponse("Server configuration error.", { status: 500 });
  }

  try {
    const baseUrl = getApiBaseUrl(rawBaseUrl);
    
    // 1. Fetch current document
    const fetchUrl = new URL(`api/resource/Job Applicant/${encodeURIComponent(applicantId)}`, baseUrl);
    const fetchRes = await fetch(fetchUrl, {
      method: "GET",
      headers: {
        Authorization: `token ${apiKey}:${apiSecret}`,
        Accept: "application/json",
      },
      cache: "no-store"
    });

    if (!fetchRes.ok) {
      return new NextResponse("Applicant not found.", { status: 404 });
    }

    const { data: applicant } = await fetchRes.json();

    // 2. Token validation
    if (applicant.referral_token !== token) {
      return new NextResponse("Invalid or expired approval token.", { status: 403 });
    }

    // 3. Check if already processed
    if (applicant.referral_status === "Approved" || applicant.referral_status === "Rejected") {
        const html = generateHtmlResponse(
            "Already Processed", 
            `This referral has already been marked as <b>${applicant.referral_status}</b>. No further action is required.`, 
            "info-text"
        );
        return new NextResponse(html, { headers: { "Content-Type": "text/html" } });
    }

    // 4. Update status in Frappe
    const newStatus = action === "approve" ? "Approved" : "Rejected";

    const updateRes = await fetch(fetchUrl, {
      method: "PUT",
      headers: {
        Authorization: `token ${apiKey}:${apiSecret}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        referral_status: newStatus,
        referral_token: "" 
      }),
      cache: "no-store"
    });

    if (!updateRes.ok) {
      throw new Error("Failed to update status in Frappe");
    }

    // 5. Final Response
    let htmlContent = "";
    if (action === "approve") {
        htmlContent = generateHtmlResponse(
            "Referral Approved", 
            "Thank you! The referral has been successfully authenticated.",  
            "success-text"
        );
    } else {
        htmlContent = generateHtmlResponse(
            "Referral Rejected", 
            "You have marked this referral as invalid. Thank you for letting us know.", 
            "danger-text"
        );
    }

    return new NextResponse(htmlContent, {
      headers: { "Content-Type": "text/html" },
    });

  } catch (error) {
    console.error("Approval error:", error);
    return new NextResponse("Internal server error.", { status: 500 });
  }
}