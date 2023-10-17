import React from "react";

const Details =({ details })=>{
  return (
    <div className="details">
        <h3 className="details-author">{details?.author}</h3>
        <h5 className="details-name">{details?.name}</h5>
        <div className="details-description">{details?.description}</div>
    </div>
  );
}

export default Details;
