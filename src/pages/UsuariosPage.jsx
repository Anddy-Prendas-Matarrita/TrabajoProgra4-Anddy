import UsuariosList from "../components/UsuariosList";
import UsuarioForm from "../components/UsuarioForm";

function UsuariosPage() {
  return (
    <div>
      <h1>Usuarios</h1>
      <UsuarioForm />
      <UsuariosList />
    </div>
  );
}

export default UsuariosPage;