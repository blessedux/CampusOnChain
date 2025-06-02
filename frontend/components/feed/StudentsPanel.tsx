import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const mockStudents = [
  { id: 1, name: "Camila", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "Lucas", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "Sofia", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 4, name: "Diego", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 5, name: "Valentina", avatar: "/placeholder.svg?height=40&width=40" },
];

export const StudentsPanel = () => (
  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg mb-8 w-full">
    <h3 className="text-lg font-bold mb-2 text-green-300">Students</h3>
    <div className="flex flex-wrap gap-4">
      {mockStudents.map(student => (
        <div key={student.id} className="flex flex-col items-center w-20">
          <Avatar className="w-12 h-12 mb-1 border-2 border-orange-500">
            <AvatarImage src={student.avatar} />
            <AvatarFallback className="bg-gray-700 text-gray-300 text-md">
              {student.name[0]}
            </AvatarFallback>
          </Avatar>
          <span className="text-xs text-white text-center truncate w-full">{student.name}</span>
        </div>
      ))}
    </div>
  </div>
); 