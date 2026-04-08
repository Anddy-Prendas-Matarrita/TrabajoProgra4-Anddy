import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import InicioPage from "./pages/InicioPage";

import UsuariosList from "./components/UsuariosList";
import UsuarioForm from "./components/UsuarioForm";

import ProductosList from "./components/ProductosList";
import ProductoForm from "./components/ProductoForm";

import ClientesPage from "./pages/ClientesPage";
import ProveedoresPage from "./pages/ProveedoresPage";

function App() {
  // ---------------- USUARIOS ----------------
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [recargarUsuarios, setRecargarUsuarios] = useState(0);

  function handleEditUsuario(usuario) {
    setUsuarioSeleccionado(usuario);
  }

  function handleSuccessUsuario() {
    setUsuarioSeleccionado(null);
    setRecargarUsuarios((prev) => prev + 1);
  }

  function handleCancelUsuario() {
    setUsuarioSeleccionado(null);
  }

  // ---------------- PRODUCTOS ----------------
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [recargarProductos, setRecargarProductos] = useState(0);

  function handleEditProducto(producto) {
    setProductoSeleccionado(producto);
  }

  function handleSuccessProducto() {
    setProductoSeleccionado(null);
    setRecargarProductos((prev) => prev + 1);
  }

  function handleCancelProducto() {
    setProductoSeleccionado(null);
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Gestión (React + Express)</h1>

      <Menu />

      <Routes>
        <Route path="/" element={<InicioPage />} />

        <Route
          path="/usuarios"
          element={
            <>
              <UsuarioForm
                usuarioSeleccionado={usuarioSeleccionado}
                onSuccess={handleSuccessUsuario}
                onCancel={handleCancelUsuario}
              />
              <UsuariosList
                key={recargarUsuarios}
                onEdit={handleEditUsuario}
              />
            </>
          }
        />

        <Route
          path="/productos"
          element={
            <>
              <ProductoForm
                productoSeleccionado={productoSeleccionado}
                onSuccess={handleSuccessProducto}
                onCancel={handleCancelProducto}
              />
              <ProductosList
                key={recargarProductos}
                onEdit={handleEditProducto}
              />
            </>
          }
        />

        {/* 🔹 Nuevas rutas */}
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/proveedores" element={<ProveedoresPage />} />
      </Routes>
    </div>
  );
}

export default App;
