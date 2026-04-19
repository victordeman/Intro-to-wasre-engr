import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    title: "Agile Software Project",
    level: "Intermediate",
    teamSize: "3-4",
    description: "Build a meaningful software application from scratch using the full SDLC and Agile methodologies.",
    deliverables: [
      "Requirements Document (User Stories)",
      "High-level Design & UML Diagrams",
      "Working code with Unit Tests",
      "Final Video Demo & Presentation"
    ]
  },
  {
    title: "Requirements Elicitation Workshop",
    level: "Beginner",
    teamSize: "2-3",
    description: "Role-play as stakeholders and engineers to elicit, document, and validate requirements for a legacy system replacement.",
    deliverables: [
      "Elicitation Interview Transcripts",
      "Validated User Stories",
      "Acceptance Criteria Suite"
    ]
  }
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Capstone Projects</h1>
        <p className="text-xl text-muted-foreground">
          Apply your knowledge to build a significant software project in teams.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col border-2 border-primary/10">
            <CardHeader>
              <div className="flex gap-2 mb-4">
                 <Badge variant="secondary">{project.level}</Badge>
                 <Badge variant="outline">Teams of {project.teamSize}</Badge>
              </div>
              <CardTitle className="text-3xl font-bold">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider">Deliverables</h4>
                <ul className="space-y-2">
                  {project.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-card border rounded-2xl p-8">
        <div>
           <h3 className="font-bold text-lg mb-2">Team Size</h3>
           <p className="text-muted-foreground text-sm">Projects are completed in teams of 3 to 4 students. Individual projects are not permitted to ensure teamwork experience.</p>
        </div>
        <Separator orientation="vertical" className="hidden md:block h-24 self-center mx-auto" />
        <div>
           <h3 className="font-bold text-lg mb-2">Assessment</h3>
           <p className="text-muted-foreground text-sm">Grading is based on functionality (40%), process artifacts (40%), and documentation/demo (20%).</p>
        </div>
        <Separator orientation="vertical" className="hidden md:block h-24 self-center mx-auto" />
        <div>
           <h3 className="font-bold text-lg mb-2">Timeline</h3>
           <p className="text-muted-foreground text-sm">Initial proposals are due by Week 3. Sprint reviews occur every 3 weeks. Final presentations in Week 15.</p>
        </div>
      </div>
    </div>
  );
}
