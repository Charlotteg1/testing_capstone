import { useEffect, useState } from "react";
import "./OrderPage.css";

const Product = ({numberProductsPacked, setNumberProductsPacked, handleComplete, currentOrder, product, isOrderPackingComplete}) => {
   
   const [isPacked, setIsPacked] = useState(false);

   const handleItemPacked = ()=>{
      setNumberProductsPacked(numberProductsPacked+1)
      setIsPacked(true);
   }

   const handleItemUnpacked = () => {
      setIsPacked(false);
      setNumberProductsPacked(numberProductsPacked-1)
   };

   useEffect(()=>{
      checkComplete();
  },[numberProductsPacked])

  const checkComplete=()=>{
      if(numberProductsPacked===currentOrder.products.length){
         handleComplete()
      }
      if(isOrderPackingComplete===true && numberProductsPacked<currentOrder.products.length){
         handleComplete()}
  }

   return(<>
   <p>{product.name}</p>
   <p>location in warehouse: {product.productLocation}</p>
   <div className="item-pack-button">
   {isPacked ? (
          <button className="unpack-item-button" data-id="Click to undo" onClick={handleItemUnpacked}>Unpack Item</button>
        ) : (
          <button className="confirm-item-button" data-id="Click when item is in box" onClick={handleItemPacked} >Confirm Item Packed</button>
        )}
   </div></>)

}
export default Product;
