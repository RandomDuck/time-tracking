'use client';

import React, { useState } from 'react';
import Navigation from './Navigation';
import { USER_ROUTES } from '../../constants/routes';

const Header = () => {
  const [route] = useState(USER_ROUTES);

  return (
    <header className='flex justify-between p-3 bg-yellow-400 h-[100px] items-center'>
      <h1>Time tracking</h1>
      <Navigation routes={route} />
    </header>
  );
};

export default Header;
