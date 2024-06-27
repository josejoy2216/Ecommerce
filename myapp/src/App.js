import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './component/Home';
import { Login } from './component/Login';
import { Navbar } from './component/Navbar';
import { Register } from './component/Register';
function Main() {

  
  return (

    <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
        </Routes>
      
    </div>
    
  );
}
function App(){
  return(
    <Router>
      <Main/>
    </Router>
  )
}
export default App;
