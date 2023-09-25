import { useEffect, useState } from "react";
import Order from "./Order";
import "./OrderListPage.css"

const OrderList = ({setCurrentOrder, orderList, updateOrderStatus}) => {
 
    // sort by date then by priority 
    const [sortedOrderList, setSortedOrderList] = useState([]);

    const sortList=() =>{
        const clonedList = [...orderList];

        //within the date sorts by priority
        clonedList.sort((order1,order2)=>{
            return order1.orderPriority? -1 : 1;
        });

        // sorts by date first, furthest back first (ascending order)
        clonedList.sort((order1,order2)=>{
        const date1 = new Date(order1.date).getTime();
        const date2 = new Date(order2.date).getTime();
        return date1 - date2;})
    setSortedOrderList(clonedList);}

    useEffect(() => {
            sortList();
    }, [orderList]);

    const mappedOrders = sortedOrderList.map((order) => (
        <div className="orders-box" >
             <Order setCurrentOrder={setCurrentOrder} order={order} updateOrderStatus={updateOrderStatus} key={order.id}/>
        </div>
    ));
   
    return(<div>
        {mappedOrders}
        </div>);
}
export default OrderList;