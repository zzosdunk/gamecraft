import { useShoppingCart } from "../../context/ShoppingCartContext";
import styles from "./CartItem.module.css";
import { formatCurrency } from "../../utilities/formatCurrency";

import { IProduct } from "../../models";

interface CartItemProps {
  itemData: IProduct;
}

const CartItem = ({ itemData }: CartItemProps) => {
  const { increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{itemData.title}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{formatCurrency(itemData.price)}</span>
          <span className={styles.amount}>x {itemData.quantity}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={() => decreaseCartQuantity(itemData)}>−</button>
        <button onClick={() => increaseCartQuantity(itemData)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
