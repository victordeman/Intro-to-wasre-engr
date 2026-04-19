import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, ExternalLink, Github } from "lucide-react";

const textbooks = [
  {
    title: "Software Engineering",
    author: "Ian Sommerville",
    edition: "11th Edition",
    publisher: "Pearson",
    type: "Main Textbook",
    description: "The primary text for understanding software engineering processes and systems."
  },
  {
    title: "The Pragmatic Programmer: Your Journey to Mastery",
    author: "Andrew Hunt & David Thomas",
    edition: "20th Anniversary Edition",
    type: "Supplementary",
    description: "Essential reading for developing a professional mindset and practical coding habits."
  },
  {
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    type: "Supplementary",
    description: "Focuses on writing readable, maintainable, and professional-grade code."
  },
  {
    title: "Software Requirements",
    author: "Karl Wiegers and Joy Beatty",
    edition: "3rd Edition",
    type: "Supplementary (Excerpts)",
    description: "Deep dive into the requirements engineering process and documentation."
  }
];

export default function Resources() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Course Resources</h1>
        <p className="text-xl text-muted-foreground">
          Recommended textbooks, supplementary readings, and essential tools for the course.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {textbooks.map((book, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant={book.type === "Main Textbook" ? "default" : "secondary"}>
                  {book.type}
                </Badge>
                <Book className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardTitle className="text-2xl">{book.title}</CardTitle>
              <CardDescription className="text-lg">
                {book.author} {book.edition && `• ${book.edition}`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{book.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <a href="https://github.com/victordeman/Intro-to-wasre-engr" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-xl border bg-card hover:border-primary transition-colors">
              <Github className="h-8 w-8 mb-4 group-hover:text-primary transition-colors" />
              <h3 className="font-bold text-lg mb-2">Course GitHub</h3>
              <p className="text-sm text-muted-foreground">Find all lab starter code, project templates, and example documentation here.</p>
           </a>
           <div className="p-6 rounded-xl border bg-card">
              <ExternalLink className="h-8 w-8 mb-4 text-muted-foreground" />
              <h3 className="font-bold text-lg mb-2">ACM/IEEE Code of Ethics</h3>
              <p className="text-sm text-muted-foreground">The foundational document for professional conduct in software engineering.</p>
           </div>
           <div className="p-6 rounded-xl border bg-card">
              <ExternalLink className="h-8 w-8 mb-4 text-muted-foreground" />
              <h3 className="font-bold text-lg mb-2">Git Documentation</h3>
              <p className="text-sm text-muted-foreground">Official Git documentation and interactive tutorials for mastering version control.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
