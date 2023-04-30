import React, { useEffect,useState } from 'react'
import axios from 'axios'

const DeptHeadCreate = () => {
    const [name,setName] = useState('')
    const [year,setYear] = useState('')
    const [department,setDepartment] = useState('')
    const [description,setDescription] = useState('')
    const [file, setFile] = useState(null);
    const [data, setData] = useState([]);

    useEffect(()=>{
      axios.get('http://localhost:3000/departments')
      .then((response)=>{
        setData(response.data.depts)
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
        formData.append("image", file);
        
        const configuration = {
            method: 'post',
            url: 'http://localhost:3000/departmenthead/create',
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
       window.location.href = '/dashboard'   
    }
  return (
    <div className='w-72'>
        <form className='text-center shadow-lg p-4 rounded'onSubmit={handleSubmit}>
            <div className='flex flex-col gap-2 items-start'>
                Name :
                <input className='border rounded-md px-2 py-1' type="text" placeholder='Department Head Name' value={name} onChange={(e)=>setName(e.target.value)} />

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

                About :
                <textarea className='border rounded-md' cols="30" rows="10"  placeholder='About Department Head' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>

                <button className='bg-blue-400 hover:bg-blue-500 px-2 py-1 rounded font-semibold text-white' type="submit" disabled={!department ||!name || !year || !description || !file}>Create</button>
            </div>
        </form>
    </div>
  )
}

export default DeptHeadCreate