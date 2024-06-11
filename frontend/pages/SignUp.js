import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from '../components/navbar';
import { Button } from '@nextui-org/react';




export default function SignUp() {
  const [message, setMessage] = useState(null)

  const signup = async (event) => {
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
    <section class="text-gray-600 body-font">
      <NavBar />
      <form onSubmit={signup}>
        <div class="container p-20 mx-auto flex flex-wrap items-center justify-center">
          <div class="bg-gray-100 rounded-lg p-8 flex flex-col ">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5"> - Sign Up Here -</h2>
            <div class="relative mb-4">
              <label for="username" class="leading-7 text-sm text-gray-600">Username  </label>
              <input type="username" id="username" name="username" placeholder="Enter Username" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
              <input type="name" id="name" name="name" placeholder="Enter Name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="surname" class="leading-7 text-sm text-gray-600">Surname</label>
              <input type="surname" id="surname" name="surname" placeholder="Enter Surname" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">E-mail</label>
              <input type="email" id="email" name="email" placeholder="Enter Email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
              <input type="passwd" id="password" name="password" placeholder="Enter Password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <Button color='primary'>Confirm</Button>
            <p class="leading-7 text-sm text-red-600">{message}</p>
            <p class="text-xs text-gray-500 mt-3">If you're already signed up click
              <Link className='text-indigo-500' href='Login'> Here.</Link>
            </p>
          </div>
        </div>
      </form>
    </section>
  );
}