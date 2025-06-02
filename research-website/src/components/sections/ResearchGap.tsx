import { motion } from "framer-motion";
import { Lightbulb, Search, Globe2, LineChart } from "lucide-react";
import MainTitle from "../MainTitle";

const cardData = [
  {
    number: 1,
    icon: <Lightbulb className="w-8 h-8 text-green-500" />,
    title: "Limited Smart Integration",
    description:
      "Current plantation systems lack seamless integration of AI with IoT for real-time monitoring and predictive analytics.",
  },
  {
    number: 2,
    icon: <Search className="w-8 h-8 text-green-500" />,
    title: "Insufficient Localized Models",
    description:
      "Most ML models are generalized and fail to account for regional agro-climatic conditions affecting tea plantations.",
  },
  {
    number: 3,
    icon: <Globe2 className="w-8 h-8 text-green-500" />,
    title: "Gap in Export Strategy Insights",
    description:
      "There's a lack of data-driven tools for forecasting export strategies based on dynamic market and currency data.",
  },
  {
    number: 4,
    icon: <LineChart className="w-8 h-8 text-green-500" />,
    title: "Absence of decision-support tools",
    description:
      "There are limited solutions for creating interactive tools that are easy to use for policymakers and agricultural planners.",
  },
];

const ResearchGap = () => {
  return (
    <section
      id="research-gap"
      className="section-box bg-white scroll-mt-16 border-b"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <MainTitle name="Research Gap" />
        <p className="text-gray-600 mb-10">
          Despite advancements in agricultural AI and ML, there remains a
          significant gap in their practical, localized, and sustainable
          implementation for tea plantation management and export forecasting.
          Addressing these gaps is vital for developing robust, scalable
          solutions tailored to regional dynamics.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
      >
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 transition-all hover:-translate-y-1 duration-300"
          >
            <div className="mb-4 flex items-center justify-start space-x-3">
              <div>{card.icon}</div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ResearchGap;
