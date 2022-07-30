import './styles.scss';

function ProductCard(props) {
  const { product } = props;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="card-container">
      <div className="card-image">
        <span className="card-timer">00:00:00</span>
        <img src={product.image} alt="" />
      </div>
      <div className="card-title">
        <p>{product.title}</p>
      </div>
      <div className="card-price">
        {formatter.format(product.price)}
      </div>
    </div>
  );
}

export default ProductCard;
