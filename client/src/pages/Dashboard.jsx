import React, { useEffect, useState } from "react";
import axios from 'axios'
import Cookies from "universal-cookie";
const cookies = new Cookies();

const token = cookies.get('TOKEN');

const AuthComponent = () => {
  const [message, setMessage] = useState('');

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

        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);
  
  const logout = () => {

    cookies.remove('TOKEN', { path: '/' });

    window.location.href = '/';
  }
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
      <main>
        <section className="w-44 h-[80vh] bg-slate-300 my-3">
          <div>
            <ul className="flex flex-col gap-3 font-bold ml-3">
              <li><a href="/departments">Departments</a></li>
              <li><a href="/deptheads">Department Heads</a></li>
              <li><a href="/employees">Employees</a></li>
            </ul>
          </div>
        </section>
        <section>
              {/* <RenderDB endpoint={'/departments'}/> */}
        </section>
      </main>
      <footer>
        <p>This project is created by Hrithik C A</p>
      </footer>
    </div>
  )
}

export default AuthComponent