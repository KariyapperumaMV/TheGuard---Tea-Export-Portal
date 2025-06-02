import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  FileText,
  Calendar,
  Download,
  Users,
  Mail,
  Globe,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResearchOpen, setIsResearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "literature-survey",
        "research-gap",
        "research-problem-solution",
        "research-objectives",
        "methodology",
        "technologies",
        "timeline",
        "downloads",
        "team",
        "contact",
      ];

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const researchSections = [
    {
      id: "literature-survey",
      name: "Literature Survey",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      id: "research-gap",
      name: "Research Gap",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      id: "research-problem-solution",
      name: "Problem & Solution",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      id: "research-objectives",
      name: "Research Objectives",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      id: "methodology",
      name: "Methodology",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      id: "technologies",
      name: "Technologies",
      icon: <FileText className="w-4 h-4" />,
    },
  ];

  const otherSections = [
    {
      id: "timeline",
      name: "Timeline",
      icon: <Calendar className="w-4 h-4" />,
    },
    {
      id: "downloads",
      name: "Downloads",
      icon: <Download className="w-4 h-4" />,
    },
    { id: "team", name: "Team", icon: <Users className="w-4 h-4" /> },
    { id: "contact", name: "Contact", icon: <Mail className="w-4 h-4" /> },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for sticky navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
    setIsResearchOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="wrapper">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="flex-center gap-2">
              <img src="icon.png" alt="TheGuard Logo" className="h-8" />
            </div>
            <div className="hidden sm:block">
              <h1
                className={`font-heading text-xl font-bold ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                ThéGuard
              </h1>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Home */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-green-600 hover:bg-green-50"
                  : "text-white hover:text-green-300"
              }`}
            >
              <Home className="w-4 h-4" />
              Home
            </motion.button>

            {/* Research Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsResearchOpen(!isResearchOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-green-600 hover:bg-green-50"
                    : "text-white hover:text-green-300"
                } ${
                  researchSections.some(
                    (section) => section.id === activeSection
                  )
                    ? isScrolled
                      ? "text-green-600 bg-green-50"
                      : "text-green-300"
                    : ""
                }`}
              >
                <FileText className="w-4 h-4" />
                Research
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isResearchOpen ? "rotate-180" : ""
                  }`}
                />
              </motion.button>

              <AnimatePresence>
                {isResearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50"
                    onMouseLeave={() => setIsResearchOpen(false)}
                  >
                    {researchSections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-green-50 transition-colors ${
                          activeSection === section.id
                            ? "bg-green-50 text-green-600"
                            : "text-gray-700"
                        }`}
                      >
                        {section.icon}
                        {section.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Sections */}
            {otherSections.map((section) => (
              <motion.button
                key={section.id}
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-green-600 hover:bg-green-50"
                    : "text-white hover:text-green-300"
                } ${
                  activeSection === section.id
                    ? isScrolled
                      ? "text-green-600 bg-green-50"
                      : "text-green-300"
                    : ""
                }`}
              >
                {section.icon}
                {section.name}
              </motion.button>
            ))}

            {/* AI Chat Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg"
            >
              <a
                href="https://theguard.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 "
              >
                <Globe className="w-4 h-4" />
                Web App
              </a>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {/* Home */}
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors"
              >
                <Home className="w-5 h-5" />
                Home
              </button>

              {/* Research Sections */}
              <div className="border-t border-gray-100 pt-2">
                <p className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Research
                </p>
                {researchSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-green-50 transition-colors rounded-lg ${
                      activeSection === section.id
                        ? "bg-green-50 text-green-600"
                        : "text-gray-700"
                    }`}
                  >
                    {section.icon}
                    {section.name}
                  </button>
                ))}
              </div>

              {/* Other Sections */}
              <div className="border-t border-gray-100 pt-2">
                <p className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Project
                </p>
                {otherSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-green-50 transition-colors rounded-lg ${
                      activeSection === section.id
                        ? "bg-green-50 text-green-600"
                        : "text-gray-700"
                    }`}
                  >
                    {section.icon}
                    {section.name}
                  </button>
                ))}
              </div>

              {/* AI Chat Button */}

              <div className="pt-4">
                <a
                  href="https://theguard.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                    <Globe className="w-4 h-4" />
                    Web App
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
