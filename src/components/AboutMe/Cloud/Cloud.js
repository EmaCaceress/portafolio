import React from 'react';
import './Cloud.css';

const Cloud = ({ iconClass, top, left, color = '#61dafb'}) => {
  return (
    <div className="cloud" style={{ top, left}}>
      <i className={iconClass}  style={{ color}}></i>
    </div>
  );
};

export default Cloud;
