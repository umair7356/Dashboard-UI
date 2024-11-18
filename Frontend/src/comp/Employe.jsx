import React, { useState } from "react";

function Employe() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Andrew",
      position: "Software Engineer",
      department: "IT",
    },
    {
      id: 2,
      name: "Sarah",
      position: "Project Manager",
      department: "Operations",
    },
    { id: 3, name: "John", position: "Designer", department: "Marketing" },
    { id: 4, name: "John", position: "Designer", department: "Marketing" },
  ]);
  return (
    <>
      <div>
        <div className="min-h-screen bg-gray-100 flex flex-col  p-6">
          <h1 className="text-2xl text-left font-bold text-gray-800 mb-4">
            Employee List
          </h1>

          <div className="w-full  bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between bg-gray-600 text-white py-3 px-4 rounded-t-lg">
              <h2 className="font-semibold text-lg">Employees</h2>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-md hover:bg-gray-200">
                + Add Employee
              </button>
            </div>
            <table className="table-auto w-full text-left">
              <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <tr>
                  <th className="py-3 px-6">Name</th>
                  <th className="py-3 px-20">Position</th>
                  <th className="py-3 px-6">Department</th>
                  <th className="py-3 px-6">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                {employees.map((employee) => (
                  <tr
                    key={employee.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6">{employee.name}</td>
                    <td className="py-3 px-20">{employee.position}</td>
                    <td className="py-3 px-6">{employee.department}</td>
                    <td className="py-3 px-8">
                      <button className="text-purple-600 hover:text-purple-800 px-2">
                        Edit
                      </button>
                      <button className="text-red-600 ml-10 hover:text-red-800 px-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employe;
