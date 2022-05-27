import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './common/pages/HomePage';
import Flight from './features/flight';

function App() {
   return (
      <div className='App'>
         <Routes>
            <Route path='/flight/*' element={<Flight />} />
            <Route path='/' element={<HomePage />} />
         </Routes>
      </div>
   );
}

export default App;
