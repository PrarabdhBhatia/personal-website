import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prarabdh Bhatia - Data Scientist & Analytics Professional",
  description:
    "Portfolio of Prarabdh Bhatia, a data scientist specializing in machine learning, NLP, and AI solutions. Currently pursuing MS in Business Analytics at UC Davis.",
  keywords: "data scientist, machine learning, NLP, AI, business analytics, python, SQL, portfolio",
  authors: [{ name: "Prarabdh Bhatia" }],
  openGraph: {
    title: "Prarabdh Bhatia - Data Scientist & Analytics Professional",
    description: "Portfolio showcasing expertise in machine learning, NLP, and AI solutions",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
