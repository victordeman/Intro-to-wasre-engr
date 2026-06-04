import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { ExternalLink } from "lucide-react";

const curriculum = [
  {
    week: 1,
    title: "Introduction to Software Engineering & Mindset Shift",
    content: [
      "What is software engineering? Why processes matter (vs. just 'hacking' small programs).",
      "Software failures/successes (simple case studies). Ethics and professionalism basics.",
      "Overview of SDLC; high-level process models.",
      "Course project intro + team formation.",
      "Lab: Install tools, basic Git setup (clone, commit, push).",
      "Reading: Sommerville Ch. 1–2; Pragmatic Programmer (intro + 'The Cat Ate My Source Code').",
      {
        label: "Week 1 Resources",
        url: "https://github.com/victordeman/Intro-to-wasre-engr/tree/main-11830105413473987484/links/week1",
      },
    ],
  },
  {
    week: 2,
    title: "Tools for Collaboration & Basic Project Management",
    content: [
      "Version control with Git (branching, merging, pull requests — start simple).",
      "Introduction to teamwork: communication, roles, common pitfalls.",
      "Basic project planning and estimation (for small scopes).",
      "Lab: Pair exercise — contribute to a shared simple repo; initial project brainstorming.",
      "Reading: Sommerville Ch. 3; Pragmatic Programmer (relevant chapters on working together).",
      {
        label: "Week 2 Resources",
        url: "https://github.com/victordeman/intro_to_software_engr_main/tree/main-11830105413473987484/links/week2",
      },
    ],
  },
  {
    week: "3-4",
    title: "Requirements Engineering (Focus on Simplicity)",
    content: [
      "Functional vs. non-functional requirements.",
      "Elicitation (interviews, user stories for the project).",
      "Documenting requirements (user stories, simple use cases). Validation and change.",
      "Lab: Elicit/document requirements for team project; create a basic product backlog.",
      "Reading: Sommerville Ch. 4–5; Wiegers excerpts.",
      {
        label: "Week 3-4 Resources",
        url: "https://github.com/victordeman/intro_to_software_engr_main/tree/main-11830105413473987484/links/week3",
      },
    ],
  },
  {
    week: 5,
    title: "High-Level Design & Modeling",
    content: [
      "Basic architectural styles (e.g., layered, simple MVC for the project).",
      "Introduction to modeling: UML use case and simple class diagrams (keep lightweight).",
      "Design principles: modularity, abstraction, separation of concerns.",
      "Lab: Sketch high-level design and simple UML for the project.",
      "Reading: Sommerville Ch. 6–7.",
      {
        label: "Week 5 Resources",
        url: "https://github.com/victordeman/intro_to_software_engr_main/tree/main-11830105413473987484/links/week5",
      },
    ],
  },
  {
    week: 6,
    title: "Detailed Design & Coding Practices",
    content: [
      "Basic object-oriented concepts (if not covered in prior coding; classes, objects).",
      "SOLID principles at a gentle level.",
      "Coding standards, readability, refactoring basics.",
      "Lab: Refine design; start implementing core features in teams.",
      "Reading: Sommerville relevant sections; Clean Code (Ch. on meaningful names, functions).",
      {
        label: "Week 6 Resources",
        url: "https://github.com/victordeman/intro_to_software_engr_main/tree/main-11830105413473987484/links/week6",
      },
    ],
  },
  {
    week: 7,
    title: "Implementation & Collaborative Development",
    content: [
      "Writing maintainable code; technical debt intro.",
      "Code reviews, pair programming basics.",
      "Build and integration basics.",
      "Lab: Continue implementation with peer reviews.",
      "Reading: Clean Code + Pragmatic Programmer.",
      {
        label: "Week 7 Resources",
        url: "https://github.com/victordeman/intro_to_software_engr_main/tree/main-11830105413473987484/links/week7",
      },
    ],
  },
  {
    week: 8,
    title: "Testing Fundamentals",
    content: [
      "Why test? Unit, integration, system testing (black/white box at basic level).",
      "Writing simple tests; intro to frameworks (e.g., pytest/unittest).",
      "Test-driven development (light intro).",
      "Lab: Add tests to project features.",
      "Reading: Sommerville Ch. 8–9.",
    ],
  },
  {
    week: 9,
    title: "Quality Assurance & Continuous Integration Basics",
    content: [
      "Reviews, inspections, basic metrics.",
      "Introduction to CI (e.g., GitHub Actions for simple builds/tests).",
      "Quality attributes (usability, reliability — discussed simply).",
      "Lab: Set up basic CI for the project.",
      "Reading: Sommerville testing/quality sections.",
    ],
  },
  {
    week: 10,
    title: "Agile Development in Practice",
    content: [
      "Agile principles vs. plan-driven.",
      "Scrum basics: sprints, backlog, standups, retrospectives.",
      "Adapting to change (requirements will evolve in the project).",
      "Lab: Run sprint planning/review for the project.",
      "Reading: Sommerville agile parts; Pragmatic Programmer.",
    ],
  },
  {
    week: 11,
    title: "Maintenance, Evolution & Configuration Management",
    content: [
      "Software changes over time; re-engineering basics.",
      "Versioning and release management.",
      "Lab: Plan enhancements or bug fixes for the project.",
      "Reading: Sommerville Ch. 10–11.",
    ],
  },
  {
    week: 12,
    title: "Ethics, Security Basics & Emerging Topics",
    content: [
      "Professional ethics in depth (ACM/IEEE code).",
      "Basic secure coding practices (input validation, etc.).",
      "High-level DevOps/cloud intro (awareness only).",
      "Reading: Sommerville ethics/security.",
    ],
  },
  {
    week: "13-14",
    title: "Focused Project Work & Integration",
    content: [
      "Dedicated time for implementation, testing, integration, documentation, and polishing.",
      "Mid-project retrospective and adjustments.",
      "Optional: Short guest talk on real-world entry-level SE.",
    ],
  },
  {
    week: 15,
    title: "Project Presentations, Reflection & Wrap-Up",
    content: [
      "Final demos and team presentations.",
      "Individual/team retrospectives: what worked, lessons on teamwork/process.",
      "Course review; career paths and next steps (e.g., data structures course).",
      "Final assessment.",
    ],
  },
];

