'use client';

import { User } from '@/pages/api/user';
import React, { useEffect, useState } from 'react'

const LoginForm = () => {
  const [email, setEmailField] = useState<string>();
  const [password, setPasswordField] = useState<string>();
  const submitHandler = async (e: any) => {
    e.preventDefault();
    const res = await fetch('api/user', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });

    const user = await res.json();

    console.log(user);
  }

  return (
    <div className="flex h-screen text-white">
      <div className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 m-auto p-10 w-[300px]">
        <form onSubmit={e => submitHandler(e)} method="post">

          <label className='block' htmlFor="emailField">Email:</label>
          <input className="mt-2 mb-4 w-full" onChange={(e) => { setEmailField(e.target.value) }} id="emailField" type="email" />
          <label htmlFor="passwordField">Password:</label>
          <input className="mt-2 mb-4 w-full" onChange={(e) => { setPasswordField(e.target.value) }} id="passwordField" type="password" />
          <button className='btn-primary' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
