import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Home } from './component/Home';
import { Login } from './component/Login';
import { Navbar } from './component/Navbar';
import { Register } from './component/Register';
import Singlecard from './component/Singlecard';
import DashboardLayout from './component/dashboard/DashboardLayout';
import Upload from './component/dashboard/Upload';
import Manage from './component/dashboard/Manage';

import "./component/assets/css/bgtxt.css"
function Main() {

  const location = useLocation()
  const hideroutes = ["/login" , "/register"]
  
  return (

    <div>
        {!hideroutes.includes(location.pathname) && <Navbar/>}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Singlecard/:id" element={<Singlecard/>}/>
          <Route path="/admin/dashboard" element={<DashboardLayout/>}>
            <Route path="manage" element={<Manage/>}/>
            <Route path="upload" element={<Upload/>}/>
          </Route>
        </Routes>
      
    </div>
    
  );
}
function App(){
  return(
    <div className="main-container">
      <Router>
        <Main />
      </Router>
    </div>
  )
}
export default App;
