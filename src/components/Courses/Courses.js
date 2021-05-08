import React from 'react';
import './Courses.css'
const Courses = (props) => {
  const {img, title, price} = props.course;
  console.log(props)
  return(
          <div className="col-md-4">
            <div className="card mb-5 card-container">
              <div className="card-img">
              <img className="card-img-top" src={img} alt="add source add images" />
              </div>
              
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae quam velit fuga.</p>
                <p></p>
              </div>
             
              <div className="card-footer d-flex justify-content-between">
                <h2 className="text-success">${price}</h2>
               <button onClick={() => props.handleAddtoCart(props.course)} className="btn btn-primary">Enroll Now</button>
              </div>
            </div>
            
          </div>
  );
};

export default Courses;