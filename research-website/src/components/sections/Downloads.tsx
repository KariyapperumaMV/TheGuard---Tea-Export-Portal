import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Calendar,
  ExternalLink,
  Presentation,
} from "lucide-react";
import MainTitle from "../MainTitle";
import TitleBadge from "../TitleBadge";

const documents = [
  {
    name: "Project Proposal",
    date: "2024-01-15",
    type: "PDF",
    link: "https://drive.google.com/drive/folders/1HV47YVGo3BoxfUPhGKB4WWEZXH0tyyk-?usp=sharing",
    size: "2.4 MB",
    description: "Initial project proposal and scope definition",
  },
  {
    name: "Status Document I",
    date: null,
    type: "PDF",
    link: null,
    size: "5.1 MB",
    description: "Comprehensive status review of the project",
  },
  {
    name: "Status Document II",
    date: null,
    type: "PDF",
    link: null,
    size: "5.1 MB",
    description: "Comprehensive status review of the project",
  },
  {
    name: "Research Paper",
    date: "2025-03-20",
    type: "PDF",
    link: "https://drive.google.com/file/d/13sIy6xrGXsPv1gEQV3SUj9my_cqho2Ec/view?usp=sharing",
    size: "3.2 MB",
    description:
      "Describes our contribution to existing knowledge, with proper citation of all referenced work",
  },
  {
    name: "Final Report",
    date: "2025-04-11",
    type: "PDF",
    link: "https://drive.google.com/file/d/1X-mB4SikBaheiSiC9_nDOi8daWmTEun6/view?usp=sharing",
    size: "TBD",
    description: "Complete project documentation and findings",
  },
  {
    name: "Project Poster",
    date: null,
    type: "PNG",
    link: null,
    size: "TBD",
    description: "Promotion Postar of the project",
  },
];

const presentations = [
  {
    name: "Project Proposal",
    date: "2024-05-20",
    type: "PPTX",
    link: "https://docs.google.com/presentation/d/1xl-Dd1NACL5OSADeOy3tObzNTY3_RpXS/edit?usp=sharing&ouid=105612074842566549596&rtpof=true&sd=true",
    size: "8.5 MB",
    description: "Initial project presentation and team introduction",
  },
  {
    name: "Progress Presentation I",
    date: "2024-11-15",
    type: "PPTX",
    link: "https://docs.google.com/presentation/d/1JfA_3lNqYaGvrPiopFR0TqSdUD3SO2zu/edit?usp=sharing&ouid=105612074842566549596&rtpof=true&sd=true",
    size: "12.3 MB",
    description: "Progress update and milestone achievements",
  },
  {
    name: "Progress Presentation II",
    date: "2024-11-15",
    type: "PPTX",
    link: "https://docs.google.com/presentation/d/1ksvHcDpQoALHqCGpM0QSyj6Cutv35Gft/edit?usp=sharing&ouid=105612074842566549596&rtpof=true&sd=true",
    size: "12.3 MB",
    description: "Progress update and milestone achievements",
  },
  {
    name: "Final Presentation",
    date: null,
    type: "PPTX",
    link: null,
    size: "TBD",
    description: "Final project presentation and results",
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Downloads() {
  return (
    <section
      id="downloads"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 border-b"
    >
      <div className="wrapper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <TitleBadge name="Downloads" />
          <MainTitle name="Research Files" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access all project documents, presentations, and resources in one
            convenient location
          </p>
        </motion.div>

        {/* Documents Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Documents</h3>
                <p className="text-gray-600">
                  Project documentation and reports
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-100 rounded-lg">
                        <FileText className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {doc.name}
                        </h4>
                        <p className="text-sm text-gray-500">{doc.size}</p>
                      </div>
                    </div>
                    {doc.date && (
                      <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        <Calendar className="w-3 h-3" />
                        {doc.date}
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    {doc.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      {doc.date ? (
                        <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs font-medium">
                          Available
                        </span>
                      ) : (
                        <span className="text-orange-600 bg-orange-100 px-2 py-1 rounded-full text-xs font-medium">
                          Pending
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {Array.isArray(doc.type) ? (
                        doc.type.map((type) => (
                          <button
                            key={type}
                            disabled={!doc.link}
                            className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed text-sm font-medium"
                          >
                            <Download className="w-4 h-4" />
                            {type}
                          </button>
                        ))
                      ) : doc.link ? (
                        <a
                          href={`${doc.link}`}
                          target="_blank"
                          className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                          <Download className="w-4 h-4" />
                          {doc.type}
                        </a>
                      ) : (
                        <button
                          disabled
                          className="flex items-center gap-1 px-3 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed text-sm font-medium"
                        >
                          <Download className="w-4 h-4" />
                          {doc.type}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Presentations Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Presentation className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Presentations
                </h3>
                <p className="text-gray-600">
                  Project presentations and slides
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {presentations.map((ppt, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Presentation className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                          {ppt.name}
                        </h4>
                        <p className="text-sm text-gray-500">{ppt.size}</p>
                      </div>
                    </div>
                    {ppt.date && (
                      <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        <Calendar className="w-3 h-3" />
                        {ppt.date}
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    {ppt.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      {ppt.date ? (
                        <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs font-medium">
                          Available
                        </span>
                      ) : (
                        <span className="text-orange-600 bg-orange-100 px-2 py-1 rounded-full text-xs font-medium">
                          Pending
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {ppt.link ? (
                        <div className="flex gap-2">
                          <a
                            href={`${ppt.link}`}
                            target="_blank"
                            className="flex items-center gap-1 px-3 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </a>
                          <a
                            href={`${ppt.link}`}
                            className="flex items-center gap-1 px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View
                          </a>
                        </div>
                      ) : (
                        <button
                          disabled
                          className="flex items-center gap-1 px-3 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed text-sm font-medium"
                        >
                          <Download className="w-4 h-4" />
                          Coming Soon
                        </button>
                      )}
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
