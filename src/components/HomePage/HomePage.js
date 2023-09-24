import { Link } from "react-router-dom";
import TruckStatus from "./TruckStatus";
import "./HomePage.css";

const HomePage = ({currentOrder, truckList}) => {
    
    return(<>
        <Link to="/OrderListPage">view order page</Link>
        <br/>
        {currentOrder? 
        (<Link to={`/OrderPage/${currentOrder.id}`}>view current order page </Link>): "no order on going yet"}
        <TruckStatus truckList={truckList}/>
        </>
    )
}
export default HomePage;