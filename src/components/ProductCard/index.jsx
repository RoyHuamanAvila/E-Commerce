/* eslint max-len: ["error", { "ignoreUrls": true }] */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

function ProductCard({ product, time }) {
  const [timer, setTimer] = useState(time);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const fmtMSS = (s) => {
    let sec = s;
    const timeFormat = (sec - (sec %= 60)) / 60 + (sec > 9 ? ':' : ':0') + sec;
    return timeFormat;
  };

  useEffect(() => {
    let currentTime = time;
    const interval = setInterval(() => {
      currentTime -= 1;
      setTimer(currentTime);
      if (currentTime < 1) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    timer > 1
      ? (
        <Link to={`/products/${product.id}`}>
          <div className="card-container">
            <div className="card-image">
              <span className="card-timer">{fmtMSS(timer)}</span>
              {
                timer < 1 ? <img className="sticker" src="https://www.hostinet.com/formacion/wp-content/uploads/2017/01/agotado-sello.png" alt="" />
                  : <div>.</div>
              }
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
      )
      : (
        <div className="card-container">
          <div className="card-image">
            <span className="card-timer">{fmtMSS(timer)}</span>
            {
              timer < 1 ? <img className="sticker" src="https://www.hostinet.com/formacion/wp-content/uploads/2017/01/agotado-sello.png" alt="" />
                : <div>.</div>
            }
            <img src={product.image} alt="" />
          </div>
          <div className="card-title">
            <p>{product.title}</p>
          </div>
          <div className="card-price">
            {formatter.format(product.price)}
          </div>
        </div>
      )
  );
}

export default ProductCard;
