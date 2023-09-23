import Order from "./Order";

const OrderList = ({orderList, updateOrderStatus}) => {
     // sort by date then by priority 
    const sortedOrderList= [...orderList];
    
    // sorts by date first, furthest back first (ascending order)
    sortedOrderList.sort((order1,order2)=>{
    const date1 = new Date(order1.date).getTime();
    const date2 = new Date(order2.date).getTime();
    return date1 - date2;
    });

    //within the date sorts by priority
    sortedOrderList.sort((order1,order2)=>{
        return order1.orderPriority? -1 : 1;
    })
    
    const mappedOrders = sortedOrderList.map((order) => (
        <div className="orders-box" >
             <Order order={order} updateOrderStatus={updateOrderStatus} key={order.id}/>
        </div>
    ));
   

    return <div>{mappedOrders}</div>;
}
export default OrderList;