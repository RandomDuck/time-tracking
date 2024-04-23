export const FUNCTION_ROUTES = [
  { id: 0, title: 'Home', url: '/', type: 'function' },
  { id: 1, title: 'Demo', url: '/demo', type: 'function' },
  { id: 2, title: 'Login', url: '/login', type: 'function' },
  { id: 3, title: 'Registration', url: '/registration', type: 'function' },
];

export const INFO_ROUTES = [
  { id: 0, title: 'About', url: '/about', type: 'info' },
  { id: 1, title: 'Pricing', url: '/pricing', type: 'info' },
  { id: 2, title: 'FAQ', url: '/faq', type: 'info' },
];

export const USER_ROUTES = [
  { id: 0, title: 'Profile', url: '/user-profile', type: 'user' },
  { id: 1, title: 'Schedule', url: '/schedule', type: 'user' },
  { id: 2, title: 'Timecard', url: '/timecard', type: 'user' },
  { id: 3, title: 'Tracking', url: '/tracking', type: 'user' },
];

export const COMPANY_ROUTES = [
  { id: 0, title: 'Profile', url: '/admin-profile', type: 'company' },
  { id: 1, title: 'Admin control', url: '/admin', type: 'company' },
  { id: 2, title: 'Worker data', url: '/worker-data', type: 'company' },
  { id: 3, title: 'Project control', url: '/project-control', type: 'company' },
];

export const ALL_ROUTES = [
  FUNCTION_ROUTES,
  INFO_ROUTES,
  USER_ROUTES,
  COMPANY_ROUTES,
];
