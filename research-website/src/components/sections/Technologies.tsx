import { motion } from "framer-motion";
import MainTitle from "../MainTitle";
import {
  Colab,
  Docker,
  FastAPI,
  Firebase,
  Flask,
  JavaScript,
  Jupyter,
  Kotlin,
  MongoDB,
  Python,
  React,
  Scikit,
  TensorFlow,
  TypeScript,
} from "../../assets";

const technologies = [
  { name: "Python", logo: Python },
  { name: "JavaScript", logo: JavaScript },
  { name: "TypeScript", logo: TypeScript },
  { name: "React", logo: React },
  { name: "Flask", logo: Flask },
  { name: "FastAPI", logo: FastAPI },
  { name: "Kotlin", logo: Kotlin },
  { name: "Scikit-Learn", logo: Scikit },
  { name: "TensorFlow", logo: TensorFlow },
  { name: "MongoDB", logo: MongoDB },
  { name: "Firebase", logo: Firebase },
  { name: "Docker", logo: Docker },
  { name: "Google Colab", logo: Colab },
  { name: "Jupyter Notebook", logo: Jupyter },
];

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="section-box bg-white scroll-mt-16 border-b"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <MainTitle name="Technologies We Used" />
        <p className="text-gray-600 max-w-xl mx-auto">
          We leverage modern and robust technologies to build scalable,
          intelligent, and efficient solutions.
        </p>
      </motion.div>

      {/* Technology Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center lg:px-24">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            className="bg-gray-100 hover:bg-white rounded-xl p-4 shadow-md w-32 h-32 flex flex-col items-center justify-center transition-all duration-300 border border-transparent hover:border-emerald-400"
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-10 h-10 mb-2 object-contain"
            />
            <p className="text-sm text-gray-800 text-center font-medium">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
