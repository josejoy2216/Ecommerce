import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider'; // Assuming correct path to AuthProvider
import "./assets/css/bgtxt.css";
import logo from './assets/img/logo.png';

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout().then(() => {
      console.log("logged out");
    });
  };

  return (
    <nav className="navbar navbg navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">  <img src={logo} className="logo" alt="Logo" /> </Link>
        <h3>Book Nook</h3>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           
            
          </ul>
          {user && (
            <>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Books</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#">Author</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About us</a>
              </li> 
            </ul>
            <div className="d-flex">
              <span className="m-2">{user.email}</span>
              <button className="btn btn-outline-danger" onClick={handleLogOut}>Logout</button>
            </div>
            </>
          )}
          {!user && (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};
