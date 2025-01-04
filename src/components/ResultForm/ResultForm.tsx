import React, { useCallback, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { FormData } from "../../types/ResultForm";

const ResultForm: React.FC = () => {
  const { control, handleSubmit, register, watch, setValue } =
    useForm<FormData>({
      defaultValues: {
        semester: 1,
        totalSubjects: 0,
        theorySubjects: 0,
        practicalSubjects: 0,
        totalMarks: 0,
        securedMarks: 0,
        percentage: 0,
        resultStatus: "Pass",
        subjects: [
          {
            name: "",
            code: 100,
            type: "Theory",
            internalMarks: 0,
            externalMarks: 0,
            totalMarkPerSubject: 0,
            paperType: "Main",
          },
        ],
      },
    });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "subjects",
  });

  const totalMarks = watch("totalMarks");
  const securedMarks = watch("securedMarks");
  const practiclaSubjects = watch("practicalSubjects");
  const theorySubjects = watch("theorySubjects");
  const totalSubjects = watch("totalSubjects");

  // Update percentage dynamically
  useEffect(() => {
    if (totalMarks > 0) {
      const percentage = (securedMarks / totalMarks) * 100;
      setValue("percentage", parseFloat(percentage.toFixed(2)));
    } else {
      setValue("percentage", 0);
    }
  }, [totalMarks, securedMarks, setValue]);

  //Update total numbers of subjects dynamically
  useEffect(() => {
    if (practiclaSubjects > 0 || theorySubjects > 0) {
      setValue("totalSubjects", theorySubjects + practiclaSubjects);
    } else {
      setValue("totalSubjects", 0);
    }
  }, [theorySubjects, practiclaSubjects, setValue]);

  const calculateTotalMarks = useCallback(
    (index: number) => {
      const internalMarks = watch(`subjects.${index}.internalMarks`);
      const externalMarks = watch(`subjects.${index}.externalMarks`);
      const total = (internalMarks || 0) + (externalMarks || 0);

      setValue(`subjects.${index}.totalMarkPerSubject`, total); // Dynamically update the value in the form state
      return total;
    },
    [watch, setValue]
  );

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    alert("Form Submitted! Check the console for data.");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-5 m-4 space-y-5 bg-gray-50 rounded shadow-lg"
    >
      <h2 className=" text-2xl md:text-4xl text-center font-bold">
        Result Form
      </h2>

      {/* Semester */}
      <div className=" flex space-x-4 ">
        <div>
          <label>Semester</label>

          <select
            {...register("semester", { valueAsNumber: true })}
            className="block w-[15vw] p-2 mt-1 border rounded"
          >
            {Array.from({ length: 8 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                Semester {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Even/Odd</label>
          <select
            {...register("semesterType")}
            className="block w-[15vw]  p-2 mt-1 border rounded"
          >
            <option value="Even">Even</option>
            <option value="Odd">Odd</option>
          </select>
        </div>
      </div>

      {/* Theory and Practical and total Subjects */}
      <div className="flex space-x-4">
        <div>
          <label>Theory Subjects</label>
          <input
            {...register("theorySubjects", {
              valueAsNumber: true,
              min: {
                value: 1,
                message: "Please enter a positive number", // Warning message for invalid input
              },
              validate: (value) =>
                value > 0 || "Please enter a positive number", // Another check for positivity
            })}
            className="block w-[15vw] p-2 mt-1 border rounded"
          />
        </div>
        <div>
          <label>Practical Subjects</label>
          <input
            {...register("practicalSubjects", {
              valueAsNumber: true,
              min: {
                value: 1,
                message: "Please enter a positive number", // Warning message for invalid input
              },
              validate: (value) =>
                value > 0 || "Please enter a positive number", // Another check for positivity
            })}
            className="block w-[15vw] p-2 mt-1 border rounded"
          />
        </div>
        <div>
          <label>Total Number of Subjects</label>
          <input
            {...register("totalSubjects")}
            readOnly
            className="block w-[15vw] bg-gray-200 p-2 mt-1 border rounded"
          />
        </div>
      </div>

      {/* Total and Secured Marks and result status */}
      <div className="flex space-x-4">
        <div>
          <label>Total Marks</label>
          <input
            {...register("totalMarks", {
              valueAsNumber: true,
              min: {
                value: 0,
                message: "Please enter a positive number", // Warning message for invalid input
              },
              validate: (value) =>
                value > 0 || "Please enter a positive number", // Another check for positivity
            })}
            className="block  w-[15vw]  p-2 mt-1 border rounded"
          />
        </div>
        <div>
          <label>Secured Marks</label>
          <input
            {...register("securedMarks", {
              valueAsNumber: true,
              min: {
                value: 0,
                message: "Please enter a positive number", // Warning message for invalid input
              },
              validate: (value) =>
                value >= 0 || "Please enter a positive number", // Another check for positivity
            })}
            className="block  w-[15vw]  p-2 mt-1 border rounded"
          />
        </div>
        <div>
          <label>Percentage</label>
          <input
            {...register("percentage")}
            readOnly
            className="block  w-[15vw]  p-2 mt-1 border rounded bg-gray-200"
          />
        </div>
        <div>
          <label>Result Status</label>
          <select
            {...register("resultStatus")}
            className="block w-[15vw] p-2 mt-1 border rounded"
          >
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
            <option value="PWC">PWC</option>
          </select>
        </div>
      </div>

      {/* Subjects */}
      <div>
        <h3 className="font-bold">Subjects</h3>
        {fields.map((field, index) => (
          <div key={field.id} className="space-y-2 border p-4 rounded mb-4">
            {/* Subject Name */}
            <div className="flex space-x-4">
              <div>
                <label>Subject Code</label>
                <input
                  {...register(`subjects.${index}.code`, {
                    valueAsNumber: true,
                    min: {
                      value: 1,
                      message: "Please enter a positive number", // Warning message for invalid input
                    },
                    validate: (value) =>
                      value > 1 || "Please enter a positive number", // Another check for positivity
                  })}
                  className="block w-[15vw] p-2 mt-1 border rounded"
                />
              </div>

              <div>
                <label>Subject Name</label>
                <input
                  {...register(`subjects.${index}.name`, {
                    required: "Subject name is required",
                  })}
                  className="block w-[30vw] p-2 mt-1 border rounded"
                />
              </div>
            </div>

            <div className="flex space-x-4 ">
              {/* Type */}
              <div>
                <label>Type:</label>
                <select
                  {...register(`subjects.${index}.type`)}
                  className="block w-[15vw] p-2 mt-1 border rounded"
                >
                  <option value="Theory">Theory</option>
                  <option value="Practical">Practical</option>
                </select>
              </div>
              {/* Back Paper */}
              <div>
                <label>
                  Back Paper
                  <select
                    {...register(`subjects.${index}.paperType`)}
                    className="block w-[15vw] p-2 mt-1 border rounded"
                  >
                    <option value="Main">Main</option>
                    <option value="Carry Over">Carry over</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="flex space-x-4">
              {/* External Marks */}
              <div>
                <label>External Marks</label>
                <input
                  {...register(`subjects.${index}.externalMarks`, {
                    valueAsNumber: true,
                    min: {
                      value: 0,
                      message: "Please enter a positive number", // Warning message for invalid input
                    },
                    validate: (value) => value >= 0,
                  })}
                  className="block w-[15vw] p-2 mt-1 border rounded"
                />
              </div>
              {/* Internal Marks */}
              <div>
                <label>Internal Marks</label>
                <input
                  {...register(`subjects.${index}.internalMarks`, {
                    valueAsNumber: true,
                    min: {
                      value: 0,
                      message: "Please enter a positive number", // Warning message for invalid input
                    },
                    validate: (value) => value >= 0,
                  })}
                  className="block w-[15vw] p-2 mt-1 border rounded"
                />
              </div>
              <div>
                <label>Total Marks</label>
                <input
                  //   {...register(`subjects.${index}.totalMarkPerSubject`)}
                  value={calculateTotalMarks(index)}
                  readOnly
                  className="block w-[15vw] bg-gray-200 p-2 mt-1 border rounded"
                />
              </div>
            </div>

            {/* Remove Subject */}
            <button
              type="button"
              onClick={() => remove(index)}
              className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
            >
              Remove Subject
            </button>
          </div>
        ))}

        {/* Add Subject */}
        {fields.length < totalSubjects && (
          <button
            type="button"
            onClick={() => {
              append({
                name: "",
                code: 101,
                type: "Theory",
                internalMarks: 0,
                externalMarks: 0,
                totalMarkPerSubject: 0,
                paperType: "Main",
              });
            }}
            className="px-4 py-2 mt-3 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Add Subject
          </button>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-6 py-2 text-white bg-green-500 rounded hover:bg-green-600 flex "
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ResultForm;
