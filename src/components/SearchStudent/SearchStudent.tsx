import React, { useState } from "react";

const SearchStudent: React.FC = () => {
  const [rollNumber, setRollNumber] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^\d*$/.test(value) && value.length <= 12) {
      setRollNumber(value);
    }
  };
  const handleClick = () => {
    console.log(rollNumber);
  };

  return (
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
  );
};

export default SearchStudent;
