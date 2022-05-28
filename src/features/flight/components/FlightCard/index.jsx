import React, { Fragment, useState } from 'react';
import FlightCardFareTabArrive from './subComponents/FlightCardFareTabArrive';
import FlightCardFareTabContent from './subComponents/FlightCardFareTabContent';
import FlightCardHeader from './subComponents/FlightCardHeader';
import FlightCardMenu from './subComponents/FlightCardMenu';
import FlightCardTabContent from './subComponents/FlightCardTabContent';
import FlightDetailTabArrive from './subComponents/FlightDetailTabArrive';
import PropTypes from 'prop-types';

FlightCard.propTypes = {
   variant: PropTypes.string,
   flight: PropTypes.object.isRequired,
};

FlightCard.defaultProps = {
   variant: 'extend',
};

function FlightCard({ variant, flight }) {
   const menuContents = [
      {
         name: 'FLIGHT DETAIL',
         render: () => <FlightDetailMenu flight={flight} />,
      },
      {
         name: 'FARE INFO',
         render: () => <FlightFareInfo flight={flight} />,
      },
   ];

   const [selectedMenu, setSelectedMenu] = useState(0);

   const onClickMenuItem = (menuIndex) => {
      setSelectedMenu(menuIndex);
   };

   return (
      <div className='flex flex-col bg-white px-6 pt-6 pb-8 gap-8 rounded-xl'>
         <FlightCardHeader
            isSelectedFareInfo={Boolean(selectedMenu === 1)}
            airlineCode={flight.AirlineCode}
            freebag={flight.Freebag}
            priceAdult={flight.PriceAdult}
            taxAdult={flight.TaxAdult}
            chargeAdult={flight.ChargeAdult}
            startTime={flight.RelatedFlights[0].StartTime}
            endTime={flight.RelatedFlights[0].EndTime}
            startPoint={flight.StartPoint}
            endPoint={flight.EndPoint}
            flyDuration={flight.Duration}
         />
         <FlightCardMenu
            selectedMenu={selectedMenu}
            onClickMenuItem={onClickMenuItem}
            menuContents={menuContents}
         />
         {variant === 'extend' && (
            <>
               {menuContents.map(
                  (item, index) =>
                     Boolean(selectedMenu === index) && (
                        <Fragment key={index}>{item.render()}</Fragment>
                     )
               )}
            </>
         )}
      </div>
   );
}

function FlightDetailMenu({ flight }) {
   return (
      <div className='grid grid-cols-12 gap-12'>
         <div className='col-span-4'>
            <FlightDetailTabArrive
               startTime={flight.RelatedFlights[0].StartTime}
               endTime={flight.RelatedFlights[0].EndTime}
               startPoint={flight.StartPoint}
               endPoint={flight.EndPoint}
               flyDuration={flight.Duration}
            />
         </div>
         <div className='col-span-8'>
            <div className='flex flex-col'>
               <FlightCardTabContent
                  airlineCode={flight.AirlineCode}
                  flightNumber={flight.FlightNumber}
                  groupClass={flight.GroupClass}
                  freebag={flight.Freebag}
                  plane={flight.RelatedFlights[0].Plane}
               />
            </div>
         </div>
      </div>
   );
}

function FlightFareInfo({ flight }) {
   return (
      <div className='grid grid-cols-12 gap-12'>
         <div className='col-span-4'>
            <FlightCardFareTabArrive
               airlineCode={flight.AirlineCode}
               flightNumber={flight.FlightNumber}
               groupClass={flight.GroupClass}
               startPoint={flight.StartPoint}
               endPoint={flight.EndPoint}
               fareClass={flight.FareClass}
               isNotRefund={flight.NoRefund}
            />
         </div>
         <div className='col-span-8'>
            <div className='flex flex-col'>
               <FlightCardFareTabContent
                  priceAdult={flight.PriceAdult}
                  taxAdult={flight.TaxAdult}
                  chargeAdult={flight.ChargeAdult}
               />
            </div>
         </div>
      </div>
   );
}

export default FlightCard;
