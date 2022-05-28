import React from 'react';
import PropTypes from 'prop-types';

ButtonWithIcon.propTypes = {
   rightIcon: PropTypes.node,
   bg: PropTypes.string,
   textColor: PropTypes.string,
   fontWeight: PropTypes.string,
   content: PropTypes.string,
   height: PropTypes.string,
   rounded: PropTypes.string,
   fontSize: PropTypes.string,
};

function ButtonWithIcon({
   rightIcon,
   bg,
   textColor,
   fontWeight,
   content,
   height,
   rounded = 'rounded-xl',
   fontSize,
}) {
   return (
      <button
         className={`flex items-center gap-4 bg-${bg} px-5 py-3 ${rounded} font-${fontWeight} text-${textColor} ${height} ${fontSize}`}
      >
         {content}
         {rightIcon}
      </button>
   );
}

export default ButtonWithIcon;
