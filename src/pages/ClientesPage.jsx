import { useState } from 'react';
import ClienteForm from '../components/ClienteForm';
import ClientesList from '../components/ClientesList';

function ClientesPage() {
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
  const [recargar, setRecargar] = useState(0);

  function handleEdit(cliente) {
    setClienteSeleccionado(cliente);
  }

  function handleSuccess() {
    setClienteSeleccionado(null);
    setRecargar((prev) => prev + 1);
  }

  function handleCancel() {
    setClienteSeleccionado(null);
  }

  return (
    <div>
      <h1>Clientes</h1>
      <ClienteForm
        clienteSeleccionado={clienteSeleccionado}
        onSuccess={handleSuccess}
        onCancel={handleCancel}
      />
      <ClientesList key={recargar} onEdit={handleEdit} />
    </div>
  );
}

export default ClientesPage;
