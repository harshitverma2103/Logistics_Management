import React from "react";
import deleteIcon from "../../assets/delete-icon.png";
import "./style.css";

const Card = ({ title, subTitle, description, onDelete }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
        <p>{description}</p>
      </div>
      {onDelete && (
        <button className="card-delete-btn" onClick={onDelete}>
          <img src={deleteIcon} alt="Delete" className="card-delete-icon" />
        </button>
      )}
    </div>
  );
};

export default Card;
