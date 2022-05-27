import React from 'react';
import PropTypes from 'prop-types';

ButtonWithIcon.propTypes = {
   rightIcon: PropTypes.node,
   bg: PropTypes.string,
   textColor: PropTypes.string,
   fontWeight: PropTypes.string,
   content: PropTypes.string,
};

function ButtonWithIcon({ rightIcon, bg, textColor, fontWeight, content }) {
   return (
      <button
         className={`flex items-center gap-4 bg-${bg} px-5 py-3 rounded-xl font-${fontWeight} text-${textColor}`}
      >
         {content}
         {rightIcon}
      </button>
   );
}

export default ButtonWithIcon;
