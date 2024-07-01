import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import './css/dashboard.css';

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <br />
            <Sidebar />
          </div>
          <div className="col-md-9">
            <br />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
