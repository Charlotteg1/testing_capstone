import "./HomePage.css";

const Truck=({truck})=>{

    const calculateTruckFilled =()=>{
        let total=0;
        truck.orders.forEach((order)=>{
            order.products.forEach((product)=>{
                ((product.size="SMALL")?total+=3:(product.size="MEDIUM")?total+=7:total+=10)
        })}) 
        return total;
    }

    return(<>
        <p>{truck.id}</p>
        <label >Filled:</label>
        <meter className="truck-filled-meter" min="0" max={truck.maxCapacity} 
        low={truck.maxCapacity*0.4} high={truck.maxCapacity*0.7} optimum={truck.maxCapacity*0.8} value={calculateTruckFilled()}></meter>
    </>)
}
export default Truck;

