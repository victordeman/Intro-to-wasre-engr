import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const staff = [
  {
    name: "PROF. Ekpe Okorafor",
    role: "Instructor",
    credentials: "B.Sc. Electronic Engr. (UNN), M.Sc. Comp. Eng. (Texas A&M), Ph.D. Comp. Eng. (Texas A&M)",
    image: "/staff/ekpe-okorafor.jpg",
  },
  {
    name: "Dr.-Ing Chukwuka Victor Obionwu",
    role: "Instructor",
    credentials: "",
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {staff.map((member, index) => (
          <Card key={index} className="overflow-hidden flex flex-col">
            <div className="relative h-80 w-full">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
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
            <CardContent>
              {member.credentials && (
                <p className="text-sm text-muted-foreground italic">
                  {member.credentials}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Teaching Assistants</h2>
        <p className="text-muted-foreground italic">
          There are no Teaching Assistants for this course.
        </p>
      </div>
    </div>
  );
}
