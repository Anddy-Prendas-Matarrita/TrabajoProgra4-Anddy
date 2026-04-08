import { useEffect, useState } from 'react';
import { getProveedores, deleteProveedor } from '../api/proveedores';

function ProveedoresList({ onEdit }) {
  const [proveedores, setProveedores] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProveedores()
      .then(setProveedores)
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  async function handleDelete(id) {
    if (!confirm('¿Eliminar este proveedor?')) return;
    try {
      await deleteProveedor(id);
      setProveedores((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      alert('Error al eliminar: ' + err.message);
    }
  }

  if (cargando) return <p>Cargando proveedores...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div>
      <h2>Lista de proveedores</h2>
      {proveedores.length === 0 ? (
        <p>No hay proveedores registrados.</p>
      ) : (
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Empresa</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {proveedores.map((proveedor) => (
              <tr key={proveedor.id}>
                <td>{proveedor.id}</td>
                <td>{proveedor.nombre}</td>
                <td>{proveedor.empresa}</td>
                <td>{proveedor.telefono}</td>
                <td>
                  <button onClick={() => onEdit(proveedor)}>Editar</button>{' '}
                  <button onClick={() => handleDelete(proveedor.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProveedoresList;
