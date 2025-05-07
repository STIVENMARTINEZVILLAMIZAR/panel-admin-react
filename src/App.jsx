import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Clientes from './pages/Clientes';
import Proveedor from './pages/Proveedor';
import Usuarios from './pages/Usuarios';
import Logout from './pages/Logout';
import Login from './pages/Login';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const logged = sessionStorage.getItem('logged') === 'true';
    setIsLoggedIn(logged);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {isLoggedIn && <Navbar />}

      <main className="p-6">
        <Routes>
          <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />

          {isLoggedIn ? (
            <>
              <Route path="/" element={<Clientes />} />
              <Route path="/proveedor" element={<Proveedor />} />
              <Route path="/usuarios" element={<Usuarios />} />
              <Route path="/logout" element={<Logout onLogout={() => setIsLoggedIn(false)} />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </main>
    </div>
  );
}
