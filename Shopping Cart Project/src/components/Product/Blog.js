import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/Carts/cartSlice";

const Blog = ({ product }) => {
  const dispatch = useDispatch();

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
    <Grid item lg={3} md={6} xs={12}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={product.image}
        />
        <Link to={`/products/${product.id}`}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.category}
            </Typography>
          </CardContent>
        </Link>
        <CardActions
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "700",
          }}
        >
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
          <Typography variant="h6">${product.price}</Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Blog;
