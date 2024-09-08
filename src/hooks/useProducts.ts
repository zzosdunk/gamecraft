import { useState, useEffect } from "react";
import { IProduct } from "../models";

import {
  onSnapshot,
  QuerySnapshot,
  DocumentData,
  query,
  limit,
  getDocs,
  orderBy,
  where,
} from "firebase/firestore";
import { productsCollection } from "../lib/controller";

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [mostRatedProducts, setMostRatedProducts] = useState<IProduct[]>([]);
  const [limitedProducts, setLimitedProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      onSnapshot(
        productsCollection,
        (snapshot: QuerySnapshot<DocumentData>) => {
          setProducts(
            snapshot.docs.map((doc) => {
              return {
                ...doc.data(),
              };
            })
          );
        }
      );

      getMostRatedProducts();
      getLimitedProducts();
      setError("");
      setIsLoading(true);
    } catch (e) {
      const error = e as Error;
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getMostRatedProducts = async () => {
    const q = query(productsCollection, orderBy("rating", "desc"), limit(4));

    const documentSnapshots = await getDocs(q);
    setMostRatedProducts(() =>
      documentSnapshots.docs.map((doc) => {
        return {
          ...doc.data(),
        };
      })
    );
  };

  const getLimitedProducts = async () => {
    const q = query(productsCollection, where("limited", "==", true));

    const documentSnapshots = await getDocs(q);
    setLimitedProducts(() =>
      documentSnapshots.docs.map((doc) => {
        return {
          ...doc.data(),
        };
      })
    );
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    error,
    products,
    mostRatedProducts,
    limitedProducts,
  };
};
