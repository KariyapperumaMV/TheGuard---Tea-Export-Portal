import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaChartLine,
  FaFileAlt,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { MdWeb, MdBook, MdDoneAll } from "react-icons/md";
import MainTitle from "../MainTitle";
import TitleBadge from "../TitleBadge";

const milestones = [
  {
    date: "August 2024",
    title: "Project Proposal",
    description:
      "A Project Proposal is presented to potential sponsors or clients to receive funding or get out project approved.",
    marks: 6,
    percent: 6,
    icon: <FaCalendarAlt className="text-emerald-500 w-6 h-6" />,
  },
  {
    date: "December 2024",
    title: "Progress Presentation I",
    description:
      "Reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
    marks: 6,
    percent: 50,
    icon: <FaChartLine className="text-blue-500 w-6 h-6" />,
  },
  {
    date: "March 2025",
    title: "Research Paper",
    description:
      "Describes our contribution to existing knowledge, with proper citation of all referenced work.",
    marks: 10,
    percent: 60,
    icon: <FaFileAlt className="text-orange-500 w-6 h-6" />,
  },
  {
    date: "March 2025",
    title: "Progress Presentation II",
    description:
      "90% completion status demo with poster presentation that covers the project in full.",
    marks: 18,
    percent: 90,
    icon: <FaChalkboardTeacher className="text-pink-500 w-6 h-6" />,
  },
  {
    date: "April 2025",
    title: "Final Report",
    description:
      "Evaluation of the completed project including individual, group, and final reports.",
    marks: 19,
    percent: 92,
    icon: <BsFileEarmarkTextFill className="text-purple-500 w-6 h-6" />,
  },
  {
    date: "May 2025",
    title: "Website Assessment",
    description:
      "Website promotes our research and reveals all project details for assessment.",
    marks: 2,
    percent: 94,
    icon: <MdWeb className="text-indigo-500 w-6 h-6" />,
  },
  {
    date: "May 2025",
    title: "Logbook",
    description:
      "Project status is validated through the Logbook including Status Documents 1 & 2.",
    marks: 3,
    percent: 96,
    icon: <MdBook className="text-yellow-500 w-6 h-6" />,
  },
  {
    date: "May 2025",
    title: "Final Presentation & Viva",
    description:
      "Individual viva held to assess each member’s contribution to the project.",
    marks: 20,
    percent: 100,
    icon: <MdDoneAll className="text-red-500 w-6 h-6" />,
  },
];

const ProjectTimeline = () => {
  return (
    <section
      id="timeline"
      className="py-20 px-4 bg-white scroll-mt-16 border-b"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <TitleBadge name="Milestones" />
        <MainTitle name="Project Timeline" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-400 to-green-600 hidden md:block"></div>

        <div className="space-y-8 md:space-y-6">
          {milestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {index + 1}
                        </span>
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-16 bg-gradient-to-b from-emerald-400 to-green-600 mt-2"></div>
                      )}
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 relative flex-1">
                      {/* Low-opacity number background */}
                      <div className="absolute right-4 top-2 text-6xl font-bold text-gray-200 opacity-10 z-0">
                        {index + 1}
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-center mb-2 text-sm text-gray-600 font-medium">
                          {milestone.icon}
                          <span className="ml-2">{milestone.date}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {milestone.description}
                        </p>
                        <p className="text-sm font-medium text-gray-700 mt-3">
                          Marks Allocated: {milestone.marks}
                        </p>
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                          <div
                            className="bg-emerald-500 h-2.5 rounded-full transition-all duration-500"
                            style={{ width: `${milestone.percent}%` }}
                          ></div>
                        </div>
                        <p className="text-right text-xs text-gray-500 mt-1">
                          {milestone.percent}% completed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block">
                  <div className="flex items-center">
                    {/* Left Side Content */}
                    <div className="w-5/12 pr-1">
                      {isLeft ? (
                        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 relative">
                          {/* Low-opacity number background */}
                          <div className="absolute right-4 top-2 text-6xl font-bold text-gray-200 opacity-10 z-0">
                            {index + 1}
                          </div>

                          <div className="relative z-10">
                            <div className="flex items-center mb-2 text-sm text-gray-600 font-medium">
                              {milestone.icon}
                              <span className="ml-2">{milestone.date}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {milestone.description}
                            </p>
                            <p className="text-sm font-medium text-gray-700 mt-3">
                              Marks Allocated: {milestone.marks}
                            </p>
                            {/* Progress Bar */}
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                              <div
                                className="bg-emerald-500 h-2.5 rounded-full transition-all duration-500"
                                style={{ width: `${milestone.percent}%` }}
                              ></div>
                            </div>
                            <p className="text-right text-xs text-gray-500 mt-1">
                              {milestone.percent}% completed
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>

                    {/* Center Timeline Node */}
                    <div className="w-2/12 flex flex-col items-center relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                        <span className="text-white font-bold">
                          {index + 1}
                        </span>
                      </div>
                      {/* Large background number */}
                      <div className="absolute top-16 text-6xl font-bold text-gray-100 pointer-events-none">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Right Side Content */}
                    <div className="w-5/12 pl-1">
                      {!isLeft ? (
                        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 relative">
                          {/* Low-opacity number background */}
                          <div className="absolute right-4 top-2 text-6xl font-bold text-gray-200 opacity-10 z-0">
                            {index + 1}
                          </div>

                          <div className="relative z-10">
                            <div className="flex items-center mb-2 text-sm text-gray-600 font-medium">
                              {milestone.icon}
                              <span className="ml-2">{milestone.date}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {milestone.description}
                            </p>
                            <p className="text-sm font-medium text-gray-700 mt-3">
                              Marks Allocated: {milestone.marks}
                            </p>
                            {/* Progress Bar */}
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                              <div
                                className="bg-emerald-500 h-2.5 rounded-full transition-all duration-500"
                                style={{ width: `${milestone.percent}%` }}
                              ></div>
                            </div>
                            <p className="text-right text-xs text-gray-500 mt-1">
                              {milestone.percent}% completed
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;
