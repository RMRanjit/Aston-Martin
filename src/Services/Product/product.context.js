import React, { useState, createContext, useEffect, useMemo } from "react";

import { productRequest, productTransform } from "./product.service";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const add = (product) => {
    setProducts([...products, product]);
  };

  const remove = (product) => {
    const newProducts = products.filter((x) => x.id !== product.id);

    setProducts(newProducts);
  };

  const retrieveProducts = () => {
    setIsLoading(true);
    setTimeout(() => {
      productRequest()
        .then(productTransform)
        .then((results) => {
          setIsLoading(false);
          setProducts(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    retrieveProducts();
  }, []);

  //console.log(products);
  return (
    <ProductsContext.Provider
      value={{
        products,
        addToProducts: add,
        removeFromProducts: remove,
        isLoading,
        error,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
