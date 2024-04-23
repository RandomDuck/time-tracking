'use client';

import React, { useState } from 'react';
import Navigation from './Navigation';
import { FUNCTION_ROUTES } from '../constants/routes';

const Header = () => {
  const [route] = useState(FUNCTION_ROUTES);

  return (
    <header className='flex justify-between p-3'>
      <h1>Time tracking</h1>
      <Navigation routes={route} />
    </header>
  );
};

export default Header;
