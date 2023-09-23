import { Link } from "react-router-dom";

const Order = ({order, updateOrderStatus}) => {

const handlePackOrder=()=>{
    updateOrderStatus(order.id,1,"ONGOING")
}

    return(<>
    <div>
    <h2>{order.id}</h2>
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