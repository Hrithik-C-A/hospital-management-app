import React, { useEffect, useState } from "react";
import axios from 'axios'
import Cookies from "universal-cookie";
import Department from "../components/Department";
import DepartmentHead from "../components/DeartmentHead";
import Employee from "../components/Employee";
const cookies = new Cookies();

const token = cookies.get('TOKEN');

const AuthComponent = () => {

  const [currentComponent,setCurrentComponent] = useState('')

  useEffect(() => {

    const configuration = {
      method: 'get',
      url: 'http://localhost:3000/auth-dashboard',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        console.log('Welcome admin')
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);
  
  const logout = () => {

    cookies.remove('TOKEN', { path: '/' });

    window.location.href = '/';
  }
  const renderSelectedComponent = () => {
    switch (currentComponent) {
      case "Departments":
        return <Department/>
      case "DepartmentHeads":
        return <DepartmentHead />;
      case "Employees":
        return <Employee />;
      default:
        return null;
    }
  };

  return (
    <div>
      <header>
        <nav>
          <div className="flex justify-between items-center my-2">
          <h1 className="font-bold text-2xl ml-3 ">Dashboard</h1>
          <button type="submit" className="px-2 py-1 bg-red-400 hover:bg-red-600 text-white font-semibold rounded mx-1 mr-3" onClick={() => logout()}>
            Logout
          </button>
          </div>
        </nav>
      </header>
      <main className='flex gap-8'>
        <section className="w-44 h-[80vh] bg-slate-300 my-3">
          <div>
            <ul className="flex flex-col gap-3 font-bold ml-3">
            <li>
              <button onClick={() => setCurrentComponent("Departments")}>
                Departments
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentComponent("DepartmentHeads")}>
                Department Heads
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentComponent("Employees")}>
                Employees
              </button>
            </li>
            </ul>
          </div>
        </section>
        <section className="w-[80vw]">
            {renderSelectedComponent()}
              {/* <Department/>
              <DepartmentHead/>
              <Employee/> */}
        </section>
      </main>
      <footer>
        <p>This project is created by Hrithik C A</p>
      </footer>
    </div>
  )
}

export default AuthComponent