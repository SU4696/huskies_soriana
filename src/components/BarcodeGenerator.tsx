import React, { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';

const BarcodeGenerator: React.FC = () => {
  const barcodeRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const randomBarcodeNumber = Math.floor(Math.random() * 1000000).toString();
    // Generate the barcode using JsBarcode
    JsBarcode(barcodeRef.current!, randomBarcodeNumber, {
      format: 'CODE39',
      displayValue: true, 
      width: 2.7, 
      height: 100, 
    });
  }, [])

  // const handleGenerateBarcode = () => {
   
  //   const randomBarcodeNumber = Math.floor(Math.random() * 1000000).toString();
  //   // Generate the barcode using JsBarcode
  //   JsBarcode(barcodeRef.current!, randomBarcodeNumber, {
  //     format: 'CODE39',
  //     displayValue: true, 
  //     width: 2.7, 
  //     height: 100, 
  //   });

    
  // };

  return (
    <div>
      <svg ref={barcodeRef}></svg>
      {/* <button onClick={handleGenerateBarcode}>Generate Barcode</button> */}
    </div>

    
  );
};

export default BarcodeGenerator;

