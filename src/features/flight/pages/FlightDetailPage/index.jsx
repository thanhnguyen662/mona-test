import React, { useEffect, useState } from 'react';
import flightApi from '../../../../api/flightApi';
import Spinner from '../../../../common/components/Spinner';
import FlightCard from '../../components/FlightCard';
import FlightDetailFilter from '../../components/FlightDetailFilter';
import FlightDetailHeader from '../../components/FlightDetailHeader';
import YourFlight from '../../components/YourFlight';

FlightDetailPage.propTypes = {};

function FlightDetailPage(props) {
   const [flightList, setFlightList] = useState([]);

   useEffect(() => {
      const getFlightInDb = async () => {
         try {
            const flightResponse = await flightApi.getFlightData();
            setFlightList(flightResponse.Flights);
         } catch (error) {
            console.log(error);
         }
      };
      getFlightInDb();
   }, []);

   return (
      <div>
         <div className='flex items-center h-24 bg-white'>
            <div className='md:container md:mx-auto'>
               <FlightDetailHeader />
            </div>
         </div>
         <div className='md:container md:mx-auto bg-[#f4f2f9] mt-5'>
            {flightList.length === 0 ? (
               <div className='flex justify-center items-center w-full h-[70vh]'>
                  <Spinner />
               </div>
            ) : (
               <div className='grid grid-cols-4 gap-4'>
                  <div className='col-span-3'>
                     <div className='flex gap-4 flex-col'>
                        <div className='flex justify-end'>
                           <FlightDetailFilter />
                        </div>
                        <div className='flex flex-col gap-5'>
                           {flightList.map((flight, index) => (
                              <FlightCard key={index} flight={flight} />
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className='col-span-1'>
                     <YourFlight flight={flightList[0]} />
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}

export default FlightDetailPage;
