import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function MainLayout(props) {
   return (
      <div>
         <Header />
         <div className='bg-[#f4f2f9]'>
            <Outlet />
         </div>
         <Footer />
      </div>
   );
}

export default MainLayout;
