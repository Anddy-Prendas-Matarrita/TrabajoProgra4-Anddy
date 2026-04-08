import { useState } from 'react';
import ProveedorForm from '../components/ProveedorForm';
import ProveedoresList from '../components/ProveedoresList';

function ProveedoresPage() {
  const [proveedorSeleccionado, setProveedorSeleccionado] = useState(null);
  const [recargar, setRecargar] = useState(0);

  function handleEdit(proveedor) {
    setProveedorSeleccionado(proveedor);
  }

  function handleSuccess() {
    setProveedorSeleccionado(null);
    setRecargar((prev) => prev + 1);
  }

  function handleCancel() {
    setProveedorSeleccionado(null);
  }

  return (
    <div>
      <h1>Proveedores</h1>
      <ProveedorForm
        proveedorSeleccionado={proveedorSeleccionado}
        onSuccess={handleSuccess}
        onCancel={handleCancel}
      />
      <ProveedoresList key={recargar} onEdit={handleEdit} />
    </div>
  );
}

export default ProveedoresPage;
