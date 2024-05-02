'use client';

import React, { useState } from 'react';
import Navigation from '@/assets/components/utility/Navigation';
import { FUNCTION_ROUTES } from '@/assets/constants/routes';

const Header = () => {
  const [route] = useState(FUNCTION_ROUTES);

  return (
    <header className='flex justify-between p-3 bg-yellow-400 h-[100px] items-center'>
      <h1>Time tracking</h1>
      <Navigation routes={route} />
    </header>
  );
};

export default Header;
