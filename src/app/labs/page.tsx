import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ExternalLink } from "lucide-react";

const labs = [
  {
    week: 1,
    title: "Git Basics & Tooling",
    duration: "2 hours",
    difficulty: "Beginner",
    description: "Install necessary tools and get comfortable with basic Git operations like cloning, committing, and pushing code.",
    link: "https://github.com/victordeman/Intro-to-wasre-engr/tree/main/labs/lab1"
  },
  {
    week: 2,
    title: "Collaborative Git",
    duration: "2 hours",
    difficulty: "Beginner",
    description: "Practice branching, merging, and resolving conflicts in a shared repository with a partner.",
    link: "https://github.com/victordeman/Intro-to-wasre-engr/tree/main/labs/lab2"
  },
  {
    week: 4,
    title: "Requirements Documentation",
    duration: "3 hours",
    difficulty: "Intermediate",
    description: "Elicit and document functional and non-functional requirements for your team project using user stories.",
    link: "https://github.com/victordeman/Intro-to-wasre-engr/tree/main/labs/lab3"
  },
  {
    week: 6,
    title: "UML Modeling",
    duration: "3 hours",
    difficulty: "Intermediate",
    description: "Sketch high-level design and simple UML use case and class diagrams for your project's architecture.",
    link: "https://github.com/victordeman/Intro-to-wasre-engr/tree/main/labs/lab4"
  },
  {
    week: 8,
    title: "Unit Testing & QA",
    duration: "4 hours",
    difficulty: "Intermediate",
    description: "Write simple unit tests for your project features and set up a basic test suite using a framework like pytest.",
    link: "https://github.com/victordeman/Intro-to-wasre-engr/tree/main/labs/lab5"
  },
  {
    week: 9,
    title: "Continuous Integration",
    duration: "3 hours",
    difficulty: "Advanced",
    description: "Set up a basic CI pipeline using GitHub Actions to automate your project's build and test process.",
    link: "https://github.com/victordeman/Intro-to-wasre-engr/tree/main/labs/lab6"
  }
];

export default function Labs() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Hands-on Labs</h1>
        <p className="text-xl text-muted-foreground">
          Practical exercises to reinforce software engineering concepts. We follow a "learn by doing" philosophy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {labs.map((lab, index) => (
          <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline">Week {lab.week}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" />
                  {lab.duration}
                </div>
              </div>
              <CardTitle className="text-2xl">{lab.title}</CardTitle>
              <CardDescription className="flex items-center mt-1">
                 Difficulty: <span className="ml-1 font-medium text-foreground">{lab.difficulty}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{lab.description}</p>
            </CardContent>
            <CardFooter>
              <a href={lab.link} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="secondary" className="w-full">
                   <ExternalLink className="mr-2 h-4 w-4" />
                   View Lab Instructions
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="rounded-2xl bg-muted/50 p-8 md:p-12 border">
        <h2 className="text-2xl font-bold mb-6">Laboratory Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
             <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
             <h3 className="font-bold text-lg">Use the templates</h3>
             <p className="text-muted-foreground text-sm leading-relaxed">We provide scaffolded documents and templates. Your job is to implement the core logic or documentation, not the boilerplate.</p>
          </div>
          <div className="space-y-3">
             <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
             <h3 className="font-bold text-lg">Focus on Process</h3>
             <p className="text-muted-foreground text-sm leading-relaxed">Every lab emphasizes the 'how' and 'why' of the process, rather than just getting the code to run once.</p>
          </div>
          <div className="space-y-3">
             <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
             <h3 className="font-bold text-lg">Teamwork is Key</h3>
             <p className="text-muted-foreground text-sm leading-relaxed">Labs often involve pair work. Use these opportunities to practice professional communication and collaboration.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
