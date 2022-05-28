import React from 'react';
import PropTypes from 'prop-types';

FlightCardMenu.propTypes = {
   selectedMenu: PropTypes.number,
   onClickMenuItem: PropTypes.func,
   menuContents: PropTypes.array.isRequired,
};

FlightCardMenu.defaultProps = {
   selectedMenu: 0,
   onClickMenuItem: null,
};

function FlightCardMenu({ selectedMenu, onClickMenuItem, menuContents }) {
   return (
      <div className='flex items-center gap-10 font-semibold'>
         {menuContents.map((item, index) => {
            return (
               <MenuItem
                  key={index}
                  content={item.name}
                  isSelected={Boolean(selectedMenu === index)}
                  index={index}
                  onClickMenuItem={onClickMenuItem}
               />
            );
         })}
         <hr className='flex-auto' />
      </div>
   );
}

function MenuItem({ isSelected, content, onClickMenuItem, index }) {
   const selectedStyle = isSelected ? 'underline text-purple' : 'text-gray-400';

   return (
      <div
         className={`w-fit ${selectedStyle} cursor-pointer`}
         onClick={() => onClickMenuItem(index)}
      >
         {content}
      </div>
   );
}

export default FlightCardMenu;
