import { Link } from "react-router-dom";

const HomePage = ({currentOrder}) => {

    return(<>
        <Link to="/OrderListPage">view order page</Link>
        <br/>
        {currentOrder? 
        (<Link to={`/OrderPage/${currentOrder.id}`}>view current order page </Link>): "no order on going yet"}
        </>
    )
}
export default HomePage;