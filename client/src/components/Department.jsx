// Departments.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import DeptCreate from "../forms/DeptCreate";

const Department = () => {
  const [departments, setDepartments] = useState([]);

  // Fetch departments data from the server
  useEffect(() => {
    axios.get("http://localhost:3000/departments").then((response) => {
      setDepartments(response.data.depts);
    });
  }, []);

  // Add other CRUD operations as needed

  return (
    <div>
      {/* Render departments data */}
      <DeptCreate/>
      {departments.map((department) => (
        <div key={department._id}>{department.name}</div>
      ))}
    </div>
  );
};

export default Department;
