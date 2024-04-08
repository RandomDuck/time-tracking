'use client';

import { User } from '@/pages/api/user';
import React, { useEffect, useState } from 'react'

const LoginForm = () => {
  const [email, setEmailField] = useState<string>();
  const [password, setPasswordField] = useState<string>();
  const submitHandler = async (e: any) => {
    e.preventDefault();
    const user = await fetch('api/user', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
  }

  return (
    <div>
      <form onSubmit={e => submitHandler(e)} method="post">

        <label htmlFor="emailField">email</label>
        <input onChange={(e) => { setEmailField(e.target.value) }} id="emailField" type="email" />
        <label htmlFor="passwordField">password</label>
        <input onChange={(e) => { setPasswordField(e.target.value) }} id="passwordField" type="password" />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm
