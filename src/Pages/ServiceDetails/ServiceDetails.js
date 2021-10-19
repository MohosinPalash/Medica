import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css'
import services from '../../AllData/services.json'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [serv, setService] = useState();

    // console.log(typeof (serviceId))
    var srv = parseInt(serviceId);
    useEffect(() => {
        setService(services[srv - 1]);
        // console.log(services);
    }, [serv]);

    console.log(serv);

    let particularService = { ...serv };
    console.log(particularService)

    return (
        <Col>
            <Card className="service-details">
                <Card.Img variant="top" className="" src={particularService.pic} />
                <Card.Body>
                    <Card.Img variant="top" className="service-icon" src={particularService.icon} />
                    <Card.Title><h1 className="service-title"><strong>{particularService.service}</strong></h1></Card.Title>
                    <Card.Text>{particularService.intro}</Card.Text>
                    <Card.Text><strong>Charge: TK. {particularService.charge}</strong></Card.Text>
                    <h2>Overview</h2>
                    <p>{particularService.overview}</p>
                    <h2>Procedure</h2>
                    <p>{particularService.procedure}</p>
                </Card.Body>
                <Link to='/home'><button className="details-button">Back to Home</button></Link>
            </Card>
        </Col>
    );
};

export default ServiceDetails;