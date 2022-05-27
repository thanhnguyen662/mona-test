import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function MainLayout(props) {
   return (
      <div>
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
}

export default MainLayout;
