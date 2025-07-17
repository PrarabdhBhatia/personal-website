import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Dynamic Pricing Optimization in Hospitality",
      description:
        "Performed demand forecasting for financial products using R on app-based product offerings to guide dynamic pricing strategies aligned with user sensitivity by region and segment.",
      technologies: ["R", "Demand Forecasting", "Dynamic Pricing", "Statistical Analysis"],
      type: "Analytics",
    },
    {
      title: "Credit Card Churn Segmentation",
      description:
        "Segmented credit card users using SQL based on tenure, usage behaviour, and demographics for risk modelling and identifying high-LTV cohorts for retention initiatives.",
      technologies: ["SQL", "Customer Segmentation", "Risk Modeling", "Retention Analysis"],
      type: "Data Analysis",
    },
    {
      title: "Stock Price Prediction with Sentiment Analysis",
      description:
        "Designed and implemented a stock price prediction pipeline integrating Reddit data sentiment analysis and time-series forecasting models to analyse market sentiment and predict stock movements.",
      technologies: ["Python", "Sentiment Analysis", "Time Series", "Reddit API", "Machine Learning"],
      type: "Machine Learning",
    },
    {
      title: "Social Media Complaint Analysis",
      description:
        "Used R to analyse the impact of social media content types and self-featured posts on engagement using linear regression and instrumental variables to address endogeneity.",
      technologies: ["R", "Linear Regression", "Statistical Modeling", "Social Media Analytics"],
      type: "Research",
    },
    {
      title: "AI-Powered Stylist Chatbot",
      description:
        "Building a real-time AI-powered stylist chatbot MVP with Llama 3.2 and Hugging Face Transformers for adaptive product recommendations, improving personalization accuracy by 22%.",
      technologies: ["Llama 3.2", "Hugging Face", "NLP", "Real-time Processing", "Recommendation Systems"],
      type: "AI/ML",
    },
    {
      title: "Healthcare Knowledge Graph",
      description:
        "Building a domain-specific knowledge graph using 2,000+ curated QA pairs, boosting LLM answer accuracy by 27% for healthcare queries with medical professional collaboration.",
      technologies: ["Knowledge Graphs", "LLMs", "Healthcare AI", "NLP", "Domain Expertise"],
      type: "AI/ML",
    },
  ]

  const getTypeColor = (type: string) => {
    const colors = {
      Analytics: "bg-blue-500/15 text-blue-300 border-blue-400/30",
      "Data Analysis": "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
      "Machine Learning": "bg-purple-500/15 text-purple-300 border-purple-400/30",
      Research: "bg-amber-500/15 text-amber-300 border-amber-400/30",
      "AI/ML": "bg-rose-500/15 text-rose-300 border-rose-400/30",
    }
    return colors[type as keyof typeof colors] || "bg-gray-500/15 text-gray-300 border-gray-400/30"
  }

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            A selection of projects showcasing my expertise in data science and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge className={`text-xs border ${getTypeColor(project.type)}`}>{project.type}</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/30 hover:bg-primary/10 bg-transparent text-primary hover:text-primary"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/30 hover:bg-primary/10 bg-transparent text-primary hover:text-primary"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
