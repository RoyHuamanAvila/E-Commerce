import { Link } from 'react-router-dom';

import './styles.scss';

function ProductCard(props) {
  const { product } = props;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <Link to={`/products/${product.id}`}>
      <div className="card-container">
        <div className="card-image">
          <span className="card-timer">00:00:00</span>
          <img className="sticker" src="https://www.hostinet.com/formacion/wp-content/uploads/2017/01/agotado-sello.png" alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="card-title">
          <p>{product.title}</p>
        </div>
        <div className="card-price">
          {formatter.format(product.price)}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
