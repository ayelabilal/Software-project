import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Navbar at the top */}
      <div style={{ flexShrink: 0 }}>
      <Navbar/>
      </div>

      {/* Main content area with Sidebar and Outlet */}
      <div style={{ display: 'flex', flexGrow: 1 }}>
        {/* Sidebar on the left */}
        
        <div style={{ width: '350px', flexShrink: 0 }}>
          <Sidebar />
        </div>

        {/* Outlet for main content, expanding to fill the remaining space */}
        <div style={{ flexGrow: 1, padding: '20px', overflowY: 'auto' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
