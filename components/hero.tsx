import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Image from "next/image" // Import the Image component

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Professional background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_50%)]" />
      <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:50px_50px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            {/* Your Photo */}
            <div className="mb-6">
              <Image
                src="/prarabdh-bhatia.png" // Using the provided image
                alt="Prarabdh Bhatia"
                width={250} // Increased width for a larger image
                height={250} // Increased height for a larger image
                className="rounded-full border-4 border-primary/50 shadow-lg mx-auto animate-float object-cover" // Added object-cover to ensure it fills the circle
              />
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground">Prarabdh Bhatia</h1>
            <p className="text-xl sm:text-2xl text-primary font-medium">
              Data Scientist & Business Analytics Professional
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specializing in Applied Machine Learning, Natural Language Processing, and Generative AI solutions that
              drive business impact
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" asChild className="border-primary/30 hover:bg-primary/10 bg-transparent">
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary">
              <a href="https://github.com/PrarabdhBhatia" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary">
              <a href="https://www.linkedin.com/in/prarabdhbhatia/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary">
              <a href="mailto:prabhatia@ucdavis.edu">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary">
              <a href="tel:(628)297-8735">
                <Phone className="h-6 w-6" />
                <span className="sr-only">Phone</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
