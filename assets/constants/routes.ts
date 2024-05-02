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
  { id: 0, title: 'Profile', url: '/user/user-profile', type: 'user' },
  { id: 1, title: 'Schedule', url: '/user/schedule', type: 'user' },
  { id: 2, title: 'Timecard', url: '/user/timecard', type: 'user' },
  { id: 3, title: 'Tracking', url: '/user/tracking', type: 'user' },
];

export const COMPANY_ROUTES = [
  { id: 0, title: 'Profile', url: '/admin-profile', type: 'company' },
  { id: 1, title: 'Admin control', url: '/admin', type: 'company' },
  { id: 2, title: 'Worker data', url: '/worker-data', type: 'company' },
  { id: 3, title: 'Project control', url: '/project-control', type: 'company' },
];

export const ALL_ROUTES = [
  { id: 0, name: 'Functions', value: FUNCTION_ROUTES },
  { id: 1, name: 'Info', value: INFO_ROUTES },
  { id: 2, name: 'User', value: USER_ROUTES },
  { id: 3, name: 'Company', value: COMPANY_ROUTES},
];
