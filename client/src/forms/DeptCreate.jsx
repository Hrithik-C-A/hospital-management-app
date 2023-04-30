import React, { useState } from 'react'
import axios from 'axios'

const DeptCreate = () => {
    const [name,setName] = useState('')
    const [year,setYear] = useState('')
    const [description,setDescription] = useState('')
    const [file, setFile] = useState('');

    const handleSubmit = async(e)=>{
        e.preventDefault()

        const formData = new FormData();
        formData.append("name", name);
        formData.append("year", year);
        formData.append("description", description);
        formData.append("image", file);
        
        const configuration = {
            method: 'post',
            url: 'http://localhost:3000/department/create',
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

                Department Name :
                <input className='border rounded-md px-2 py-1' type="text" placeholder='Department Name' value={name} onChange={(e)=>setName(e.target.value)} />

                Year Founded :
                <input className='border rounded-md px-2 py-1' type="number" placeholder='Year Founded' value={year} onChange={(e)=>setYear(e.target.value)} />

                Department Image :
                <input type="file"  onChange={(e) => setFile(e.target.files[0])} />

                About Department :
                <textarea className='border rounded-md' cols="30" rows="10"  placeholder='About Department' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                
                <button className='bg-blue-400 hover:bg-blue-500 px-2 py-1 rounded font-semibold text-white' type="submit" disabled={!name || !year || !description || !file}>Create</button>
            </div>
        </form>
    </div>
  )
}

export default DeptCreate