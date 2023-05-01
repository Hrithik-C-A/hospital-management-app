// DepartmentHeads.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import DeptHeadCreate from "../forms/DeptHeadCreate";

const DepartmentHead = () => {
  const [departmentHeads, setDepartmentHeads] = useState([]);
  const [isOpen,setIsOpen] = useState(false)

  // Fetch department heads data from the server
  useEffect(() => {
    axios.get("http://localhost:3000/departmentheads").then((response) => {
      setDepartmentHeads(response.data.deptheads);
    });
  }, [isOpen]);

 
  const togglePopup = ()=>{
    setIsOpen(!isOpen)
  }
  // Add other CRUD operations as needed

  return (
    <div>
      <button className="px-2 py-1 bg-blue-400 hover:bg-blue-500 font-semibold text-white rounded-md relative left-[80%] top-2" onClick={togglePopup}>Create Department Head</button>
    <DeptHeadCreate isOpen={isOpen} onClose={togglePopup}/>
      {/* Render department heads data */}
      {departmentHeads.map((head) => (
        <div key={head._id}>{head.name}</div>
      ))}
    </div>
  );
};

export default DepartmentHead;
