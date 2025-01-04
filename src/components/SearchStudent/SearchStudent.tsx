import React, { useState } from "react";
import { dummyData, Student } from "../../constant/StudentData";
import StudentDisplayDetails from "../DisplayStudentDetails/DisplayStudentDetails";

interface StudentDetailsprops {
  student: Student;
}

const SearchStudent: React.FC<StudentDetailsprops> = () => {
  const [rollNumber, setRollNumber] = useState<string>("");
  const [studentDetails, setStudentDetails] = useState<Student | null>(null);
  const students = dummyData;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^\d*$/.test(value) && value.length <= 12) {
      setRollNumber(value);
    }
  };

  const handleClick = () => {
    const student = students.find(
      (student) => student.rollNumber === +rollNumber
    );
    if (student) {
      setStudentDetails(student);
      // console.table(student);
    } else {
      setStudentDetails(null);
      alert("Student not found"); // If student not found, set it to null
    }
  };

  return studentDetails === null ? (
    <div className="flex justify-center">
      <div className="w-1/2 p-4 bg-white shadow-md rounded-lg">
        <input
          type="text"
          value={rollNumber}
          onChange={handleChange}
          maxLength={12}
          placeholder="Enter Roll Number"
          className="w-full p-2 border app border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleClick}
          disabled={rollNumber.length !== 12}
          className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          Search
        </button>
      </div>
    </div>
  ) : (
    <StudentDisplayDetails student={studentDetails} />
  );
};

export default SearchStudent;
