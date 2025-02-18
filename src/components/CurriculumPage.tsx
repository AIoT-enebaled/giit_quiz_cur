import { 
  Download, 
  Calendar, 
  Target, 
  GraduationCap, 
  PenTool as Tool,
  Target as ObjectiveIcon,
  BookOpen as TopicsIcon,
  Rocket as ProjectIcon,
  Link as ResourceIcon,
  CheckCircle as OutcomeIcon,
  Package as DeliverableIcon,
  Clock,
  Layers as PhaseIcon,
  Brain,
  Code,
  Database,
  LineChart,
  Shield,
  Cpu,
  Award
} from 'lucide-react';
import { generatePDF } from '../utils/pdfGenerator';

interface CurriculumPhase {
  title: string;
  weeks: string;
  objective: string;
  topics: { week: string; content: string[]; projects: string; resources: string[] }[];
  outcome: string;
  deliverable: string;
}

const phases: CurriculumPhase[] = [
  {
    title: "Python & Data Mastery",
    weeks: "1-6",
    objective: "Build foundational Python and data analysis skills, aligned with fraud use cases.",
    topics: [
      {
        week: "1-2",
        content: ["Python Basics (Pandas, NumPy)"],
        projects: "Clean a synthetic transaction dataset.",
        resources: ["Kaggle's Credit Card Fraud Dataset"]
      },
      {
        week: "3-4",
        content: ["SQL for Data Querying (SQLite/PostgreSQL)"],
        projects: "Write SQL queries to trace dummy financial logs.",
        resources: ["SQLZoo"]
      },
      {
        week: "5-6",
        content: ["Data Visualization (Matplotlib, Tableau)"],
        projects: "Build an anomaly detection dashboard for fraud clues.",
        resources: ["Tableau Public (free tier)"]
      }
    ],
    outcome: "Student can manipulate and visualize financial data programmatically.",
    deliverable: "Cleaned dataset + Tableau dashboard highlighting suspicious transactions."
  },
  {
    title: "Machine Learning for Fraud Detection",
    weeks: "7-12",
    objective: "Train ML models to detect fraud patterns, leveraging your AI expertise.",
    topics: [
      {
        week: "7-8",
        content: ["ML Basics (Logistic Regression, Decision Trees)"],
        projects: "Predict fraud in Kaggle's IEEE-CIS dataset.",
        resources: ["Scikit-learn documentation"]
      },
      {
        week: "9-10",
        content: ["Handling Imbalanced Data (SMOTE, ADASYN)"],
        projects: "Optimize F1-score for fraud classification.",
        resources: ["Imbalanced-Learn Library"]
      },
      {
        week: "11-12",
        content: ["Model Explainability (SHAP, LIME)"],
        projects: "Explain why a transaction was flagged as fraudulent.",
        resources: ["SHAP Tutorial"]
      }
    ],
    outcome: "Student can build, evaluate, and explain fraud detection models.",
    deliverable: "Jupyter Notebook with a fraud classifier (F1-score > 0.8)."
  },
  {
    title: "Fraud Investigation Fundamentals",
    weeks: "13-16",
    objective: "Introduce fraud investigation workflows using technical skills from Phases 1-2.",
    topics: [
      {
        week: "13",
        content: ["Fraud Triangle & Typologies"],
        projects: "Case study: Theranos financial fraud.",
        resources: ["Documentary: The Inventor: Out for Blood in Silicon Valley (HBO)"]
      },
      {
        week: "14",
        content: ["Forensic Accounting (Benford's Law)"],
        projects: "Apply Benford's Law to detect synthetic invoice fraud.",
        resources: ["Benford's Law in Python"]
      },
      {
        week: "15-16",
        content: ["Legal Frameworks (AML, GDPR)"],
        projects: "Draft an investigation plan for a mock money laundering case.",
        resources: ["ACFE Fraud Prevention Checklist"]
      }
    ],
    outcome: "Student connects technical skills to fraud investigation workflows.",
    deliverable: "Forensic report on a simulated invoice fraud case."
  },
  {
    title: "Advanced AI & Capstone",
    weeks: "17-19",
    objective: "Use deep learning/AI for cutting-edge fraud detection.",
    topics: [
      {
        week: "17",
        content: ["Autoencoders for Anomaly Detection"],
        projects: "Train an autoencoder to spot crypto fraud patterns.",
        resources: ["TensorFlow/Keras tutorials"]
      },
      {
        week: "18-19",
        content: ["Capstone Project"],
        projects: "Investigate synthetic money laundering via crypto.",
        resources: ["Synthetic blockchain data generator"]
      }
    ],
    outcome: "Student deploys AI models to solve complex fraud scenarios.",
    deliverable: "End-to-end crypto fraud analysis report with code."
  },
  {
    title: "Certification & Career Prep",
    weeks: "20",
    objective: "Prepare for CFE certification and job readiness.",
    topics: [
      {
        week: "20",
        content: [
          "CFE Exam Sections A & B (Financial Transactions)",
          "Resume & LinkedIn Optimization",
          "Mock Interview"
        ],
        projects: "Timed practice exams, Resume drafting, Interview preparation",
        resources: ["ACFE Study Materials", "AI Resume Builders"]
      }
    ],
    outcome: "Student is ready to take the CFE exam and apply for fraud analyst roles.",
    deliverable: "Polished portfolio (GitHub) + certification study plan."
  }
];

