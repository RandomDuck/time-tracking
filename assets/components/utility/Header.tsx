'use client';

import React, { useState } from 'react';
import Navigation from '@/assets/components/utility/Navigation';
import { FUNCTION_ROUTES, USER_ROUTES } from '@/assets/constants/routes';

const Header = () => {
  const [route] = useState(USER_ROUTES);

  return (
    <header>
      <h1>Time tracking</h1>
      <Navigation routes={route} />
    </header>
  );
};

export default Header;
