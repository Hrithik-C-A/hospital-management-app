// Employees.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import EmpCreate from "../forms/EmpCreate";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [isOpen,setIsOpen] = useState(false)

  // Fetch employees data from the server
  useEffect(() => {
    axios.get("http://localhost:3000/employees").then((response) => {
      setEmployees(response.data.emps);
    });
  }, [isOpen]);

  const togglePopup = ()=>{
    setIsOpen(!isOpen)
  }

  // Add other CRUD operations as needed

  return (
    <div>
      <button className="px-2 py-1 bg-blue-400 hover:bg-blue-500 font-semibold text-white rounded-md relative left-[80%] top-2" onClick={togglePopup}>Create Employee</button>
      <EmpCreate isOpen={isOpen} onClose={togglePopup}/>
      {/* Render employees data */}
      {employees.map((employee) => (
        <div key={employee._id}>{employee.name}</div>
      ))}
    </div>
  );
};

export default Employee;
