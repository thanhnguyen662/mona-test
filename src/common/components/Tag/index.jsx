import React from 'react';
import PropTypes from 'prop-types';

Tag.propTypes = {
   children: PropTypes.node,
};

function Tag({ children }) {
   return <div className='px-2 py-1 bg-[#EEEDFE] rounded-full'>{children}</div>;
}

export default Tag;
