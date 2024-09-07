import React from 'react';
import './style.css'

const Card = ({ title, subTitle, description }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{title}</h2>
        {subTitle && <h4>{subTitle}</h4>}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
