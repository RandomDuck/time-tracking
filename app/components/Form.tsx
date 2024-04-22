'use client';

import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';
import { User } from '../models/User';

interface Props{
  title: string
}

const Form = ({title}: Props) => {
  const router = useRouter();
  const [email, setEmailField] = useState<string>();
  const [password, setPasswordField] = useState<string>();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {

      const res = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });

      const user: User = await res.json();

      sessionStorage.setItem(
        'user',
        JSON.stringify({ id: user.id, name: user.name, email: user.email })
      );
      router.push('/user');
    } catch (error) {
      alert('something went wrong');
    }
  };

  return (
    <div className='flex h-screen text-white'>
      <h2>{title}</h2>
      <div className='bg-slate-100 rounded-xl p-8 dark:bg-slate-800 m-auto w-[300px]'>
        <form onSubmit={(e) => submitHandler(e)} method='post'>
          <label className='block' htmlFor='emailField'>
            Email:
          </label>
          <input
            className='mt-2 mb-4 w-full text-black'
            onChange={(e) => {
              setEmailField(e.target.value);
            }}
            id='emailField'
            type='email'
          />
          <label htmlFor='passwordField'>Password:</label>
          <input
            className='mt-2 mb-4 w-full text-black'
            onChange={(e) => {
              setPasswordField(e.target.value);
            }}
            id='passwordField'
            type='password'
          />
          <button className='btn-primary' type='submit'>
            {title} user
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
