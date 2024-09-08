import Rating from "@mui/material/Rating";
import styles from "./HighestRatedProduct.module.css";
import { formatCurrency } from "../../utilities/formatCurrency";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { IProduct } from "../../models";
import Button from "../UI/Button/Button";

interface ProductProps {
  product: IProduct;
}

const HighestRatedProduct = ({ product }: ProductProps) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();

  const quantity = getItemQuantity(product);
  return (
    <div className={styles["col-4"]}>
      <img src={product.image} alt="product" />
      <h4>{product.title}</h4>
      <Rating
        name="half-rating-read"
        value={product.rating}
        precision={0.5}
        readOnly
      />
      <p>{formatCurrency(product.price)}</p>
      <div className={styles.quantityBlock}>
        {quantity === 0 ? (
          <Button
            buttonText="Add to cart"
            onClick={() => increaseCartQuantity(product)}
          />
        ) : (
          <div className={styles.quantityLogic}>
            <Button
              buttonText="-"
              onClick={() => decreaseCartQuantity(product)}
            />
            <p>{quantity}</p>
            <Button
              buttonText="+"
              onClick={() => increaseCartQuantity(product)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HighestRatedProduct;
