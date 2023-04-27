import styled from "@emotion/styled"

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 10px auto 0 auto;
  display:block;
`;

const Producto = () => {
    return (
        <div className="bg-white">
            <div className="justify-center flex space-x-2 md:space-x-5 px-5">
            <button
                type="button"
                className="py-1 px-1 md:py-2 md:px-5 text-sm text-white md:font-medium rounded-lg hover:bg-gray-100"
            >
                <Image src={"https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwc265f4fc/images/product/0000000005203_A.jpg?sw=1000&sh=1000&sm=fit"} alt="Plátano (1kg)" />
                <p className="lg:text-lg text-black mb-50 text-center font-bold ">Plátano (1kg)</p>
                <p className="text-black mb-5 text-center">$22.90</p>
            </button>
            
            <button
                type="button"
                className="py-1 px-1 md:py-2 md:px-5 text-sm text-black md:font-medium rounded-lg hover:bg-gray-100"
            > <Image src={"https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw268d0019/images/product/0000000002752_A.jpg?sw=1000&sh=1000&sm=fit"} alt="Jicama (1kg)" />
                <p className="lg:text-lg text-black mb-50 text-center font-bold ">Jícama (1kg)</p>
                <p className="text-black mb-5 text-center">$24.90</p>
            </button>

            <button
                type="button"
                className="py-1 px-1 md:py-2 md:px-5 text-sm text-black md:font-medium rounded-lg hover:bg-gray-100"
            > <Image src={"https://eldiariony.com/wp-content/uploads/sites/2/2022/10/semillas-de-manzana-shutterstock_1515666419.jpg?quality=80&strip=all&w=960"} alt="Manzana (1kg)" />
                <p className="lg:text-lg text-black mb-50 text-center font-bold ">Manzana (1kg)</p>
                <p className="text-black mb-5 text-center">$36.90</p>
            </button>
        </div>


        <div className="justify-center flex space-x-2 md:space-x-5 px-5">
            <button
                type="button"
                className="py-1 px-1 md:py-2 md:px-5 text-sm text-white md:font-medium rounded-lg hover:bg-gray-100"
            >
                <Image src={"https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwce34da90/images/product/7501055304745_A.jpg?sw=1000&sh=1000&sm=fit"} alt="Refresco Coca-Cola 3 lt" />
                <p className="lg:text-lg text-black mb-50 text-center font-bold ">Refresco Coca-Cola 3 lt</p>
                <p className="text-black mb-5 text-center">$41.90</p>
            </button>

            <button
                type="button"
                className="py-1 px-1 md:py-2 md:px-5 text-sm text-black md:font-medium rounded-lg hover:bg-gray-100"
            > <Image src={"https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwc91a86d0/images/product/7501059224827_A.jpg?sw=1000&sh=1000&sm=fit"} alt="Café Soluble Nescafé Clásico 200 g" />
                <p className="lg:text-lg text-black mb-50 text-center font-bold ">Café Soluble Nescafé Clásico 200 g</p>
                <p className="text-black mb-5 text-center">$110.00</p>
            </button>

            <button
                type="button"
                className="py-1 px-1 md:py-2 md:px-5 text-sm text-black md:font-medium rounded-lg hover:bg-gray-100"
            > <Image src={"https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw947797c1/images/product/0232530000001_A.jpg?sw=1000&sh=1000&sm=fit"} alt="Queso Gouda Fud (1 kg)" />
                <p className="lg:text-lg text-black mb-50 text-center font-bold ">Queso Gouda Fud (1 kg)</p>
                <p className="text-black mb-5 text-center">$292.90</p>
            </button>
        </div>

        
        </div>
    )
}

export default Producto