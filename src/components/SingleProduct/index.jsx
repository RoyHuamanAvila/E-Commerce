import './styles.scss';

function SingleProduct() {
  return (
    <div className="single-container">
      <img className="img-product" src="https://dojiw2m9tvv09.cloudfront.net/48881/product/expl1444.png" alt="" />
      <div className="specifications">
        <div className="title-product">
          COUGAR EXPLORE
        </div>
        <div className="price-product">
          $ 1.129.00
        </div>
        <div className="rating-product">
          18.9
        </div>
        <div className="description-product">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eos, consequuntur eum odit dignissimos
          culpa,
          dolor laboriosam aut saepe repudiandae corrupti
          eius. Doloribus commodi adipisci placeat blanditiis assumenda aliquam culpa. Eveniet.
        </div>
        <button type="button" className="add-cart">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
