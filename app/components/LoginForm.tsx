'use client';

import { User } from '@/pages/api/user';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const LoginForm = () => {
  const router = useRouter()
  const [email, setEmailField] = useState<string>();
  const [password, setPasswordField] = useState<string>();
  const submitHandler = async (e: any) => {
    e.preventDefault();
    const res = await fetch('api/user', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });

    const user: User = await res.json();
    // set user in a state
    sessionStorage.setItem('user', JSON.stringify({id: user.id, name: user.name, email: user.email}));
    console.log(user)
    // redirect to logged in page
    router.push('/user');
  }

  return (
    <div className="flex h-screen text-white">
      <div className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 m-auto p-10 w-[300px]">
        <form onSubmit={e => submitHandler(e)} method="post">

          <label className='block' htmlFor="emailField">Email:</label>
          <input className="mt-2 mb-4 w-full text-black" onChange={(e) => { setEmailField(e.target.value) }} id="emailField" type="email" />
          <label htmlFor="passwordField">Password:</label>
          <input className="mt-2 mb-4 w-full text-black" onChange={(e) => { setPasswordField(e.target.value) }} id="passwordField" type="password" />
          <button className='btn-primary' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
