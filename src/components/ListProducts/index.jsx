import './styles.scss';
import { useEffect, useState } from 'react';

import ProductCard from '../ProductCard';
import { getProducts } from '../../services/products';

function ListProducts() {
  const [products, setProducts] = useState([]);

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProducts();
      setProducts(result);
    };
    fetchData();
  }, []);

  return (
    <div className="list-container">
      <div className="large-space">
        {products.map((product) => <ProductCard key={product.id} product={product} time={randomNumberInRange(1, 10)} />)}
      </div>
    </div>
  );
}

export default ListProducts;
