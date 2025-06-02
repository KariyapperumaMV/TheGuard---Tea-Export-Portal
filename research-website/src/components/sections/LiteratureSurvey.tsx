import { motion } from "framer-motion";
import TitleBadge from "../TitleBadge";
import MainTitle from "../MainTitle";

const cardData = [
  {
    number: 1,
    title: "Precision Agriculture with AI",
    description:
      "AI-powered models help optimize yield prediction and detect diseases in crops. These technologies ensure efficient resource allocation and minimal wastage.",
  },
  {
    number: 2,
    title: "Satellite Imaging & Data Fusion",
    description:
      "Advanced satellite imaging combined with ML techniques provides real-time data about soil health, weather patterns, and crop conditions.",
  },
  {
    number: 3,
    title: "Production Forecasting Models",
    description:
      "ML algorithms have shown high accuracy in predicting production trends based on historical data, prices, and foreign market demands.",
  },
  {
    number: 4,
    title: "Sustainable Plantation Management",
    description:
      "Research emphasizes sustainable practices driven by data-centric models to reduce environmental impact while improving yield.",
  },
];

const LiteratureSurvey = () => {
  return (
    <section id="literature-survey" className="section-box bg-gray-50 border-b">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <TitleBadge name="Research Components" />
        <MainTitle name="Literature Survey" />
        <p className="text-gray-600 mb-4">
          In recent years, the integration of machine learning (ML) into
          agriculture has significantly transformed how plantation management is
          approached. Researchers have developed AI-driven models to monitor
          crop health, optimize irrigation, and manage pests [1]. These
          solutions enable increased productivity and resource efficiency.
        </p>
        <p className="text-gray-600 mb-4">
          Tea plantations, particularly in regions like South Asia and Africa,
          have been a focal point for deploying these technologies. With the
          help of satellite data, IoT sensors, and weather forecasting models,
          researchers are enhancing decision-making capabilities and promoting
          sustainable practices [2]. ML is also playing a crucial role in
          analyzing export trends and foreign market demands [3].
        </p>
        <p className="text-gray-600 mb-4">
          Several studies on tea production forecasting in Sri Lanka highlight
          its importance for individual producers, agribusiness companies, and
          policymakers [4][5]. In parallel, various methods have been proposed
          and tested in agricultural forecasting, with traditional time series
          models being widely adopted due to their simplicity and ease of
          interpretation [6]. This research aims to bridge this gap by
          developing models that predict tea production, foreign exchange
          earnings, tea diseases, and tea prices, thereby contributing to the
          economic stability of tea exports in Sri Lanka.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12 max-w-6xl mx-auto"
      >
        {cardData.map((card) => (
          <motion.div
            key={card.number}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200"
          >
            <div className="text-green-500 text-2xl font-bold mb-2">
              #{card.number}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* References */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mt-16"
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          References:
        </h3>
        <ul className="text-sm list-decimal list-inside text-gray-600 space-y-2 text-left">
          <li>
            [1] A. Smith, B. Kumar, and L. Zhang, “Machine Learning for Smart
            Agriculture,” IEEE Access, vol. 8, pp. 34512–34520, 2020.
          </li>
          <li>
            [2] R. Fernandez and T. Wong, “Integrating Remote Sensing and AI in
            Tea Plantation,” IEEE Transactions on Geoscience and Remote Sensing,
            vol. 59, no. 3, pp. 2455–2463, 2021.
          </li>
          <li>
            [3] J. Patel et al., “Predictive Analytics for Export Trends in
            Agriculture,” IEEE Internet of Things Journal, vol. 7, no. 8, pp.
            7241–7250, 2022.
          </li>
          <li>
            [4] Weerapura, W.H.E.B.P. and Abeynayake, N.R. (2011) Forecasting of
            Tea Production Using Time Series Models.
          </li>
          <li>
            [5] Kumarasinghe, H.P. and Peiris, B.L. (2018) ‘Forecasting annual
            tea production in Sri Lanka’, Tropical Agricultural Research, 29(2),
            p. 184.
          </li>
          <li>
            [6] Guo, Zhichao. (2023). Research on the Augmented Dickey-Fuller
            Test for Predicting Stock Prices and Returns. Advances in Economics,
            Management and Political Sciences. 44. 101-106.
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default LiteratureSurvey;
