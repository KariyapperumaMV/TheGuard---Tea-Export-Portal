import { motion } from "framer-motion";
import { ArrowDown, Play, Leaf, Zap, Globe } from "lucide-react";
import { Header_1 } from "../../assets";

export default function MainHeader() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <header className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={Header_1}
          alt="Tea Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/95 via-emerald-800/80 to-teal-900/95 z-10"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-20 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Floating Icons */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="hidden md:block absolute top-40 left-20 text-white/30"
        >
          <Leaf className="w-16 h-16" />
        </motion.div>

        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="hidden md:block absolute top-40 right-32 text-white/20"
          style={{ animationDelay: "2s" }}
        >
          <Zap className="w-12 h-12" />
        </motion.div>

        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="hidden md:block absolute bottom-40 left-32 text-white/25"
          style={{ animationDelay: "4s" }}
        >
          <Globe className="w-14 h-14" />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-30 text-center max-w-6xl mx-auto px-4"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="hidden md:block mb-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">
              {"Revolutionary AgriTech Solution".toUpperCase()}
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1 variants={itemVariants} className="text-white mb-6">
          <span className="block font-heading font-extrabold text-4xl md:text-6xl">
            {"ML-Powered".toUpperCase()}
          </span>
          <span className="block font-heading font-extrabold text-5xl md:text-7xl bg-gradient-to-r from-green-400 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
            {"Tea Export Portal".toUpperCase()}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Transforming farming with AI-powered insights, IoT sensors, and
          data-driven solutions for sustainable and efficient agriculture.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            onClick={scrollToContent}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group bg-white text-green-800 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center"
          >
            <span>Explore Research</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-800 transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Watch Demo</span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.button
          onClick={scrollToContent}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors group"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </div>
        </motion.button>
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-white/20 z-20"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-white/20 z-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-white/20 z-20"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-white/20 z-20"></div>
    </header>
  );
}
