import { motion } from "framer-motion";
import { CheckCircle, Layers, Cpu, TrendingUp, Network } from "lucide-react";
import { System_Diagram } from "../../assets";
import MainTitle from "../MainTitle";

const steps = [
  "Data Collection & Preprocessing",
  "Model Design & Training",
  "System Integration",
  "Evaluation & Export Enhancement",
];

const cards = [
  {
    icon: <Layers className="w-8 h-8 text-green-600" />,
    title: "Data Pipeline",
    desc: "Collect structured and unstructured data from sensors, market reports, and government organizations.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-green-600" />,
    title: "Machine Learning Models",
    desc: "Train predictive models for production, disease risk, and forex forecasting using supervised learning (ARIMA, Prophet).",
  },
  {
    icon: <Network className="w-8 h-8 text-green-600" />,
    title: "System Integration",
    desc: "Integrate ML components into a central web-based dashboard with real-time updates.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-green-600" />,
    title: "Export Enhancement",
    desc: "Use predictive insights to plan exports and maximize foreign exchange earnings efficiently.",
  },
];

const Methodology = () => {
  return (
    <section
      id="methodology"
      className="py-20 bg-gray-50 scroll-mt-16 border-b"
    >
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <MainTitle name="Methodology" />
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our methodology follows a structured pipeline from data acquisition
            to actionable insights for export enhancement.
          </p>
        </motion.div>

        {/* Bullet Points */}
        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto grid gap-4 md:grid-cols-2 mb-12"
        >
          {steps.map((step, index) => (
            <li key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 mt-1" />
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </motion.ul>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-600 mt-2">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* System Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <img
            src={System_Diagram}
            alt="System Architecture Diagram"
            className="w-full rounded-xl border"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;
