import React from "react";
import "../cssStyling/card.css"
const Card = (props) => {
    return (
      <div className="card-container">    
        <div className="card">
          <img src={props.source} className="card-image" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-description">{props.description}</p>
            <p className="card-price">only at {props.price}</p>
            <a href="hhhh" className="buy-now-link">Buy Now</a>
          </div>
        </div>
      </div>
       
    )
}

export default Card;
// style={{ width: '18rem' }}