"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, GraduationCap } from "lucide-react";
import MainTitle from "../MainTitle";
import TitleBadge from "../TitleBadge";
import {
  Co_Supervisor,
  External_Superviosr,
  Member1,
  Member2,
  Member3,
  Member4,
  Supervisor,
} from "../../assets";

const topMembers = [
  {
    name: "Dr. Nathali Silva",
    position: "Supervisor",
    university: "Sri Lanka Institute of Information Technology",
    department: "Department of Information Technology",
    image: Supervisor,
    linkedin: "https://www.linkedin.com/in/bhagya-nathali-silva-8ab73524",
    email: "nathali.s@sliit.lk",
  },
  {
    name: "Ms. Sanjeevi Chandrasiri",
    position: "Co-Supervisor",
    university: "Sri Lanka Institute of Information Technology",
    department: "Department of Information Technology",
    image: Co_Supervisor,
    linkedin: "#",
    email: "sanji.c@sliit.lk",
  },
  {
    name: "Anoma Janaki Mohotti",
    position: "External Supervisor",
    university: "University of Peradeniya",
    department: "Department of Crop Science",
    image: External_Superviosr,
    linkedin: "#",
    email: "mohottij@agri.pdn.ac.lk",
  },
];

const otherMembers = [
  {
    name: "Methya Kariyapperuma",
    position: "Group Leader",
    university: "Sri Lanka Institute of Information Technology",
    department: "Department of Computer Science & Software Engineering",
    image: Member1,
    linkedin: "#",
    email: "methya.v@gmail.com",
  },
  {
    name: "Sasindu Sembakutti",
    position: "Team Member",
    university: "Sri Lanka Institute of Information Technology",
    department: "Department of Computer Science & Software Engineering",
    image: Member2,
    linkedin: "#",
    email: "sasindu0205@gmail.com",
  },
  {
    name: "Bhagya Ekanayake",
    position: "Team Member",
    university: "Sri Lanka Institute of Information Technology",
    department: "Department of Computer Science & Software Engineering",
    image: Member3,
    linkedin: "#",
    email: "poornabhagy@gmail.com",
  },
  {
    name: "Hasitha Peiris",
    position: "Team Member",
    university: "Sri Lanka Institute of Information Technology",
    department: "Department of Computer Science & Software Engineering",
    image: Member4,
    linkedin: "#",
    email: "hasithapeiris.me@gmail.com",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function MeetOurTeam() {
  return (
    <section
      id="team"
      className="section-box bg-gradient-to-br from-gray-50 via-white to-gray-100 border-b"
    >
      <div className="wrapper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <TitleBadge name="About Us" />
          <MainTitle name="Meet Our Team" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A diverse group of passionate researchers, developers, and
            innovators working together to revolutionize agriculture through
            technology
          </p>
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Leadership Team
            </h3>
            <p className="text-gray-600">
              Guiding our research and development efforts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative p-8">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-white shadow-lg group-hover:ring-green-200 transition-all duration-300">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {member.position.split(" ")[0]}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-green-600 font-semibold mb-1">
                      {member.position}
                    </p>

                    <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mb-2">
                      <GraduationCap className="w-4 h-4" />
                      <span>{member.university}</span>
                    </div>

                    <p className="text-sm text-gray-500 mb-4">
                      {member.department}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-600 hover:text-white transition-all duration-300 hover:scale-110"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Team */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Development Team
            </h3>
            <p className="text-gray-600">
              The talented individuals bringing our vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {otherMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200"
              >
                <div className="p-6">
                  {/* Profile Image */}
                  <div className="relative mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-2 ring-gray-200 group-hover:ring-green-300 transition-all duration-300">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-green-600 font-medium text-sm mb-2">
                      {member.position}
                    </p>

                    <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mb-2">
                      <MapPin className="w-3 h-3" />
                      <span>{member.university}</span>
                    </div>

                    <p className="text-xs text-gray-500 mb-3">
                      {member.department}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-green-100 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="p-1.5 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-600 hover:text-white transition-all duration-300"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
