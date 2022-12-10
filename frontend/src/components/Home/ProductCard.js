import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Rating from '@mui/material/Rating';

const ProductCard = ({ product }) => {
  return (
    <div>
      <Link className="productCard" to={`/product/${product._id}`}>
        <img src={product.images[0].url} alt={product.name} />
        <p>{product.name}</p>

        <div>
          <Rating
            readOnly={true}
            name="half-rating"
            defaultValue={product.ratings}
            precision={0.5}
          />

          <span>{product.numOfReviews} Reviews</span>
        </div>
        <span>{`₹${product.price}`}</span>
      </Link>
    </div>
  );
};

export default ProductCard;
