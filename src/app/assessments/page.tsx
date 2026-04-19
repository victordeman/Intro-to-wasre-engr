import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const grading = [
  { item: "Team Project", weight: "45-55%", details: "Incremental deliverables including requirements, design, code, and final demo." },
  { item: "Individual Assignments/Reflections", weight: "20-25%", details: "Git exercises, code reviews, and personal retrospectives." },
  { item: "Quizzes/Midterm", weight: "15-20%", details: "Focus on application of core concepts and process models." },
  { item: "Participation/Peer Reviews", weight: "10%", details: "Active engagement in labs and constructive feedback to teammates." },
];

export default function Assessments() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Assessments & Policies</h1>
        <p className="text-xl text-muted-foreground">
          How your performance and engagement will be evaluated in this course.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-2xl">Grading Breakdown</CardTitle>
            <CardDescription>Weights are subject to slight adjustments based on class progress.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {grading.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 h-8 w-16 flex-shrink-0 flex items-center justify-center rounded bg-primary/10 text-primary font-bold text-sm">
                    {item.weight}
                  </div>
                  <div>
                    <h4 className="font-bold">{item.item}</h4>
                    <p className="text-sm text-muted-foreground">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Course Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm"><strong>Process over perfection:</strong> We value your journey through the SDLC more than a flawless final product.</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm"><strong>Experiential learning:</strong> Most learning happens during labs and team project work.</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm"><strong>Collaborative:</strong> Success depends on effective communication and professional teamwork.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
         <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
               <AlertCircle className="h-8 w-8 text-orange-500" />
               Late Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
               Each team has 3 "slip days" for the entire semester to be used on project deliverables. Once exhausted, a 10% penalty per day applies. Individual assignments are generally not accepted late without prior arrangement.
            </p>
         </div>
         <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
               <HelpCircle className="h-8 w-8 text-blue-500" />
               Academic Integrity
            </h2>
            <p className="text-muted-foreground leading-relaxed">
               Collaboration is required in teams, but all individual work must be your own. Use of AI tools is encouraged for learning and scaffolding, but you must be able to explain any code or artifact you submit.
            </p>
         </div>
      </div>

      <div className="bg-muted/30 border rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-8">For Instructors</h2>
        <Accordion className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-bold">Teaching Tips & Philosophy</AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <ul className="space-y-4 text-muted-foreground">
                <li><strong className="text-foreground">Scaffold everything:</strong> Provide templates for user stories, simple UML, test cases, and meeting agendas early on.</li>
                <li><strong className="text-foreground">Make it experiential:</strong> Students learn best by doing the project. Use failures (e.g., merge conflicts, changing requirements) as teaching moments.</li>
                <li><strong className="text-foreground">Address skill gaps gently:</strong> If basic OOP is shaky, dedicate part of Week 6 to a quick review/practice. Avoid assuming data structures — stick to lists/arrays/files.</li>
                <li><strong className="text-foreground">Team dynamics:</strong> Start with icebreakers and explicit guidelines. Monitor groups and intervene early on conflicts.</li>
                <li><strong className="text-foreground">Motivation:</strong> Highlight how these skills make them better coders and more employable, even before advanced CS topics.</li>
                <li><strong className="text-foreground">Balance:</strong> Roughly 40% lecture/discussion, 60% labs/project work.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
