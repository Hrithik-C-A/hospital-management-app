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
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl">Dashboard</h1>
            <button type="submit" className="px-2 py-1 bg-red-400 hover:bg-red-600 text-white font-semibold rounded" onClick={() => logout()}>
              Logout
            </button>
          </div>
        </nav>
      </header>
      <main className='container mx-auto px-6 py-3 flex gap-8'>
        <section className="w-44 h-[80vh] bg-slate-300">
          <div>
            <ul className="flex flex-col gap-3 font-bold ml-3">
              <li>
                <button className="hover:text-blue-600" onClick={() => setCurrentComponent("Departments")}>
                  Departments
                </button>
              </li>
              <li>
                <button className="hover:text-blue-600" onClick={() => setCurrentComponent("DepartmentHeads")}>
                  Department Heads
                </button>
              </li>
              <li>
                <button className="hover:text-blue-600" onClick={() => setCurrentComponent("Employees")}>
                  Employees
                </button>
              </li>
            </ul>
          </div>
        </section>
        <section className="w-full">
          {renderSelectedComponent()}
        </section>
      </main>
      <footer className="bg-white shadow mt-auto py-3">
        <p className="container mx-auto px-6 text-center">This project is created by Hrithik C A</p>
      </footer>
    </div>
  )
}

export default AuthComponent