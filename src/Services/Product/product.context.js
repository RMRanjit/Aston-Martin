import React, { useState, createContext, useEffect, useMemo } from "react";

import { productRequest, productTransform } from "./product.service";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
        isLoading,
        error,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
