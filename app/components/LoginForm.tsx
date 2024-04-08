'use client';

import { User } from '@/pages/api/user';
import React, { useEffect, useState } from 'react'

const LoginForm = () => {
  const [emailField, setEmailField] = useState<string>();
  const [passwordField, setPasswordField] = useState<string>();
  const submitHandler = (data: any) => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={submitHandler} method="post">

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
