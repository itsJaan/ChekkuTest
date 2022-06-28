import {
BrowserRouter as Router,
    Route,
    Routes,
    Navigate} from "react-router-dom";
import Login from './login/Login';
import Dashboard from './dashboard/Dashboard';
const RoutingComponent:React.FC = () =>{
    return(
        <Router>
            <Routes>
              <Route path="/login" element={<Login/>} />
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/" element={<Navigate replace to="/login" />}/>
            </Routes>
      </Router> 
    );
};
export default RoutingComponent;