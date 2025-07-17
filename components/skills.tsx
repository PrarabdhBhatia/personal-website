import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, BarChart, Cpu, GitBranch, Wrench } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      icon: Cpu,
      title: "Specializations",
      skills: [
        "Applied Machine Learning",
        "Natural Language Processing",
        "A/B Testing",
        "Statistical Modelling",
        "Data Engineering Pipelines",
        "Generative AI (LangChain, Hugging Face, OpenAI)",
        "Data Visualization",
      ],
    },
    {
      icon: Code,
      title: "Programming & Tools",
      skills: [
        "Python (pandas, NumPy, scikit-learn)",
        "SQL",
        "R",
        "Advanced MS Excel (Excel VBA)",
        "Spark (DataFrames and SparkSQL)",
        "Kafka",
      ],
    },
    {
      icon: Wrench,
      title: "Frameworks",
      skills: [
        "scikit-learn",
        "TensorFlow",
        "Keras",
        "PyTorch",
        "PySpark",
        "LangChain",
        "Hugging Face",
        "OpenAI API",
        "XGBoost",
        "LightGBM",
      ],
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["Snowflake", "MySQL", "Databricks", "Google BigQuery"],
    },
    {
      icon: BarChart,
      title: "Visualization",
      skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly"],
    },
    {
      icon: GitBranch,
      title: "Development & Collaboration",
      skills: ["Git (Version Control)", "Jira/Kanban boards", "Agile Methodology", "Sprint Planning"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground">A comprehensive toolkit for data science and machine learning</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <category.icon className="h-5 w-5 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
