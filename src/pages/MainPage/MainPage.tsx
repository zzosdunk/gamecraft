import { useMemo } from "react";

import { NavLink } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import "./MainPage.css";

import Quote from "../../assets/images/left-quote.png";
import Navigation from "../../components/Navigation/Navigation";
import HighestRatedProduct from "../../components/Product/HighestRatedProduct";
import { IProduct } from "../../models";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
  const { mostRatedProducts, limitedProducts } = useProducts();

  const getRandomLimitedProduct = useMemo((): IProduct => {
    return limitedProducts[Math.floor(Math.random() * limitedProducts.length)];
  }, [limitedProducts]);

  return (
    <>
      <div className="header">
        <Navigation />
        <div className="container">
          <div className="row">
            <div className="col-2">
              <h1>
                Find The Best
                <br /> What You Need!
              </h1>
              <p>
                Success isn't always about greatness. It's about consistency.
                Cosistent hard work gains success. Greatness will come.
              </p>
              <NavLink to="/products" className="btn">
                Explore Now &#8594;
              </NavLink>
            </div>
            <div className="col-2">
              <img
                src="https://i.postimg.cc/7L1mC8bk/mainpage.webp"
                alt="main"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="categories">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <NavLink to={`/products/sort/Clothes`}>
                <img
                  src="https://i.postimg.cc/pL4gQH25/clothescategory.webp"
                  alt="category"
                />
              </NavLink>
            </div>
            <div className="col-3">
              <NavLink to={`/products/sort/Jewellery`}>
                <img
                  src="https://i.postimg.cc/fLJk0rbr/jewelerycategory.webp"
                  alt="category"
                />
              </NavLink>
            </div>
            <div className="col-3">
              <NavLink to={`/products/sort/Electronics`}>
                <img
                  src="https://i.postimg.cc/TwXFSJ5R/electronicscategory.webp"
                  alt="category"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
          {mostRatedProducts.map((product) => (
            <HighestRatedProduct key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img
                src={getRandomLimitedProduct?.imgTrans}
                className="offer-img"
                alt="limited-offer"
              />
            </div>
            <div className="col-2">
              <p>Limited Edition</p>
              <h1>{getRandomLimitedProduct?.title}</h1>
              <small>{getRandomLimitedProduct?.description}</small>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img src={Quote} className="leftQuote" alt="quote-icon" />
              <p>
                Very cool store! Super support, lightning fast, thanks a lot to
                the guys for such service and the highest culture of customer
                service!
              </p>
              <img
                src="https://i.postimg.cc/xCYpgjB8/user-1.webp"
                className="commentAvatar"
                alt="user-img"
              />
              <h3>Elvira Trivett</h3>
            </div>
            <div className="col-3">
              <img src={Quote} className="leftQuote" alt="quote-icon" />
              <p>
                As a customer of this store, I can say that I am completely
                satisfied with the level of service and the quality of the goods
                provided.
              </p>
              <img
                src="https://i.postimg.cc/Jnq6FVWq/user-2.webp"
                className="commentAvatar"
                alt="user-img"
              />
              <h3>Sean Parker</h3>
            </div>
            <div className="col-3">
              <img src={Quote} className="leftQuote" alt="quote-icon" />
              <p>
                The range and quality of goods is impressive, the site design
                itself brings a separate pleasure. Very convenient and fast
                delivery.
              </p>
              <img
                src="https://i.postimg.cc/HnvSpwn8/user-3.webp"
                className="commentAvatar"
                alt="user-img"
              />
              <h3>Elizabeth Gill</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="brands">
        <div className="small-container">
          <div className="row">
            <div className="col-5">
              <img
                src="https://i.postimg.cc/fy8PV42L/logo-coca-cola.webp"
                alt="brand-img"
              />
            </div>
            <div className="col-5">
              <img
                src="https://i.postimg.cc/qBwSbnJT/logo-godrej.webp"
                alt="brand-img"
              />
            </div>
            <div className="col-5">
              <img
                src="https://i.postimg.cc/9FNSVhwg/logo-paypal.webp"
                alt="brand-img"
              />
            </div>
            <div className="col-5">
              <img
                src="https://i.postimg.cc/Nf0VWMFr/logo-oppo.webp"
                alt="brand-img"
              />
            </div>
            <div className="col-5">
              <img
                src="https://i.postimg.cc/RZ6YZDcS/logo-philips.webp"
                alt="brand-img"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MainPage;
