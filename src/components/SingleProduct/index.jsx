import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/products';
import './styles.scss';

function SingleProduct() {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProduct(id);
      setProduct(result);
    };
    fetchData();
  }, []);

  return (
    <div className="single-container">
      <img className="img-product" src={product.image} alt="" />
      <div className="specifications">
        <div className="title-product">
          {product.title}
        </div>
        <div className="price-product">
          {formatter.format(product.price)}
        </div>
        <div className="rating-product">
          18.9
        </div>
        <div className="description-product">
          {product.description}
        </div>
        <button type="button" className="add-cart">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
