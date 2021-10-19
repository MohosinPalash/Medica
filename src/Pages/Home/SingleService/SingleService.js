import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleService.css'

const SingleService = (props) => {

    const { s_id, pic, icon, service, charge, intro } = props.service;
    return (
        <Col>
            <Card className="service-div">
                <Card.Img variant="top" className="" src={pic} />
                <Card.Body>
                    <Card.Img variant="top" className="service-icon" src={icon} />
                    <Card.Title className="service-title"><strong>{service}</strong></Card.Title>
                    <Card.Text className="service-intro">{intro}</Card.Text>
                    <Card.Text><strong>Charge: TK. {charge}</strong></Card.Text>
                </Card.Body>
                <Link to={`/serviceDetails/${s_id}`}><button className="details-button">See Details</button></Link>
            </Card>
        </Col>

    );
};

export default SingleService;