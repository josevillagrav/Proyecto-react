import { Link } from "react-router-dom";
import cart from "../assets/cart.svg";

export const CartWidget = () => {
  return (
    // <div id="cart-widget">
    <Link to="/cart">
      <img src={cart} alt="Cart" width={40} />
      <span>89</span>
    </Link>
    // </div>
  );
};
