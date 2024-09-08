import { useState } from "react";

import { Product } from "../../components/Product/Product";
import { useProducts } from "../../hooks/useProducts";
import Loader from "../../components/Loader/Loader";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import Pagination from "../../components/Pagination/Pagination";

import styles from "./ProductsPage.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

const ProductsPage = () => {
  const { isLoading, error, products } = useProducts();

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProductsShown = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navigation />
      <div className={styles.dz_productsPage}>
        <div className={styles.title}>
          <h1>AVAILABLE PRODUCTS</h1>
        </div>
        <div className={styles.products}>
          {isLoading && <Loader />}
          {error && <ErrorMessage error={error} />}
          {currentProductsShown.map((product) => (
            <Product key={product.id} product={product} />
          ))}
          {
            <Pagination
              itemsPerPage={productsPerPage}
              totalItems={products.length}
              paginate={paginate}
            />
          }
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
