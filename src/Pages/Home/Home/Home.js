import React, { useState, useEffect } from 'react';
import services from '../../../AllData/services.json'
import SingleService from '../SingleService/SingleService';
import './Home.css'

const Home = () => {

    const [service, setSevice] = useState([]);

    useEffect(() => {
        setSevice(services);
        console.log(services);
    }, [service]);

    return (
        <div>
            <h1 style={{ fontWeight: 700 }}>OUR SERVICES</h1>
            <div className="service-container">

                {
                    service.map(service => <SingleService service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Home;