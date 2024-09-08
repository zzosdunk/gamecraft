import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import MainPage from "./pages/MainPage/MainPage";

import "./App.css";
import Cart from "./components/Cart/Cart";
import { useShoppingCart } from "./context/ShoppingCartContext";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const ProductsPage = lazy(() => import("./pages/ProductsPage/ProductsPage"));
const ProductsCategory = lazy(
  () => import("./pages/ProductsPage/ProductsCategory")
);
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));

enum Path {
  Main = "/",
  Products = "/products",
  Contact = "/contact",
  ProductsCategory = "/products/sort/:category",
}

function App() {
  const { isCartOpen } = useShoppingCart();

  return (
    <>
      <Routes>
        <Route path={Path.Main} element={<MainPage />} />
        <Route
          path={Path.Products}
          element={
            <Suspense
              fallback={
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={true}
                  onClick={() => {}}
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
              }
            >
              <ProductsPage />
            </Suspense>
          }
        />
        <Route
          path={Path.Contact}
          element={
            <Suspense
              fallback={
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={true}
                  onClick={() => {}}
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
              }
            >
              <ContactPage />
            </Suspense>
          }
        />
        <Route
          path={Path.ProductsCategory}
          element={
            <Suspense
              fallback={
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={true}
                  onClick={() => {}}
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
              }
            >
              <ProductsCategory />
            </Suspense>
          }
        />
      </Routes>
      {isCartOpen ? <Cart /> : null}
    </>
  );
}

export default App;
