import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const links = [
  { to: '/', label: 'Clientes' },
  { to: '/proveedor', label: 'Proveedor' },
  { to: '/usuarios', label: 'Usuarios' },
  { to: '/logout', label: 'Logout' },
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-indigo-600">AdminPanel</span>
        </div>
        <div className="space-x-4">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? 'text-indigo-600 font-semibold'
                  : 'text-gray-600 hover:text-indigo-600 transition'
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
