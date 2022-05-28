import { format, parseISO } from 'date-fns';
import React from 'react';
import Avatar from '../../../../common/components/Avatar';
import AvatarContent from '../../../../common/components/AvatarContent';
import getAirlineByCode from '../../../../constants/airlineCode';
import getLocationByCode from '../../../../constants/locationCode';
import priceFormat from '../../../../utils/priceFormat';
import FlightDetailTime from '../FlightDetailTime';

function YourFlight({ flight }) {
   return (
      <div className='flex gap-4 w-full bg-white rounded-xl flex-col '>
         <div className='w-full px-5 py-6 border-b-2'>
            <h1 className='text-xl leading-none font-semibold'>YOUR FLIGHT</h1>
         </div>
         <div className='flex gap-5 flex-col w-full px-5'>
            <YourFlightDate
               startDate={flight.StartDate}
               endDate={flight.EndDate}
               startPoint={flight.StartPoint}
               endPoint={flight.EndPoint}
            />
            <YourFlightAirline airlineCode={flight.AirlineCode} />
            <FlightDetailTime
               startTime={flight.RelatedFlights[0].StartTime}
               endTime={flight.RelatedFlights[0].EndTime}
               startPoint={flight.StartPoint}
               endPoint={flight.EndPoint}
               flyDuration={flight.Duration}
            />
            <button className='w-full bg-[#EEEDFE] h-12 rounded-xl text-purple'>
               Change departure flight
            </button>
            <hr />
            <YourFlightBackDate
               startDate={flight.StartDate}
               endDate={flight.EndDate}
               startPoint={flight.StartPoint}
               endPoint={flight.EndPoint}
            />
         </div>
         <div className='w-full px-5 py-6 bg-[#f8f8f8] rounded-b-xl'>
            <YourFlightSubTotal
               priceAdult={flight.PriceAdult}
               taxAdult={flight.TaxAdult}
               chargeAdult={flight.ChargeAdult}
            />
         </div>
      </div>
   );
}

function YourFlightDate({ startDate, startPoint, endPoint }) {
   return (
      <div className='grid grid-cols-12 gap-4 items-center'>
         <AvatarContent bg='bg-gray-400'>
            <p className='leading-none text-white'>
               {format(parseISO(startDate), 'dd')}
            </p>
         </AvatarContent>
         <div className='col-span-10'>
            <div className='text-lg'>
               {format(parseISO(startDate), 'iii, dd MMM, yyyy')}
            </div>
            <div className='text-md font-bold'>{`${
               getLocationByCode(startPoint).city
            } - ${getLocationByCode(endPoint).city}`}</div>
         </div>
      </div>
   );
}

function YourFlightBackDate({ endDate, startPoint, endPoint }) {
   return (
      <div className='grid grid-cols-12 gap-4 items-center'>
         <AvatarContent bg='bg-purple'>
            <p className='leading-none text-white'>
               {format(parseISO(endDate), 'dd')}
            </p>
         </AvatarContent>
         <div className='col-span-10'>
            <div className='text-lg'>
               {format(parseISO(endDate), 'iii, dd MMM, yyyy')}
            </div>
            <div className='text-md font-bold'>{`${
               getLocationByCode(endPoint).city
            } - ${getLocationByCode(startPoint).city}`}</div>
         </div>
      </div>
   );
}

function YourFlightAirline({ airlineCode }) {
   return (
      <div className='grid grid-cols-12 gap-4 items-center'>
         <div className='col-span-2 w-full'>
            <Avatar src={getAirlineByCode(airlineCode).logo} />
         </div>
         <div className='col-span-10'>
            <div className='text-lg uppercase'>
               {getAirlineByCode(airlineCode).name}
            </div>
            <div className='text-md underline text-purple font-semibold'>
               Details
            </div>
         </div>
      </div>
   );
}

function YourFlightSubTotal({ priceAdult, taxAdult, chargeAdult }) {
   return (
      <div className='flex flex-col'>
         <div className='text-lg'>Subtotal</div>
         <div className='text-xl text-orange font-semibold'>
            {priceFormat(priceAdult + taxAdult + chargeAdult)} vnd
         </div>
      </div>
   );
}

export default YourFlight;
