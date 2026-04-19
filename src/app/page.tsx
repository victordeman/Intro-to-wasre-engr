import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, GitBranch, ShieldCheck, Zap, Code } from "lucide-react";

const highlights = [
  {
    title: "Process-Focused",
    description: "Learn why processes matter. We shift the mindset from just 'hacking' small programs to engineering large-scale software.",
    icon: Zap,
  },
  {
    title: "Hands-on Labs",
    description: "Master essential tools like Git and GitHub Actions through practical exercises designed for real-world collaboration.",
    icon: GitBranch,
  },
  {
    title: "Team Project",
    description: "Work in teams to experience the full SDLC—from requirements elicitation to final deployment and retrospective.",
    icon: Users,
  },
  {
    title: "Agile Practices",
    description: "Practice Scrum and Agile principles. Learn to adapt to evolving requirements and deliver incremental value.",
    icon: Code,
  },
  {
    title: "Design Principles",
    description: "Introduction to architectural styles, UML modeling, and SOLID principles at a level tailored for undergraduates.",
    icon: BookOpen,
  },
  {
    title: "Quality & Ethics",
    description: "Understand the importance of testing, security basics, and professional ethics in the software engineering profession.",
    icon: ShieldCheck,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Introduction to Software Engineering
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A practical, hands-on introduction to building reliable, maintainable, and professional software systems.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/syllabus">
                <Button size="lg">View Syllabus</Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg">Course Project</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Course Highlights</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed">
              Everything you need to transition from a student programmer to a professional software engineer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center space-x-4 space-y-0">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Dive In */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to dive in?</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-lg">
              Check out the syllabus or explore the core course project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/syllabus">
                <Button variant="secondary" className="w-full sm:w-auto">Syllabus</Button>
              </Link>
              <Link href="/labs">
                <Button variant="secondary" className="w-full sm:w-auto">Labs</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
