import React from 'react';

export default function Header(props) {
  console.log('Header', props.data);
  return (
    <div>
      <div>
        <img
          className="cart-icon"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/shopping-cart-and-plus-icon-8639731-6876290.png"
          alt=""
        />
        <span className="value">{props.data.length}</span>
      </div>
    </div>
  );
}
