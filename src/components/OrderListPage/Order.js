import { Link } from "react-router-dom";

const Order = ({setCurrentOrder, order, updateOrderStatus}) => {

const handlePackOrder= async ()=>{
    await setCurrentOrder(order)
    //need to calculate truck 
    updateOrderStatus(order.id,1,"ONGOING")
}
    return(<>
    <div>
    <p>order id : {order.id}</p>
    <p>Number of products:{order.products.length}</p>
    <p>{order.orderPriority ? "priority" : "non-priority"}</p>
    <p>{order.date}</p>
    {(order.status!=="FINISHED")?
    (<Link to={`/OrderPage/${order.id}`}>
    <button onClick={()=>handlePackOrder()}>pack order</button>
    </Link>):"done"}
    </div>
    </>
    )
}
export default Order;