const tools = [
  "Python Libraries: Pandas, Scikit-learn, Imbalanced-Learn, SHAP, TensorFlow",
  "Datasets: Kaggle Credit Card Fraud, ACFE Case Studies",
  "Certification Prep: ACFE's CFE Exam Study Guide"
];

export default function CurriculumPage() {
  const handleDownload = () => {
    generatePDF(phases, "AI-Driven Fraud Investigation & Financial Forensics Curriculum");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-12 px-4 font-['Inter',sans-serif]">
      <div className="max-w-7xl mx-auto text-gray-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-fuchsia-900 backdrop-blur-xl rounded-3xl shadow-2xl p-16 mb-8 border-2 border-indigo-500/50">
          <div className="flex flex-col items-center text-center">
            <h1 className="relative">
              <span className="absolute -top-1 left-1 text-5xl md:text-6xl xl:text-7xl font-black text-indigo-950/20">
                CURRICULUM
              </span>
              <span className="relative text-5xl md:text-6xl xl:text-7xl font-black bg-gradient-to-r from-indigo-300 via-purple-200 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(167,139,250,0.5)]">
                CURRICULUM
              </span>
            </h1>
            
            <div className="relative z-10 -mt-4 mb-6">
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-3">
                AI-Driven Fraud Investigation
              </h2>
              <h3 className="text-xl md:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                & Financial Forensics
              </h3>
            </div>

            <p className="text-xl md:text-2xl font-medium text-indigo-200 mb-8 tracking-wide">
              Genius Institute of Information Technology
            </p>

            <div className="flex gap-8 text-lg justify-center">
              <span className="flex items-center gap-3 bg-indigo-950/50 px-8 py-4 rounded-2xl border border-indigo-400/30 text-indigo-300 shadow-lg shadow-indigo-500/20">
                <Calendar className="w-6 h-6" />
                <span className="font-medium">Duration: 20 weeks</span>
              </span>
              <span className="flex items-center gap-3 bg-indigo-950/50 px-8 py-4 rounded-2xl border border-pink-400/30 text-pink-300 shadow-lg shadow-pink-500/20">
                <Target className="w-6 h-6" />
                <span className="font-medium">Goal: CFE Certification</span>
              </span>
              <span className="flex items-center gap-3 bg-indigo-950/50 px-8 py-4 rounded-2xl border border-purple-400/30 text-purple-300 shadow-lg shadow-purple-500/20">
                <GraduationCap className="w-6 h-6" />
                <span className="font-medium">Level: Advanced</span>
              </span>
            </div>

            <button
              onClick={handleDownload}
              className="mt-12 flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-500/25 text-xl font-medium"
            >
              <Download className="w-7 h-7" />
              Download PDF
            </button>
          </div>
        </div>

        {/* Phases */}
        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div key={index} className="bg-black/50 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-purple-500/20 shadow-purple-500/10">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
                    <PhaseIcon className="w-8 h-8 text-yellow-400" />
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                      Phase {index + 1}: {phase.title}
                    </span>
                    {index === 0 && <Code className="w-6 h-6 text-green-400" />}
                    {index === 1 && <Brain className="w-6 h-6 text-pink-400" />}
                    {index === 2 && <Shield className="w-6 h-6 text-yellow-400" />}
                    {index === 3 && <Cpu className="w-6 h-6 text-blue-400" />}
                    {index === 4 && <Award className="w-6 h-6 text-purple-400" />}
                  </h2>
                  <p className="text-gray-400 flex items-center gap-3 text-lg font-medium">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    Weeks {phase.weeks}
                  </p>
                </div>
                <span className="px-6 py-3 bg-black/50 text-orange-400 rounded-2xl text-base font-medium flex items-center gap-3 border border-orange-500/20 shadow-lg shadow-orange-500/10">
                  <Clock className="w-5 h-5" />
                  <span>{phase.weeks} weeks</span>
                </span>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <ObjectiveIcon className="w-6 h-6 text-red-400" />
                  <span className="text-red-400">Objective</span>
                </h3>
                <p className="text-gray-400 pl-9 leading-relaxed text-lg">{phase.objective}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <TopicsIcon className="w-6 h-6 text-cyan-400" />
                  <span className="text-cyan-400">Topics & Activities</span>
                </h3>
                <div className="space-y-6">
                  {phase.topics.map((topic, tIndex) => (
                    <div key={tIndex} className="bg-black/50 rounded-2xl p-6 border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
                      <div className="flex justify-between mb-4">
                        <span className="font-medium flex items-center gap-3 text-lg">
                          <Clock className="w-5 h-5 text-blue-400" />
                          <span className="text-blue-400">Week {topic.week}</span>
                        </span>
                      </div>
                      <ul className="list-none space-y-3 text-gray-400 mb-4 pl-8 text-lg">
                        {topic.content.map((item, iIndex) => (
                          <li key={iIndex} className="flex items-start gap-3">
                            <Database className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="text-base">
                        <p className="font-medium flex items-center gap-3 mb-2">
                          <ProjectIcon className="w-5 h-5 text-yellow-400" />
                          <span className="text-yellow-400 text-lg">Project:</span>
                        </p>
                        <p className="text-gray-400 ml-8 text-lg">{topic.projects}</p>
                        <p className="font-medium mt-4 flex items-center gap-3 mb-2">
                          <ResourceIcon className="w-5 h-5 text-emerald-400" />
                          <span className="text-emerald-400 text-lg">Resources:</span>
                        </p>
                        <ul className="list-none space-y-2 text-gray-400 ml-8">
                          {topic.resources.map((resource, rIndex) => (
                            <li key={rIndex} className="flex items-start gap-3 text-lg">
                              <LineChart className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                              {resource}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-purple-500/20 pt-8">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                      <OutcomeIcon className="w-6 h-6 text-purple-400" />
                      <span className="text-purple-400">Outcome</span>
                    </h3>
                    <p className="text-gray-400 pl-9 text-lg">{phase.outcome}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                      <DeliverableIcon className="w-6 h-6 text-pink-400" />
                      <span className="text-pink-400">Deliverable</span>
                    </h3>
                    <p className="text-gray-400 pl-9 text-lg">{phase.deliverable}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Resources */}
        <div className="bg-black/50 backdrop-blur-xl rounded-3xl shadow-2xl p-10 mt-8 border border-purple-500/20 shadow-purple-500/10">
          <div className="flex items-center gap-4 mb-8">
            <Tool className="w-8 h-8 text-fuchsia-400" />
            <h2 className="text-3xl font-bold text-fuchsia-400">
              Tools & Resources
            </h2>
          </div>
          <ul className="space-y-4">
            {tools.map((tool, index) => (
              <li key={index} className="flex items-start gap-4 text-gray-400 text-lg">
                <Database className="w-5 h-5 text-green-400 mt-1" />
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}