// DepartmentHeads.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const DepartmentHead = () => {
  const [departmentHeads, setDepartmentHeads] = useState([]);

  // Fetch department heads data from the server
  useEffect(() => {
    axios.get("http://localhost:3000/departmentheads").then((response) => {
      setDepartmentHeads(response.data.deptheads);
    });
  }, []);

  // Add other CRUD operations as needed

  return (
    <div>
      {/* Render department heads data */}
      {departmentHeads.map((head) => (
        <div key={head._id}>{head.name}</div>
      ))}
    </div>
  );
};

export default DepartmentHead;
