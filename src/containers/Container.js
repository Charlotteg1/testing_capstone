import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import OrderListPage from "../components/OrderListPage/OrderListPage";
import OrderPage from "../components/OrderPage/OrderPage";
import { useEffect, useState } from "react";

const Container = () => {

    const[orderList, setOrderList]=useState([]);
    const[currentOrder, setCurrentOrder]=useState(null);
    const[employeeId, setEmployeeId]=useState(1);
    const[truckList, setTruckList]=useState([]);

    //fetch all orders
    const fetchOrders = async () =>{
        const response = await fetch("http://localhost:8080/orders");
        const data = await response.json();
        setOrderList(data);
    }

    useEffect(()=>{
        fetchOrders();
    },[])

    // //fetch individual order
    // const fetchOrder = async (id) =>{
    //     const response = await fetch("http://localhost:8080/orders/"+ id);
    //     const data = await response.json();
    //     setCurrentOrder(data);
    //     console.log(data)
    // }

     const fetchTrucks = async (id) =>{
        const response = await fetch("http://localhost:8080/trucks");
        const data = await response.json();
        setTruckList(data);
        console.log(data)
    }

    useEffect(()=>{
        fetchTrucks();
    },[])

    const updateOrderStatus = async (orderId, truckId, status) => {
        const url = `http://localhost:8080/orders/updateOrderStatus?orderId=${orderId}&employeeId=${employeeId}&truckId=${truckId}&status=${status}`;
        const response = await fetch(url, {method: "PATCH",headers: {"Content-Type": "application/json"}})
        ;}

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage currentOrder={currentOrder} truckList={truckList}/>} key={1} />
                    <Route path="/OrderListPage" element={<OrderListPage updateOrderStatus={updateOrderStatus} orderList={orderList}/>} key={2} />
                    <Route path="/OrderPage/:id" element={<OrderPage updateOrderStatus={updateOrderStatus} orderList={orderList} currentOrder={currentOrder} setCurrentOrder={setCurrentOrder}/>} key={3} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Container;