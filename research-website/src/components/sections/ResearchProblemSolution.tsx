import { motion } from "framer-motion";
import { BarChart4, TrendingUp, Leaf, ChartLine } from "lucide-react";
import MainTitle from "../MainTitle";

const solutions = [
  {
    icon: <Leaf className="text-green-600 w-6 h-6" />,
    title: "Predict Diseases of Tea Leaves",
    desc: "Use image processing to diagnose diseases in tea leaves and provide ML-based solutions to address them promptly.",
  },
  {
    icon: <ChartLine className="text-green-600 w-6 h-6" />,
    title: "Predict Variations in Tea Price Ranges",
    desc: "Predict the optimal tea prices for a given location and provide ML-based recommendations. ",
  },
  {
    icon: <BarChart4 className="text-green-600 w-6 h-6" />,
    title: "Predict and Identify the Best Demand",
    desc: "Predict potential foreign markets that can yield high foreign exchange returns.",
  },
  {
    icon: <TrendingUp className="text-green-600 w-6 h-6" />,
    title: "Forecast Tea Production and Export Income",
    desc: "Use of ML models to forecast the monthly tea production and foreign exchange earnings.",
  },
];

const ResearchProblemSolution = () => {
  return (
    <section
      id="research-problem-solution"
      className="section-box bg-gray-50 scroll-mt-16 border-b"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <MainTitle name="Research Problem & Solution" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-gray-700 text-center mb-12"
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Problem Statement
        </h3>
        <p className="mb-4">
          The Sri Lankan tea industry is in decline due to economic instability,
          fertilizer shortages, and ineffective disease management.
          Smallholders, lacking proper guidance, often choose unsuitable tea
          varieties and outdated practices, leading to reduced yield and
          quality, further weakening the country’s position against global
          competitors.
        </p>
        <p>
          Despite the export potential, small-scale tea producers rarely explore
          international markets due to limited awareness and support. If guided
          to identify high-demand regions and revenue drivers, they can
          significantly enhance exports and contribute to national economic
          recovery. But there is little interest from producers and policymakers
          in this opportunity.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="max-w-5xl mx-auto"
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Innovative Solutions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="flex items-start gap-4 bg-white p-5 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <div className="mt-1">{solution.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {solution.title}
                </h4>
                <p className="text-gray-600 text-sm">{solution.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ResearchProblemSolution;
