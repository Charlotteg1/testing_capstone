import ProductList from "./ProductList";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const OrderPage = ({decreaseStockLevel, orderList,currentOrder, setCurrentOrder, updateOrderStatus}) => {

    const { id } = useParams();

    const findOrderById = (orderList, id) => {
        return orderList.find((order) => order.id === Number(id));
    };

    const foundOrder = findOrderById(orderList, id);

    useEffect(() => {
      setCurrentOrder(foundOrder);
    }, [foundOrder,currentOrder]);

    return (<> 
    <Link to="/" >View home page</Link>
    {currentOrder ? (<ProductList decreaseStockLevel={decreaseStockLevel} updateOrderStatus={updateOrderStatus} currentOrder={currentOrder} setCurrentOrder={setCurrentOrder}/>) : (<p>Loading .....</p>)}
    </>)
}
export default OrderPage;