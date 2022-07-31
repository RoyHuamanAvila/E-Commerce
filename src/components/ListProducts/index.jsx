import './styles.scss';
import { useEffect, useState } from 'react';

import ProductCard from '../ProductCard';
import { getProducts } from '../../services/products';

function ListProducts() {
  const [products, setProducts] = useState([]);

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
        {products.map((product) => <ProductCard product={product} />)}
      </div>
    </div>
  );
}

export default ListProducts;
