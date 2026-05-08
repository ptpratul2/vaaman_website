
'use client';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply} from '@fortawesome/free-solid-svg-icons';

import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const teamMembers = [
  { 
    id: 1, 
    name: "Mr. SP Singh", 
    role: "Managing Director", 
    delay: 0.1, 
    img: "/images-optimized/award/S P Singh.JPG", 
    linkedin: "https://www.linkedin.com/in/surendra-singh-3a775bb2/" 
  },
  { 
    id: 2, 
    name: "Mr. Rajesh Kundu", 
    role: "Chief Executive Officer", 
    delay: 0.3, 
    img: "/images-optimized/award/rajesh.jpeg", 
    linkedin: "https://www.linkedin.com/in/rajesh-kundu-67ab62141/" 
  },
  { 
    id: 3, 
    name: "Mr. BK Chakraborty", 
    role: "Executive Director", 
    delay: 0.5, 
    img: "/images-optimized/award/BARUN CHAKRABORTY.JPG", 
    linkedin: "https://www.linkedin.com/in/barun-kumar-maji-517223225/" 
  },
    { 
    id: 4, 
    name: "Mr. Saurabh Singh", 
    role: "Director", 
    delay: 0.1, 
    img: "/images-optimized/award/saurabh.jpeg", 
    linkedin: "https://www.linkedin.com/in/saurabh-singh-18220b89/" 
  },
  { 
    id: 5, 
    name: "Mr. V. Kaushik", 
    role: "Sector Head (Zinc, Copper, Cable & Conductor)", 
    delay: 0.3, 
    img: "/images-optimized/award/kaushik.jpeg", 
    linkedin: "https://www.linkedin.com/in/v-kaushik-9b54b111b/" 
  },
    {
    id: 7,
    name: "Mr. Bharat Natesan",
    role: "Sector Head (Aluminium)",
    delay: 0.7,
    img: "/images-optimized/award/bharat.jpeg",
    linkedin: "https://www.linkedin.com/in/nabharath?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  },
  { 
    id: 6, 
    name: "Ms. Vineeta Joshi", 
    role: "Corporate HR Head", 
    delay: 0.5, 
    img: "/images-optimized/award/vineeta.jpeg", 
    linkedin: "https://www.linkedin.com/in/vineeta-joshi-93142017" 
  },
];

const teamRows = [teamMembers.slice(0, 3), teamMembers.slice(3)];
export default function Team() {
  return (
    <>
      {/* --- TEAM SECTION --- */}
      <section id="our-people" className="py-24 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div id="core-management-team" className="text-center mx-auto mb-16 max-w-[600px] scroll-mt-32">
            <p className="font-bold uppercase text-orange-500 mb-2 tracking-[0.2em] text-sm">Our Team</p>
            <h1 className="text-5xl font-extrabold text-[#002147] mb-5 leading-tight">
              Core Management Team
            </h1>
          </div>

          <div className="space-y-10">
            {teamRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12"
              >
                {row.map((member) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: member.delay }}
                    viewport={{ once: true }}
                    className={`group shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] rounded-[2rem] overflow-hidden bg-white border border-gray-100 md:col-span-1 ${
                      row.length === 3 ? 'lg:col-span-4' : 'lg:col-span-3'
                    }`}
                  >
                    <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden relative">
                       <img 
                          src={member.img} 
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                       /> 
                    </div>

                    <div className="flex items-stretch h-[95px] relative overflow-hidden">
                      <div className="flex-shrink-0 bg-orange-500 w-[90px] flex items-center justify-center z-30 group-hover:bg-[#002147] transition-colors duration-500">
                        <FontAwesomeIcon icon={faReply} className="fa-2x text-white fa-flip-horizontal" />
                      </div>
                      <div className="relative flex-grow overflow-hidden bg-white">
                        <div className="absolute inset-0 ps-7 flex flex-col justify-center z-10">
                          <h5 className="text-[16px] font-black text-[#002147] tracking-tight ">{member.name}</h5>
                          <span className="text-[10px] font-bold uppercase mt-1 tracking-[0.18em] text-orange-500">{member.role}</span>
                        </div>

                        {/* LinkedIn Button Overlay */}
                        <div className="absolute inset-0 bg-orange-500 ps-7 flex items-center transition-transform duration-500 -translate-x-full group-hover:translate-x-0 z-20">
                          <a 
                            href={member.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-[#002147] text-white px-6 py-2 rounded-full hover:bg-white hover:text-orange-500 transition-all shadow-lg font-bold"
                          >
                            <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4" />
                            <span>View LinkedIn</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
