import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Food.css'
const Foods = (props) => {
    const { image, item, calorie, consume } = props.food;
    return (
        <Col>
            <Card className="service-div">
                <Card.Img variant="top" className="" src={image} />
                <Card.Body>
                    <Card.Title><strong>{item}</strong></Card.Title>
                    <Card.Text><strong>Calorie (100 gm): {calorie} cal.</strong></Card.Text>
                    <Card.Text><strong>Daily Consume: {consume} gm</strong></Card.Text>
                </Card.Body>
                <button className="details-button">See Details</button>
            </Card>
        </Col>
    );
};

export default Foods;