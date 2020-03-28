import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './css/Main.css';

const LessonCard = ({ src, id, index}) => {

    useEffect(() => {
        fetchData();
    }, []);


    const [item, setItem] = useState({});

    const fetchData = async () => {
        const response = await fetch(`/subscribers/${id}`);
        const item = await response.json();
        setItem({...item});
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <div>{item.subscribeDate}</div>
                <Card.Title>Lesson № {index + 1}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    <strong>{item.name}</strong>
                </Card.Text>
                <Button variant="primary"><Link className="nav-links" to={`/lessons/${id}`}>Watch</Link></Button>
            </Card.Body>
        </Card>
    );
};

LessonCard.propTypes = {
    src: PropTypes.string,
    id: PropTypes.string,
    index: PropTypes.number
};

LessonCard.defaultProps = {
    src: 'logo192.png',
    id: '',
    index: 0
};

export default LessonCard;
