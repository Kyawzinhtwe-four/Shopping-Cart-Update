import React, { useEffect, useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import { useParams } from "react-router";
import { api } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  singleProduct,
} from "../../features/Products/productSlice";
import { addToCart } from "../../features/Carts/cartSlice";

const Detail = () => {
  const product = useSelector(singleProduct);

  const [isLoading, setIsLoading] = useState(false);

  const { productId } = useParams();

  const dispatch = useDispatch();

  const fetchProduct = async () => {
    setIsLoading(true);
    const res = await api.get(`/products/${productId}`);

    dispatch(selectedProduct(res.data));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleAddToCart = (id, title, price, image) => {
    dispatch(
      addToCart({
        id,
        title,
        price,
        image,
      })
    );
  };

  return (
    <div>
      {isLoading ? (
        <h1>Loading .........</h1>
      ) : (
        <Container maxWidth="sm">
          <img
            src={product.image}
            style={{
              width: "100%",
              minHeight: "60vh",
            }}
          />
          <Typography gutterBottom variant="h6" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.price} $
          </Typography>
          <Button
            size="small"
            onClick={() =>
              handleAddToCart(
                product.id,
                product.title,
                product.price,
                product.image
              )
            }
          >
            Add To Cart
          </Button>
        </Container>
      )}
    </div>
  );
};

export default Detail;
