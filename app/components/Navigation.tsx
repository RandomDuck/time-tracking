import { Routes } from '../models/Route';
import Link from 'next/link';
import React from 'react';

const Navigation = ({ routes }: Routes) => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.id} className=' float-left mr-5'>
            <Link href={route.url}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
