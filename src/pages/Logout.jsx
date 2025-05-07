import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout({ onLogout }) {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.removeItem('logged');
    onLogout();
    navigate('/login');
  }, [onLogout, navigate]);

  return <p className="text-center mt-5">Cerrando sesión...</p>;
}
