import React from 'react';

export default function Home(props) {
  console.log('Home', props.data);
  return (
    <div>
      <h1 className="title">Home Container</h1>
      <div>
        <img
          className="cart-icon"
          src="https://cdn-icons-png.flaticon.com/512/4357/4357350.png"
          alt=""
        />
        <span className="value">{props.data.length}</span>
      </div>
      <div className="content">
        <div>
          <img
            className="img"
            src="https://img.freepik.com/free-photo/clothing-elegance-white-fashion-modern_1203-6524.jpg?size=626&ext=jpg"
            alt=""
          />
        </div>
        <div className="text">
          <span>NIKE</span>
          <span>Rs.1000</span>
        </div>
        <div className="button">
          <button
            className="btn"
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: 'NIKE' })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
