export interface Subject {
  name: string;
  code: number;
  type: "Theory" | "Practical";
  internalMarks: number;
  externalMarks: number;
  totalMarkPerSubject: number;
  paperType: "Main" | "Carry over";
}

export interface FormData {
  semester: number;
  totalSubjects: number;
  theorySubjects: number;
  practicalSubjects: number;
  totalMarks: number;
  securedMarks: number;
  percentage: number;
  resultStatus: "Pass" | "Fail" | "PWC";
  semesterType: "Odd" | "Even";
  subjects: Subject[];
}
