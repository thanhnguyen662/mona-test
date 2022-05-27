import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './common/layouts/MainLayout';
import HomePage from './common/pages/HomePage';
import Flight from './features/flight';

function App() {
   return (
      <div className='App'>
         <Routes>
            <Route element={<MainLayout />}>
               <Route path='/flight/*' element={<Flight />} />
            </Route>
            <Route path='/' element={<HomePage />} />
         </Routes>
      </div>
   );
}

export default App;
