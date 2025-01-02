export interface Student {
  rollNumber: number;
  studentName: string;
  fatherName: string;
  gender: "Male" | "Female"; // Assuming gender can only be Male or Female
  branchName:
    | "Computer Science"
    | "Information Technology"
    | "Civil"
    | "Electrical"; // Only the specified branches
  courseName: string;
  photo: string; // URL to the student's photo
}

export const dummyData: Student[] = [
  {
    rollNumber: 100123456789,
    studentName: "Amit Kumar",
    fatherName: "Ravi Kumar",
    gender: "Male",
    branchName: "Computer Science",
    courseName: "Btech",
    photo: "https://via.placeholder.com/150?text=Photo1",
  },
  {
    rollNumber: 200654321987,
    studentName: "Priya Sharma",
    fatherName: "Suresh Sharma",
    gender: "Female",
    branchName: "Information Technology",
    courseName: "Btech",
    photo: "https://via.placeholder.com/150?text=Photo2",
  },
  {
    rollNumber: 300987654321,
    studentName: "Ravi Patel",
    fatherName: "Vijay Patel",
    gender: "Male",
    branchName: "Civil",
    courseName: "Btech",
    photo: "https://via.placeholder.com/150?text=Photo3",
  },
  {
    rollNumber: 400234567890,
    studentName: "Sanya Verma",
    fatherName: "Harish Verma",
    gender: "Female",
    branchName: "Electrical",
    courseName: "Btech",
    photo: "https://via.placeholder.com/150?text=Photo4",
  },
  {
    rollNumber: 500876543210,
    studentName: "Shadab Khan",
    fatherName: "Maqbool Hasan",
    gender: "Male",
    branchName: "Computer Science",
    courseName: "Btech",
    photo: "https://via.placeholder.com/150?text=Photo5",
  },
];
