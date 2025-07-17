import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Master of Science, Business Analytics",
      institution: "University of California, Davis",
      location: "San Francisco, CA",
      period: "Expected Jul. 2025",
      designation: "STEM",
      awards: ["Dean's MSBA Fellowship Award"],
      description:
        "Comprehensive program focusing on advanced analytics, machine learning, and business intelligence with hands-on experience in real-world data science projects.",
    },
    {
      degree: "Bachelor of Engineering, Electrical and Electronics Engineering",
      institution: "Panjab University",
      location: "Chandigarh, India",
      period: "May 2023",
      designation: "",
      awards: ["Merit-based Major upgrade (Biotechnology to Electrical) (Top 5%)"],
      description:
        "Strong foundation in engineering principles with focus on electronics, signal processing, and mathematical modeling.",
    },
  ]

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground">Academic foundation in analytics and engineering</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-6 w-6 text-primary mt-1" />
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                    <p className="text-lg font-medium text-primary mb-2">{edu.institution}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {edu.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.period}
                      </div>
                      {edu.designation && <Badge variant="outline">{edu.designation}</Badge>}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{edu.description}</p>
                {edu.awards.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Award className="h-4 w-4 text-primary" />
                      Awards & Recognition
                    </div>
                    <ul className="space-y-1">
                      {edu.awards.map((award, i) => (
                        <li key={i} className="text-sm text-muted-foreground ml-6">
                          • {award}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
