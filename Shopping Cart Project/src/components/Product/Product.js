import React, { useEffect, useState } from "react";

import { Grid } from "@mui/material";
import { api } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  getAllProducts,
  removeSelectedProduct,
} from "../../features/Products/productSlice";

import Blog from "./Blog";

const Product = () => {
  const products = useSelector(getAllProducts);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    setIsLoading(true);
    const res = await api.get("/products");

    dispatch(fetchProducts(res.data));
    setIsLoading(false);
  };

  useEffect(() => {
    dispatch(removeSelectedProduct());
    getProducts();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Loading.......</h1>
      ) : (
        <Grid
          container
          spacing={2}
          style={{
            marginTop: "20px",
            padding: "0 20px",
          }}
        >
          {products.map((product, key) => (
            <Blog key={key} product={product} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Product;
