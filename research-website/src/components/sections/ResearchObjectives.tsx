import { motion } from "framer-motion";
import { Lightbulb, BrainCircuit, BarChart3, Globe2 } from "lucide-react";
import MainTitle from "../MainTitle";

const objectives = [
  {
    icon: <Lightbulb className="w-6 h-6 text-green-600" />,
    title: "Identify Current Limitations",
    desc: "Examine current tea plantation practices and analyze export bottlenecks to define the baseline challenges.",
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-green-600" />,
    title: "Develop ML Models",
    desc: "Design and train machine learning models for price prediction, disease detection, demand prediction and Forex prediction.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-green-600" />,
    title: "Integrate and Test the Developed Models",
    desc: "Build a single forecasting framework to build and test machine learning models.",
  },
  {
    icon: <Globe2 className="w-6 h-6 text-green-600" />,
    title: "Implement User Portal",
    desc: "Develop a responsive web platform for farmers, stakeholders, and exporters with interactive visual dashboards.",
  },
];

const ResearchObjectives = () => {
  return (
    <section
      id="research-objectives"
      className="py-20 px-4 bg-white scroll-mt-16 border-b"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <MainTitle name="Research Objectives" />
        <p className="text-gray-700 text-lg">
          Our objectives are designed to bridge the gap between traditional
          farming methods and smart, data-driven agriculture optimized for
          global competitiveness.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 via-emerald-500 to-green-600 hidden md:block"></div>

        <div className="space-y-8 md:space-y-6">
          {objectives.map((item, index) => {
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
                      <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {index + 1}
                        </span>
                      </div>
                      {index < objectives.length - 1 && (
                        <div className="w-0.5 h-16 bg-green-300 mt-2"></div>
                      )}
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 flex-1">
                      <div className="mb-4 p-3 rounded-lg bg-green-50 w-fit">
                        {item.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block">
                  <div className="flex items-center">
                    {/* Left Side Content */}
                    <div className="w-5/12 pr-1">
                      {isLeft ? (
                        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                          <div className="mb-4 p-3 rounded-lg bg-green-50 w-fit">
                            {item.icon}
                          </div>
                          <h4 className="text-xl font-semibold text-gray-800 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-gray-600">{item.desc}</p>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>

                    {/* Center Timeline Node */}
                    <div className="w-2/12 flex flex-col items-center relative">
                      <div className="w-12 h-12 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
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
                        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                          <div className="mb-4 p-3 rounded-lg bg-green-50 w-fit">
                            {item.icon}
                          </div>
                          <h4 className="text-xl font-semibold text-gray-800 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-gray-600">{item.desc}</p>
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

export default ResearchObjectives;