export default function Syllabus() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-grow">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Course Syllabus</h1>
            <p className="text-xl text-muted-foreground">
              A 15-week journey through the foundations of software engineering processes, tools, and collaboration.
            </p>
          </div>

          <Accordion className="w-full space-y-4">
            {curriculum.map((week, index) => (
              <AccordionItem key={index} value={`week-${index}`} className="border rounded-lg px-4 bg-card">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center text-left">
                    <div className="mr-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                      {week.week}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Week {week.week}</div>
                      <div className="text-xl font-bold">{week.title}</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-16">
                  <ul className="space-y-3">
                    {week.content.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {typeof item === "string" ? (
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        ) : (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-flex items-center gap-1.5 leading-relaxed"
                          >
                            {item.label}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="w-full md:w-80 space-y-8">
          <div className="rounded-xl border bg-card p-6 sticky top-24">
            <h3 className="text-lg font-bold mb-4">Course Progress</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Completion</span>
                <span className="font-medium text-primary">0%</span>
              </div>
              <Progress value={0} className="h-2" />
              <p className="text-xs text-muted-foreground">
                Progress tracks your journey through the 15-week curriculum.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider">Quick Links</h4>
              <nav className="flex flex-col space-y-2 text-sm">
                <a href="#week-1" className="text-muted-foreground hover:text-primary transition-colors">Course Policies</a>
                <a href="#week-1" className="text-muted-foreground hover:text-primary transition-colors">Grading Rubric</a>
                <a href="#week-1" className="text-muted-foreground hover:text-primary transition-colors">Team Formation</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
