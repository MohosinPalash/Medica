import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleBlog.css'

const SingleBlog = (props) => {
    const { title, banner, date, area, article } = props.blog;
    return (
        <Col>
            <Card className="blog-div">
                <div>
                    <div >
                        <Card.Img variant="top" className="blog-cover" src={banner} />
                    </div>
                    <div>
                        <Card.Body>
                            <Card.Title className="blog-title"><strong>{title}</strong></Card.Title>
                            <Card.Text><strong>Date: {date} | {area}</strong></Card.Text>
                            <Card.Text className="blog-article">{article}</Card.Text>
                        </Card.Body>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default SingleBlog;