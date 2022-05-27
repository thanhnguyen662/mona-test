import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FlightDetailPage from './pages/FlightDetailPage';

function Flight(props) {
   return (
      <Routes>
         <Route path=':flightId' element={<FlightDetailPage />} />
      </Routes>
   );
}

export default Flight;
