import React, { useState } from 'react';

export default function Usuarios() {
  const [usuarios, setItems] = useState([
    { id: 1, usuario: 'admin', rol: 'Administrador' }
  ]);
  const [form, setForm] = useState({ usuario: '', rol: '' });

  const handleAdd = () => {
    if (!form.usuario || !form.rol) return;
    setItems([...usuarios, { id: Date.now(), ...form }]);
    setForm({ usuario: '', rol: '' });
  };

  const handleDelete = (id) => {
    setItems(usuarios.filter(item => item.id !== id));
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4 mb-4">
        <h3 className="mb-3 text-primary">Agregar Usuario</h3>
        <div className="row g-3">
          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Usuario"
              value={form.usuario}
              onChange={e => setForm({ ...form, usuario: e.target.value })}
            />
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Rol"
              value={form.rol}
              onChange={e => setForm({ ...form, rol: e.target.value })}
            />
          </div>
          <div className="col-12 text-end">
            <button className="btn btn-success" onClick={handleAdd}>Agregar</button>
          </div>
        </div>
      </div>

      <div className="card shadow p-3">
        <h4 className="text-secondary mb-3">Listado de Usuarios</h4>
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Usuario</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.usuario}</td>
                <td>{item.rol}</td>
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
