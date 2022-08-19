import React from "react";

function Card(props) {
  const { item } = props;
  return (
        <div className="col-2">
      <div className="card mt-5">
        <img src={`${item.imageUrl}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6 className="">
            {item.headline.substring(0, 50) + "..."}
          </h6>
          <p className="card-text">{item.primaryText.substring(0, 50) + "..."}</p>
        </div>
      </div>
    </div>

  );
}

export default Card;
