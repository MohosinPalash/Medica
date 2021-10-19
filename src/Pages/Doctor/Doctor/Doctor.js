import React, { useEffect, useState } from 'react';
import SingleDoctor from '../../Shared/SingleDoctor/SingleDoctor';
import doctors from '../../../AllData/doctors.json'
import foods from '../../../AllData/foods.json'
import './Doctor.css'
import Foods from '../Foods/Foods';

const Doctor = () => {
    const [doctor, setDoctor] = useState([]);
    const [food, setFood] = useState([]);

    useEffect(() => {
        setDoctor(doctors);
        console.log(doctors);
    }, [doctor]);

    useEffect(() => {
        setFood(foods);
        console.log(foods);
    }, [food]);


    return (
        <div>
            <h1 className="heading">OUR DOCTORS</h1>
            <div className="doctor-container">

                {
                    doctor.map(doctor => <SingleDoctor doctor={doctor}></SingleDoctor>)
                }
            </div>
            <h1 className="heading">RECOMMENDED HEALTHY FOODS</h1>
            <div className="doctor-container">
                {
                    food.map(food => <Foods food={food}></Foods>)
                }
            </div>
        </div>
    );
};

export default Doctor;