'use client';

import React, { useState } from 'react';
import Navigation from './Navigation';
import {
  ALL_ROUTES,
  FUNCTION_ROUTES,
} from '../constants/constants';

const Header = () => {
  const [route, setRoute] = useState(FUNCTION_ROUTES);

  return (
    <header className='flex justify-between p-3'>
      <h1>Time tracking</h1>
      <div className='flex gap-2'>
        {ALL_ROUTES.map((route, index) => (
          <button key={index} onClick={() => setRoute(route)}>
            {route[index].title}
          </button>
        ))}
      </div>
      <Navigation routes={route} />
    </header>
  );
};

export default Header;
