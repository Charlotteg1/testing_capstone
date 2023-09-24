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

     const fetchTrucks = async (id) =>{
        const response = await fetch("http://localhost:8080/trucks");
        const data = await response.json();
        setTruckList(data);
    }
    useEffect(()=>{
        fetchTrucks();
    },[])

    const updateOrderStatus = async (orderId,truckId, status) => {
        const url = `http://localhost:8080/orders/updateOrderStatus?orderId=${orderId}&employeeId=${employeeId}&truckId=${truckId}&status=${status}`;
        const response = await fetch(url, {method: "PATCH",headers: {"Content-Type": "application/json"}})
        console.log("changed status");
        fetchOrders()
    }

    const decreaseStockLevel = async () => {
        const url = `http://localhost:8080/products/decreaseStockLevel?orderId=${currentOrder.id}`;
        const response = await fetch(url, {method: "PATCH",headers: {"Content-Type": "application/json"}})
        console.log("decreased stock level");
        fetchOrders()
    }

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage currentOrder={currentOrder} truckList={truckList}/>} key={1} />
                    <Route path="/OrderListPage" element={<OrderListPage updateOrderStatus={updateOrderStatus} orderList={orderList} setCurrentOrder={setCurrentOrder} />} key={2} />
                    <Route path="/OrderPage/:id" element={<OrderPage decreaseStockLevel={decreaseStockLevel} updateOrderStatus={updateOrderStatus} orderList={orderList} currentOrder={currentOrder} setCurrentOrder={setCurrentOrder}/>} key={3} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Container;