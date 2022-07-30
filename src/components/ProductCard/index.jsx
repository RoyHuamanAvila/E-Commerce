import './styles.scss';

function ProductCard() {
  return (
    <div className="card-container">
      <div className="card-image">
        <span className="card-timer">00:00:00</span>
        <img src="https://mesajilgamer.com/wp-content/uploads/sites/7/2021/05/022048-4.png" alt="" />
      </div>
      <div className="card-title">
        Audifonos Logitech G635
      </div>
      <div className="card-price">
        S/.445
      </div>
    </div>
  );
}

export default ProductCard;
