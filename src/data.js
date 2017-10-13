import Assessment from 'material-ui/svg-icons/action/assessment';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import React from 'react';

const pathStrings = [
  'login',
  'signup',
  'password',
  'referrals',
  'home',
  'dash',
  'employees',
  'customers',
  'groupmemberships',
  'intakes',
  'invites',
  'messages',
  'notifications',
  'organizations',
  'organizationroles',
  'questions',
  'tasks'
];

export const PATHS = pathStrings.reduce((ret, path) => {
  ret[path] = `/${path}`;
  return ret;
}, {});

export const MENUS = [
  { text: 'Welcome', icon: <Assessment />, link: '/home' },
  { text: 'Referrals', icon: <PermIdentity />, link: '/referrals' },
  { text: 'Intakes', icon: <PermIdentity />, link: '/intakes' }
];

export const ADMIN_MENUS = [
  { text: 'Permissions', icon: <Assessment />, link: '/dash' },
  { text: 'Account Admin', icon: <PermIdentity />, link: '/employees' }
];
