import OrderList from "./OrderList";
import React from "react";

const OrderListPage = ({setCurrentOrder, orderList, updateOrderStatus}) => {

    return(<>
        <OrderList setCurrentOrder={setCurrentOrder} updateOrderStatus={updateOrderStatus} orderList={orderList} key={1}/>
    </>)
}
export default OrderListPage;