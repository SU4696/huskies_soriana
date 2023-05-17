import React from 'react';
import {
  IconButton
} from "@chakra-ui/react";

import {
  AiOutlineShoppingCart
} from "react-icons/ai";


const CartHeader = () => {
  return (
    <header className="cart-header">
      <div className="cart-header-content">
        <h2 className="cart-title">Shopping Cart</h2>
        <div className="cart-icon">
            <IconButton
                aria-label="Go to cart"
                fontSize="25px"
                color="#208220"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineShoppingCart />}
              />
        </div>
      </div>
      <style jsx>{`
        .cart-header {
          background-color: #208220;
          padding: 16px;
        }

        .cart-header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cart-title {
          margin: 0;
          font-size: 24px;
          color: #fff;
        }

        .cart-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        svg {
          width: 20px;
          height: 20px;
          fill: #333;
        }
      `}</style>
    </header>
  );
};

export default CartHeader;
