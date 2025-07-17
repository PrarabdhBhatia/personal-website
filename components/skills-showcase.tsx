import { Database, Code, BarChart3, Brain, GitBranch, Cloud, Zap, TrendingUp } from "lucide-react"

export function SkillsShowcase() {
  const skills = [
    {
      name: "Python",
      icon: Code,
      color: "from-blue-400 to-blue-600",
      description: "pandas, NumPy, scikit-learn",
    },
    {
      name: "SQL",
      icon: Database,
      color: "from-orange-400 to-orange-600",
      description: "MySQL, PostgreSQL, BigQuery",
    },
    {
      name: "Machine Learning",
      icon: Brain,
      color: "from-purple-400 to-purple-600",
      description: "TensorFlow, PyTorch, scikit-learn",
    },
    {
      name: "Data Visualization",
      icon: BarChart3,
      color: "from-green-400 to-green-600",
      description: "Tableau, Power BI, Matplotlib",
    },
    {
      name: "Cloud Platforms",
      icon: Cloud,
      color: "from-cyan-400 to-cyan-600",
      description: "AWS, Databricks, Snowflake",
    },
    {
      name: "NLP & AI",
      icon: Zap,
      color: "from-yellow-400 to-yellow-600",
      description: "LangChain, Hugging Face, OpenAI",
    },
    {
      name: "Version Control",
      icon: GitBranch,
      color: "from-red-400 to-red-600",
      description: "Git, Jira, Agile",
    },
    {
      name: "Analytics",
      icon: TrendingUp,
      color: "from-indigo-400 to-indigo-600",
      description: "A/B Testing, Statistical Modeling",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Core Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise across the full data science and machine learning technology stack
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hexagonal container */}
              <div className="relative mb-4">
                {/* Hexagon background */}
                <div
                  className="w-20 h-20 bg-gradient-to-br from-muted to-card border border-border hover:border-primary/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20"
                  style={{
                    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                />

                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Skill name */}
              <h3 className="text-sm font-semibold text-foreground mb-1 text-center group-hover:text-primary transition-colors">
                {skill.name}
              </h3>

              {/* Description */}
              <p className="text-xs text-muted-foreground text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
