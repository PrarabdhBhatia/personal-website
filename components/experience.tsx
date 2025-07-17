import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Briefcase } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Data Science Researcher",
      company: "Stealth Healthcare Startup",
      location: "San Francisco, California",
      period: "Apr. 2025 – Jun. 2025",
      achievements: [
        "Building a domain-specific knowledge graph using 2,000+ curated QA pairs, boosting LLM answer accuracy by 27% for healthcare queries",
        "Fine-tuning and evaluating LLMs in a high-velocity startup environment, reducing response latency by 35% and improving top-3 answer relevance by 40%",
      ],
      skills: ["LLMs", "Knowledge Graphs", "Healthcare AI", "Model Fine-tuning"],
      current: false,
    },
    {
      title: "Data Scientist",
      company: "Somi (Practicum Project)",
      location: "San Francisco, California",
      period: "Aug. 2024 – Jun. 2025",
      achievements: [
        "Leveraged SQL queries and Tableau dashboards to analyse user behaviour and optimize conversion funnels—improving product discovery and engagement by 22%",
        "Processed and refined a dataset of 40,000+ products from multiple retailers by leveraging Python (Pandas, NumPy, Matplotlib) and NLP techniques",
        "Building a real-time AI-powered stylist chatbot MVP with Llama 3.2 and Hugging Face Transformers, enabling live, adaptive product recommendations",
      ],
      skills: ["Python", "SQL", "Tableau", "NLP", "Llama 3.2", "Hugging Face"],
      current: false,
    },
    {
      title: "Analyst",
      company: "Evalueserve",
      location: "Gurgaon, India",
      period: "Jul. 2023 – Jul. 2024",
      achievements: [
        "Conducted strategic analysis for $125M+ in global tech product investments by Fortune 500 clients",
        "Developed a multi-label classification model to automatically classify patents by technology using patent codes, fine-tuning a pre-trained BERT model with Hugging Face and Python, achieving a 30% reduction in classification time",
      ],
      skills: ["BERT", "Patent Analysis", "Strategic Analysis", "Bloomberg", "FactSet"],
      current: false,
    },
    {
      title: "Business Development Intern",
      company: "Goldi Solar Pvt. Ltd.",
      location: "Surat, India",
      period: "Jul. 2022 – Aug. 2022",
      achievements: [
        "Built interactive Tableau dashboards to communicate regional sales trends, inventory gaps, and product performance",
        "Designed an inventory forecasting model using Random Forest (scikit-learn), reducing stockouts by 12%",
      ],
      skills: ["Tableau", "Random Forest", "MySQL", "Inventory Forecasting"],
      current: false,
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground">
            My journey in data science and analytics across various industries
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-emerald-400 to-primary transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 transform md:-translate-x-2 -translate-y-2 md:translate-y-0">
                  <div
                    className={`w-4 h-4 rounded-full border-4 ${
                      exp.current
                        ? "bg-primary border-primary shadow-lg shadow-primary/50"
                        : "bg-background border-primary"
                    }`}
                  >
                    {exp.current && (
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.title}</h3>
                          <p className="text-lg font-medium text-primary">{exp.company}</p>
                        </div>
                        {exp.current && <Badge className="bg-primary/15 text-primary border-primary/30">Current</Badge>}
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-2/12"></div>
              </div>
            ))}
          </div>

          {/* Timeline end */}
          <div className="absolute left-4 md:left-1/2 bottom-0 w-4 h-4 transform md:-translate-x-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-emerald-400"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
