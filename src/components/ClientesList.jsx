import { useEffect, useState } from 'react';
import { getClientes, deleteCliente } from '../api/clientes';

function ClientesList({ onEdit }) {
  const [clientes, setClientes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getClientes()
      .then(setClientes)
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  async function handleDelete(id) {
    if (!confirm('¿Eliminar este cliente?')) return;
    try {
      await deleteCliente(id);
      setClientes((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      alert('Error al eliminar: ' + err.message);
    }
  }

  if (cargando) return <p>Cargando clientes...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div>
      <h2>Lista de clientes</h2>
      {clientes.length === 0 ? (
        <p>No hay clientes registrados.</p>
      ) : (
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.correo}</td>
                <td>{cliente.telefono}</td>
                <td>
                  <button onClick={() => onEdit(cliente)}>Editar</button>{' '}
                  <button onClick={() => handleDelete(cliente.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ClientesList;
