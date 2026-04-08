import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/usuarios">Usuarios</Link> |{" "}
      <Link to="/productos">Productos</Link> |{" "}
      <Link to="/clientes">Clientes</Link> |{" "}
      <Link to="/proveedores">Proveedores</Link>
    </nav>
  );
}

export default Menu;