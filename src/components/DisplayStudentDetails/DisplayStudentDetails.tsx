import React from "react";
import { Student } from "../../constant/StudentData"; // Make sure this is correctly imported from your data file

interface StudentDisplayDetailsProps {
  student: Student;
}

const StudentDisplayDetails: React.FC<StudentDisplayDetailsProps> = ({
  student,
}) => {
  return (
    <div className="student-card p-4 bg-white shadow-md rounded-lg mb-4">
      <img
        src={student.photo}
        alt={student.studentName}
        className="w-24 h-24 rounded-full mb-4"
      />
      <h3 className="text-xl font-semibold">{student.studentName}</h3>
      <p>Father's Name: {student.fatherName}</p>
      <p>Gender: {student.gender}</p>
      <p>Branch: {student.branchName}</p>
      <p>Course: {student.courseName}</p>
      <p>Roll Number: {student.rollNumber}</p>
    </div>
  );
};

export default StudentDisplayDetails;
