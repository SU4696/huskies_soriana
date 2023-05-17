/*
import React from 'react';

const SearchBar = () => {
  // const handleSearch = (e) => {
    //  const query = e.target.value;
    // Aquí puedes realizar la lógica de búsqueda
    // console.log('Búsqueda:', query);
 // };

  const handleCameraOption = () => {
    // Aquí puedes implementar la lógica para abrir la cámara
    console.log('Abrir cámara');
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar..."
        // onChange={handleSearch}
        className="search-input"
      />
      <button onClick={handleCameraOption} className="camera-button">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#333"
            d="M20.5 4h-2.2l-.5-1.3C17.5 2.2 16.9 2 16.3 2H7.7c-.6 0-1.2.2-1.5.7L5.2 4H2.5C1.7 4 1 4.7 1 5.5V6c0 .3.2.5.5.5h.9l.8 1.9c.1.2.4.3.6.2l2.4-.9v8.8L4 18.7c-.1.2 0 .4.2.6l1.8 1.8c.2.2.4.3.6.2l4.5-1.8h5.9l4.5 1.8c.2.1.4 0 .6-.2l1.8-1.8c.2-.2.3-.4.2-.6l-1.3-2.9V8.2l2.4.9c.2.1.5 0 .6-.2l.8-1.9h.9c.3 0 .5-.2.5-.5v-.5c0-.8-.7-1.5-1.5-1.5zm-11 16c-.2 0-.3-.1-.4-.2l-1.4-1.4c-.2-.2-.2-.4 0-.6l4.2-4.2c.2-.2.4-.2.6 0l1.4 1.4c.2.2.2.4 0 .6l-4.2 4.2c-.1.1-.2.2-.4.2zm9.6-3.5L15.8 17h-3.6l1.9-4.1c.1-.2.1-.3.1-.5V7.9l2.5-1h1.6l1.9 1.9v6.7c0 .2 0 .3.1.5zm1.4-9.6h-2.6l-.8-2H19z"
          />
        </svg>
      </button>
      <style jsx>{`
        .search-bar {
          display: flex;
          align-items: center;
          background-color: #f2f2f2;
          padding: 8px;
          border-radius: 4px;
        }

        .search-input {
          flex-grow: 1;
          border: none;
          outline: none;
          padding: 4px;
          font-size: 16px;
        }

        .camera-button {
          background: none;
          border: none;
          cursor: pointer;
        }

        .camera-button svg {
          fill: #333;
          width: 20px;
          height: 20px;
        }
      `}</style>
    </div>
  );
};

export default SearchBar;

*/

import React from 'react';

import { IconButton, Flex, HStack } from "@chakra-ui/react";
import { AiFillCamera } from "react-icons/ai";


const SearchBar = () => {
  const handleSearch = (event) => {
    const query = event.target.value;
    // Aquí puedes realizar la lógica de búsqueda
    console.log('Búsqueda:', query);
  };

  const handleCameraOption = () => {
    // Aquí puedes implementar la lógica para abrir la cámara
    console.log('Abrir cámara');
  };

  return (
    <div className="search-bar">
      <button onClick={handleCameraOption} className="camera-button">
        <IconButton
         aria-label="Camera"
         justifyItems={"center"}
         variant="outline"
         size={"lg"}
         borderColor={"lightgray"}
         borderWidth={"medium"}
         borderRadius={"3rem"}
         backgroundColor={"#208220"}
         icon={<AiFillCamera color="white" size={30} />}
         /> 
      </button>
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar..."
          onChange={handleSearch}
          className="search-input"
        />
        <button className="search-button">
          <IconButton
          aria-label="search"
          justifyItems={"center"}
          size={"lg"}
          icon={<AiFillCamera color="black" size={20} />}
          
          /> 
      </button>
      </div>
      <style jsx>{`
        .search-bar {
          display: flex;
          align-items: center;
          background-color: #f2f2f2;
          padding: 8px;
          border-radius: 4px;
        }

        .camera-button {
          background: none;
          border: none;
          cursor: pointer;
          margin-right: 8px;
        }

        .camera-button svg {
          fill: #333;
          width: 20px;
          height: 20px;
        }

        .search-container {
          display: flex;
          align-items: center;
          background-color: white;
          border-radius: 4px;
          flex-grow: 1;
        }

        .search-input {
          flex-grow: 1;
          border: none;
          outline: none;
          padding: 4px;
          font-size: 16px;
        }

        .search-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .search-button svg {
          fill: #333;
          width: 20px;
          height: 20px;
        }
  `}</style>
</div>
);
};

export default SearchBar;