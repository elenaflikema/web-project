import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import './css/Main.css';

function LessonsList() {

    useEffect(() => {
        fetchData();
    }, []);

    const [ items, setItems ] = useState([]);

    const fetchData = async () => {
        const response = await fetch('/subscribers');
        const items = await response.json();
        setItems(items);
    };

    return (
        <Container className="block">
            {
                items.map((item, index) => {
                    return (
                        <Row>
                            <Col xs={2}>
                                Lesson № {index+1}
                            </Col>
                            <Col className="nav-links">
                                <Link className="nav-links" to={`/lessons/${item._id}`}>
                                    {item.name}&nbsp;{item._id}
                                </Link>
                            </Col>
                        </Row>
                    );
                })
            }
        </Container>
    );
}

export default LessonsList;
