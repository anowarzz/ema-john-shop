import React from 'react';

const Product = ({product}) => {
  const {name, price, img, seller, ratings} = product;
    return (
        <div>
         <div className="card bg-gray-300 shadow border border-zinc-200">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary w-full bottom-0">Buy Now</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Product;