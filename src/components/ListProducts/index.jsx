import './styles.scss';

import ProductCard from '../ProductCard';

function ListProducts() {
  return (
    <div className="list-container">
      <div className="large-space">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default ListProducts;
