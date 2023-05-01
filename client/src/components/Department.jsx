// Departments.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import DeptCreate from "../forms/DeptCreate";

const Department = () => {
  const [departments, setDepartments] = useState([]);
  const [isOpen,setIsOpen] = useState(false)

  // Fetch departments data from the server
  useEffect(() => {
    axios.get("http://localhost:3000/departments").then((response) => {
      setDepartments(response.data.depts);
    });
  }, [isOpen]);

  const togglePopup = ()=>{
    setIsOpen(!isOpen)
  }

  // Add other CRUD operations as needed

  return (
    <div>
      {/* Render departments data */}
      <button className="px-2 py-1 bg-blue-400 hover:bg-blue-500 font-semibold text-white rounded-md relative left-[80%] top-2" onClick={togglePopup}>Create Department</button>
      <DeptCreate isOpen={isOpen} onClose={togglePopup}/>
      {departments.map((department) => (
        <div className="flex items-center justify-around gap-3" key={department._id}>
          <img className="h-24 w-24 rounded-full border" src={`http://localhost:3000${department.image}`} alt={department.name} />
          <h1 className="font-semibold text-2xl">{department.name}</h1>
          <h1 className="font-medium">Since: {department.year}</h1>
          <div>
            <button className="px-2 py-1 rounded bg-slate-600 hover:bg-slate-700 font-semibold text-white">Update</button>
            <button className="px-2 py-1 rounded bg-slate-600 hover:bg-slate-700 font-semibold text-white ml-3">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Department;
