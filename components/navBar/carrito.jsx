import { useState } from "react";
import CarritoVacio from "../../src/assets/icons/carritoVacio";
import CarritoLleno from "../../src/assets/icons/carritoLleno";
import { Link } from "react-router-dom";

const Carrito = () => {

    const [carritoEmpty, setCarritoEmpty] = useState(false);

if (!carritoEmpty) {
  return (
    <div>
     <Link to={""}> <CarritoVacio /></Link>
    </div>
  )
} else {
  return (
    <div>
      <CarritoLleno />
    </div>
  )
}
}

export default Carrito;
