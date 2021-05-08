import React, { useEffect, useState } from 'react';
import data from '../../data/data.json'
import Cart from '../Cart/Cart';
import Courses from '../Courses/Courses';
import './Shop.css'
const Shop = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        setCourses(data)
    }, [])
    const [cart, setCart] = useState([]);
    const handleAddtoCart = (course) => {
        const newCart = [...cart, course]
        setCart(newCart)
    }
   
    return (
        <div className="d-flex justify-content-center">
            <div className=" courses-container mt-5">
             
                <div class="row">
                    {
                        courses.map(course => <Courses handleAddtoCart={handleAddtoCart} key={course.id}  course={course}></Courses>)
                    }
                    
                </div>
              
            </div>
            <Cart cart={cart}></Cart>
        </div>
    )
};

export default Shop;