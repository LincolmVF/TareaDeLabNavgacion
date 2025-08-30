import { Routes, Route, Link } from "react-router-dom";
import { CartProvider, useCart } from "./context/CartContext";


function Home() {
  return <h2>Bienvenido a la tienda </h2>;
}

function Catalogo() {
  const { addToCart } = useCart();

  const productos = [
    { id: 1, nombre: "Polo 1", precio: 250 },
    { id: 2, nombre: "Polo 2", precio: 50 },
    { id: 3, nombre: "Polo 3", precio: 30 },
  ];

  return (
    <div>
      <h2>Catálogo</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {productos.map((p) => (
          <div key={p.id} style={{ border: "1px solid gray", padding: "10px", borderRadius: "8px", width: "180px" }}>
            <img
              src="https://promart.vteximg.com.br/arquivos/ids/8168688-1000-1000/image-0.jpg?v=638629003104100000"
              alt={p.nombre}
              width="150"
            />
            <h3>{p.nombre}</h3>
            <p>Precio: S/. {p.precio}</p>
            <button onClick={() => addToCart(p)}>Agregar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Carrito() {
  const { cart } = useCart();

  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacio </p>
      ) : (
        <ul>
          {cart.map((item, i) => (
            <li key={i}>{item.nombre} - S/. {item.precio}</li>
          ))}
        </ul>
      )}
    </div>
  );
}


function App() {
  return (
    <CartProvider>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> 
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/carrito">Carrito</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
