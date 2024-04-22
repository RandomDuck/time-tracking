import { Route } from '../models/Route';

export const FUNCTION_ROUTES = [
  { id: 0, title: 'Home', url: '/' },
  { id: 1, title: 'Demo', url: '/pages/public/functions/demo' },
  { id: 2, title: 'Login', url: '/pages/public/functions/login' },
  { id: 3, title: 'Registration', url: '/pages/public/functions/registration' },
];

export const INFO_ROUTES = [
  { id: 0, title: 'About', url: '/pages/public/info/about' },
  { id: 1, title: 'Pricing', url: '/pages/public/info/pricing' },
  { id: 2, title: 'FAQ', url: '/pages/public/info/faq' },
];

export const USER_ROUTES = [
  { id: 0, title: 'Profile', url: '/pages/user/profile' },
  { id: 1, title: 'Schedule', url: '/pages/user/schedule' },
  { id: 2, title: 'Timecard', url: '/pages/user/timecard' },
  { id: 3, title: 'Tracking', url: '/pages/user/tracking' },
];

export const COMPANY_ROUTES = [
  { id: 0, title: 'Profile', url: '/pages/company/admin' },
  { id: 1, title: 'Admin control', url: '/pages/company/admin'},
  { id: 2, title: 'Worker data', url: '/pages/company/worker-data'},
  { id: 3, title: 'Project control', url: '/pages/company/project-control' },
];


export const ALL_ROUTES = [FUNCTION_ROUTES, INFO_ROUTES, USER_ROUTES, COMPANY_ROUTES]