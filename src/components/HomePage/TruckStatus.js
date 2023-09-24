import Truck from "./Truck";
import "./HomePage.css";
import Modal from "./Modal";

const TruckStatus=({truckList})=>{

    const mappedTrucks = truckList.map((truck)=>{
        return(
        <div className="truck-filled-bar">
            <Truck truck={truck} key={truck.id}/>
        </div>)
    })

  
    return(<div className="trucks">
        {mappedTrucks}
        <Modal/>
    </div>)
}
export default TruckStatus;