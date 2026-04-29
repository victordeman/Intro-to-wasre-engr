import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Clock } from "lucide-react";

const staff = [
  {
    name: "PROF. Ekpe Okorafor",
    role: "Instructor",
    credentials: "B.Sc. Electronic Engr. (UNN), M.Sc. Comp. Eng. (Texas A&M), Ph.D. Comp. Eng. (Texas A&M)",
    bio: "Professor Ekpe Okorafor brings extensive expertise in computer engineering and innovation. His work focuses on leveraging emerging technologies to solve complex engineering challenges and fostering next-generation computing talent.",
    email: "e.okorafor@university.edu",
    officeHours: "By Appointment",
    image: "/staff/ekpe-okorafor.jpg",
  },
  {
    name: "Dr.-Ing Chukwuka Victor Obionwu",
    role: "Instructor",
    credentials: "",
    bio: "Dr.-Ing Chukwuka Victor Obionwu specializes in innovative computing systems and engineering. He is dedicated to exploring the intersection of technology and industry, guiding students through the evolving landscape of new technologies.",
    email: "v.obionwu@university.edu",
    officeHours: "By Appointment",
    image: "/staff/chukwuka-obionwu.jpg",
  },
];

export default function StaffPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Course Staff</h1>
        <p className="text-xl text-muted-foreground">
          Meet the instructors for Introduction to Software Engineering.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8">Instructors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {staff.map((member, index) => (
            <Card key={index} className="overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">{member.name}</CardTitle>
                      <Badge variant="secondary" className="mt-2">
                        {member.role}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {member.credentials && (
                    <p className="text-sm text-muted-foreground italic">
                      {member.credentials}
                    </p>
                  )}
                  <p className="text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="pt-4 space-y-2 border-t">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Mail className="w-4 h-4 mr-2" />
                      <a href={`mailto:${member.email}`} className="hover:underline">{member.email}</a>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Office Hours: {member.officeHours}</span>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-muted-foreground">Teaching Assistants</h2>
        <p className="text-muted-foreground italic">
          There are no Teaching Assistants for this course.
        </p>
      </div>
    </div>
  );
}
