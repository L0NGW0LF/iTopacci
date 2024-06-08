import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import NavBarForm from '../components/navbarform';



export default function SignUp() {
  const [message, setMessage] = useState(null)

  const signup = async(event) => {
    event.preventDefault();
    setMessage(null);
    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);

    const reqOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    };

    const req = await fetch('http://localhost:1337/api/auth/local/register', reqOptions);
    const res = await req.json();

    if (res.error) {
      setMessage(res.error.message);
    return;
    }

    if (res.jwt && res.user) {
      setMessage('Successfully Signed Up.')
      document.cookie = `jwt=${res.jwt}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
      
    }
  }

  
  return (
    <section className="text-gray-600 body-font">
      <NavBarForm />
      <form onSubmit={signup}>
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center ">
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
          <div className="relative mb-4">
            <label  className="leading-7 text-sm text-gray-600">Username</label>
            <input type="username" id="username" name="username" placeholder="Enter Username" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label  className="leading-7 text-sm text-gray-600">Name</label>
            <input type="name" id="name" name="name" placeholder="Enter Name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label  className="leading-7 text-sm text-gray-600">Surname</label>
            <input type="surname" id="surname" name="surname" placeholder="Enter Surname" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label  className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter Email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label  className="leading-7 text-sm text-gray-600">Password</label>
            <input type="passwd" id="password" name="password" placeholder="Enter Password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Confirm</button>
          <p className="leading-7 text-sm text-red-600">{message}</p>
          <p className="text-xs text-gray-500 mt-3">If you're already signed up click
            <Link className='text-indigo-500' href='Login'> Here.</Link>
          </p>
        </div>
      </div>
      </form>
    </section>
  );
}