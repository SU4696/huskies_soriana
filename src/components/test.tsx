import Link from "next/link";
import React from "react";

function CircleButton({ children }: any, url: string) {
  return (
    <Link href={url} target={"_blank"} rel={"noonpener noreferrer"} >
      <button 
        style={{
          borderRadius: "50%",
          backgroundColor: "black",
          borderColor: "#F6FFDE",
          width: "36px",
          height: "36px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderWidth:"1px",
          padding:"7px",
          cursor: "pointer"
        }}
      >
        {children}
      </button>

    </Link>
  );
}

export default CircleButton;
