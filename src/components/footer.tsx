import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-4">Intro to SE</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              A modern introduction to software engineering principles, processes, and tools.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Course</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/syllabus" className="hover:text-foreground">Syllabus</Link></li>
              <li><Link href="/labs" className="hover:text-foreground">Labs</Link></li>
              <li><Link href="/projects" className="hover:text-foreground">Projects</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/resources" className="hover:text-foreground">Reading List</Link></li>
              <li><Link href="/assessments" className="hover:text-foreground">Assessments</Link></li>
              <li><a href="https://github.com/victordeman/Intro-to-wasre-engr" className="hover:text-foreground">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Victor Deman. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
