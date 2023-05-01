import React, { useEffect,useState } from 'react'
import axios from 'axios'

const EmpCreate = ({isOpen,onClose}) => {
    const [name,setName] = useState('')
    const [year,setYear] = useState('')
    const [department,setDepartment] = useState('')
    const [description,setDescription] = useState('')
    const [reportTo,setReportTo] = useState('')
    const [file, setFile] = useState(null);
    const [data, setData] = useState([]);
    const [deptHeadData, setDeptHeadData] = useState([]);

    useEffect(()=>{
      axios.get('http://localhost:3000/departments')
      .then((response)=>{
        setData(response.data.depts)
      })
      .catch((error)=>{
        console.error(error);
      })
    },[])

    useEffect(()=>{
      axios.get('http://localhost:3000/departmentheads')
      .then((response)=>{
        setDeptHeadData(response.data.deptheads)
      })
      .catch((error)=>{
        console.error(error);
      })
    },[])

    const handleSubmit = async(e)=>{
        e.preventDefault()

        const formData = new FormData();
        formData.append("name", name);
        formData.append("age", year);
        formData.append("department", department);
        formData.append("description", description);
        formData.append("reportTo", reportTo);
        formData.append("image", file);
        
        const configuration = {
            method: 'post',
            url: 'http://localhost:3000/employee/create',
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
              }
        }
        try {
            const response = await axios(configuration);
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
    //    window.location.href = '/dashboard'   
    }
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >

      <div className="w-72 border m-auto p-4 bg-white rounded shadow-lg">
        <button
          className="absolute top-2 right-24 text-white bg-red-600 px-2 py-1 rounded"
          onClick={onClose}
        >
          Close
        </button>
        <form className="text-center" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 items-start">
          Name :
                <input className='border rounded-md px-2 py-1' type="text" placeholder='Employee Name' value={name} onChange={(e)=>setName(e.target.value)} />

                Age :
                <input className='border rounded-md px-2 py-1' type="number" placeholder='Age' value={year} onChange={(e)=>setYear(e.target.value)} />

                Image :
                <input type="file"  onChange={(e) => setFile(e.target.files[0])} />

                Departments :
                <select name="departments" value={department} onChange={(e)=>setDepartment(e.target.value)}>
                <option value="">Select a department</option>
                    {data.map((dept)=>{
                        return <option key={dept._id} value={dept.name}>{dept.name}</option>
                    })}
                </select>

                Report To :
                <select name="reportTo" value={reportTo} onChange={(e)=>setReportTo(e.target.value)}>
                <option value="">Select a department head</option>
                    {deptHeadData.map((depthead)=>{
                        return <option key={depthead._id} value={depthead.name}>{depthead.name}</option>
                    })}
                </select>

                About :
                <textarea className='border rounded-md' placeholder='About Employee' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>

                <button className='bg-blue-400 hover:bg-blue-500 px-2 py-1 rounded font-semibold text-white' type="submit" disabled={!department || !year ||!reportTo || !name || !description || !file}>Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EmpCreate