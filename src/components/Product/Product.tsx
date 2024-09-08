import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { IProduct } from "../../models";
import { formatCurrency } from "../../utilities/formatCurrency";
import Button from "../UI/Button/Button";

import styles from "./Product.module.css";

interface IProductProps {
  product: IProduct;
}

export const Product = ({ product }: IProductProps) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();

  const quantity = getItemQuantity(product);

  return (
    <div className={styles.product}>
      <div className={styles.productImage}>
        <img src={product.imgTrans} alt={product.title} />
      </div>
      <div className={styles.productDescription}>
        <div>
          <h1>{product.title}</h1>
          <p className={styles.category}>{product.category}</p>
          <p>{product.description}</p>
        </div>

        <div className={styles.rating}>
          <Typography component="legend">Users rate: </Typography>
          <Rating
            name="half-rating-read"
            value={product?.rating}
            precision={0.5}
            readOnly
          />
        </div>
      </div>

      <div className={styles.quantityBlock}>
        <p className={styles.price}>{formatCurrency(product.price)}</p>
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
