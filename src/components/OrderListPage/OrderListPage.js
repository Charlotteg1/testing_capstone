import OrderList from "./OrderList";
import React from "react";

const OrderListPage = ({orderList, updateOrderStatus}) => {

    return(<>
        <OrderList updateOrderStatus={updateOrderStatus} orderList={orderList}/>
    </>)
}
export default OrderListPage;