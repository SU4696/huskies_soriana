import React, { useState } from 'react';

const NumberCounter = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount > 1 ? prevCount - 1 : prevCount);
  };

  return (
    <div className="counter">
      <button className="counter-button" onClick={handleDecrement}>
        -
      </button>
      <input type="number" className="counter-input" value={count} readOnly />
      <button className="counter-button" onClick={handleIncrement}>
        +
      </button>
      <style jsx>{`
        .counter {
          display: flex;
          align-items: center;
        }

        .counter-button {
          background-color: #208220;
          color: #fff;
          border: none;
          padding: 5px 12px;
          font-size: 11px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .counter-button:hover {
            background-color:   #165c16 ;
        }

        .counter-input {
          width: 14px;
          text-align: center;
          margin: 0 16px;
          border: none;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
};

export default ;
