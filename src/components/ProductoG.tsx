import styled from "@emotion/styled"

const ImageG = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 10px auto 0 auto;
  display:block;
`;

const Producto = () => {
    return (
      <div className="justify-center flex space-x-2 md:space-x-5 px-5">
        <button
            type="button"
            className="py-1 px-1 md:py-2 md:px-5 text-sm text-white md:font-medium rounded-lg hover:bg-gray-100"
        >
            <ImageG src={"https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw5a0523a1/images/product/7501030467090_A.jpg?sw=1000&sh=1000&sm=fit"} alt="Pan En Barra Bimbo Cero 610 gr"/>
            <p className="lg:text-lg text-black mb-50 text-center font-bold ">Pan En Barra Bimbo Cero 610 gr</p>
            <p className="text-black mb-5 text-center">$53.90</p>
        </button>
      </div>
    )
}

export default Producto