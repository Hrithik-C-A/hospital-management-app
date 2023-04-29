// Employees.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  // Fetch employees data from the server
  useEffect(() => {
    axios.get("http://localhost:3000/employees").then((response) => {
      setEmployees(response.data.emps);
    });
  }, []);

  // Add other CRUD operations as needed

  return (
    <div>
      {/* Render employees data */}
      {employees.map((employee) => (
        <div key={employee._id}>{employee.name}</div>
      ))}
    </div>
  );
};

export default Employee;
