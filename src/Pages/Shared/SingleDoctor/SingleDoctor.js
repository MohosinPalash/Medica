import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleDoctor.css'
const SingleDoctor = (props) => {
    const { dp, name, branch, schedule } = props.doctor;
    return (
        <Col>
            <Card className="doctor-div">
                <Card.Img variant="top" className="doctor-cover" src={dp} />
                <Card.Body>
                    <Card.Title className="doctor-title"><strong>{name}</strong></Card.Title>
                    <Card.Text><strong>Branch: {branch}</strong></Card.Text>
                    <Card.Text><strong>Schedule: {schedule}</strong></Card.Text>
                </Card.Body>
                <button className="details-button">Appointment</button>
            </Card>
        </Col>
    );
};

export default SingleDoctor;