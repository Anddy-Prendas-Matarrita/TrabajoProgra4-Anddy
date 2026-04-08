import ProductosList from "../components/ProductosList";
import ProductoForm from "../components/ProductoForm";

function ProductosPage() {
  return (
    <div>
      <h1>Productos</h1>
      <ProductoForm />
      <ProductosList />
    </div>
  );
}

export default ProductosPage;