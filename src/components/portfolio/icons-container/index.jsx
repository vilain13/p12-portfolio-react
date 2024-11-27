import React from 'react';
import PropTypes from 'prop-types';

const IconsContainer = ({ developmentIcons }) => {
  if (!developmentIcons || developmentIcons.length === 0) {
    return null;
  }

  return (
    <div className="development-icons">
      {developmentIcons.map((devImg, index) => (
        <img
          src={devImg}
          alt={`Development ${index}`}
          key={index}
          className="development-icon"
        />
      ))}
    </div>
  );
};

IconsContainer.propTypes = {
  developmentIcons: PropTypes.arrayOf(PropTypes.string),
};

export default IconsContainer;
