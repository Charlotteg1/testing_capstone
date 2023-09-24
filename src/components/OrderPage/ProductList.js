import Product from "./Product";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = ({decreaseStockLevel,currentOrder, updateOrderStatus, setCurrentOrder}) => {

    const navigate = useNavigate();
    const [numberProductsPacked, setNumberProductsPacked]= useState(0);
    const [isOrderPackingComplete, setIsOrderPackingComplete]= useState(false);
    const [isModalOpen, setIsModalOpen]= useState(false)

    if (!currentOrder || !currentOrder.products) {
        return <p>Loading...</p>;
    }

    const sortedProductList= [...currentOrder.products];
    sortedProductList.sort((product1,product2)=>{
        const charcode1=product1.productLocation.charCodeAt(0);
        const charcode2=product2.productLocation.charCodeAt(0);
        return charcode1-charcode2;// sorts from A-Z
    })
    sortedProductList.sort((product1,product2)=>{
        const number1=product1.productLocation.substring(1);
        const number2=product2.productLocation.substring(1);
        return number2-number1; // sorts number location in decending order.
        //(after it being alphabetically sorted)
    })

    const handleComplete=() =>{
        setIsOrderPackingComplete(!isOrderPackingComplete)
    }

    // do a filter collects all matching productids 
    const mappedProducts= sortedProductList.map((product)=>(
    <div className="each-product-box">
        <Product currentOrder={currentOrder} handleComplete={handleComplete} 
        product={product} numberProductsPacked={numberProductsPacked} 
        setNumberProductsPacked={setNumberProductsPacked} isOrderPackingComplete={isOrderPackingComplete} key={product.id}/>
    </div>))

    const handleCompletedOrder=()=>{
        // const truckId = currentOrder.truck.id;
        console.log("Open Modal clicked");
        setIsModalOpen(true);
    }

    const handleConfirm=()=>{
        updateOrderStatus(currentOrder.id,1,"FINISHED")
        decreaseStockLevel(currentOrder.id)
        navigate("/");
        setIsModalOpen(false)
        setCurrentOrder(null);
    }

    return (<>
    {mappedProducts}
    <br/> 
    <br/>
    {isOrderPackingComplete? (<div><button onClick={()=>handleCompletedOrder()}> Order Complete </button></div>) : "please pack items into order"}
    {isModalOpen && ( 
            <div className="confirm-modal" >
                <div className="confirm-modal-content">
                    <h2>Please load into truck {currentOrder.truck.id}</h2>
                    <div className="iframe"><iframe src="https://giphy.com/embed/QyKHaxxc4XvYo1jt4b"></iframe><div className="iframe-overlay"></div></div>
                    <button className="confirm" onClick={()=>handleConfirm()}>
                      Confirm
                    </button>
                </div>
            </div>
        )}
    
    </>)

}
export default ProductList;


// need to remove complete order when a unpack item button has been clicked : done
// needs to save what is packed in order when going back to the page from the home page for example
// be able to calculate orderSumSize for each order
// sent a decrease stock patch
// be able to assign truck and employee id when orderStatus changes to OnGoing