import React, { useState } from 'react';

export default function Proveedor() {
  const [proveedores, setItems] = useState([
    { id: 1, nombre: 'Proveedor Demo', email: 'proveedor@correo.com' }
  ]);
  const [form, setForm] = useState({ nombre: '', email: '' });

  const handleAdd = () => {
    if (!form.nombre || !form.email) return;
    setItems([...proveedores, { id: Date.now(), ...form }]);
    setForm({ nombre: '', email: '' });
  };

  const handleDelete = (id) => {
    setItems(proveedores.filter(item => item.id !== id));
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4 mb-4">
        <h3 className="mb-3 text-primary">Agregar Proveedor</h3>
        <div className="row g-3">
          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Nombre"
              value={form.nombre}
              onChange={e => setForm({ ...form, nombre: e.target.value })}
            />
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="col-12 text-end">
            <button className="btn btn-success" onClick={handleAdd}>Agregar</button>
          </div>
        </div>
      </div>

      <div className="card shadow p-3">
        <h4 className="text-secondary mb-3">Listado de Proveedores</h4>
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {proveedores.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.nombre}</td>
                <td>{item.email}</td>
                <td>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(item.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
