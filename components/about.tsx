import { Card, CardContent } from "@/components/ui/card"
import { Brain, TrendingUp, Database, Zap } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Expert in building AI-powered solutions using LLMs, NLP, and deep learning frameworks",
    },
    {
      icon: TrendingUp,
      title: "Business Impact",
      description: "Proven track record of delivering data-driven insights that improve business metrics by 20-40%",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description:
        "Skilled in building scalable data pipelines and working with large datasets across multiple platforms",
    },
    {
      icon: Zap,
      title: "Real-time Solutions",
      description: "Experience in developing real-time AI systems and optimizing model performance for production",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate data scientist currently pursuing my Master's in Business Analytics at UC Davis. With
            experience across startups and Fortune 500 companies, I specialize in transforming complex data into
            actionable business insights using cutting-edge AI and machine learning techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="text-center border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <highlight.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
