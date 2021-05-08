
import React from 'react';
import logo from '../../images/logo.png';
import './Navigation.css'
const Navigation = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light me-3 ms-3">
    
      <div>
              <a class="navbar-brand" href="#">
                <img width="50" height="50" src={logo} alt="" />Online Course
              </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      </div>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <a class="nav-item nav-link " href="#home">Home</a>
          <a class="nav-item nav-link" href="#shop">Shop</a>
          <a class="nav-item nav-link" href="#order">Order Sumery</a>
          
        </div>
        <button className="btn btn-success pe-4 ps-4">login</button>
      </div>
      
    </nav>
    
    </>
  );
};

export default Navigation;