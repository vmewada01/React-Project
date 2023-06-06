import { useContext } from "react";

import { Navigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

function PrivateRoute({ children }) {
  const {auth} = useContext(CartContext)

  if (auth) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivateRoute