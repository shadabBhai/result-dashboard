import React from "react";
import { Student } from "../../constant/StudentData"; // Make sure this is correctly imported from your data file
import ResultForm from "../ResultForm/ResultForm";

interface StudentDisplayDetailsProps {
  student: Student;
}

const StudentDisplayDetails: React.FC<StudentDisplayDetailsProps> = ({
  student,
}) => {
  return (
    <>
      <div className="mt-10 mx-4 student-card p-4 bg-white shadow-md rounded-lg mb-4 flex border boreder-black">
        <div className="w-[80vw] grid grid-cols-3">
          <p>Name{student.studentName}</p>
          <p>Father's Name: {student.fatherName}</p>
          <p>Gender: {student.gender}</p>
          <p>Branch: {student.branchName}</p>
          <p>Course: {student.courseName}</p>
          <p>Roll Number: {student.rollNumber}</p>
        </div>
        <img
          src={student.photo}
          alt={student.studentName}
          className="w-24 h-24 rounded-md mb-4"
        />
      </div>
      <ResultForm />
    </>
  );
};

export default StudentDisplayDetails;
