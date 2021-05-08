import React from 'react';
import './Orderd.css'
const Orderd = (props) => {
    const {title, price, img} = props.added
    return (
        <div className="card mt-3 p-3 orderd-list">
            <img width='150px' src={img} alt="" />
            <h5>${price}</h5>
            <h5>{title}</h5>
      </div>
    );
};

export default Orderd;