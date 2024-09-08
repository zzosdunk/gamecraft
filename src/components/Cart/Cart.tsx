import { useShoppingCart } from "../../context/ShoppingCartContext";
import { Modal } from "../Modal/Modal";

import { formatCurrency } from "../../utilities/formatCurrency";
import CartItem from "./CartItem";

import styles from "./Cart.module.css";

const Cart = () => {
  const { closeCart, cartItems, totalAmount } = useShoppingCart();

  return (
    <Modal onClose={closeCart}>
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id} itemData={item} />
      ))}
      <div className={styles.total}>
        <span>{cartItems.length > 0 ? "Total amount" : "Cart is empty"}</span>
        <span className={styles.totalAmount}>
          {formatCurrency(totalAmount)}
        </span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={closeCart}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
