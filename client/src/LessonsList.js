import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { increment } from './redux/actions';

import './css/Main.scss';
import { useSelector, useDispatch } from "react-redux";

import LessonCard from './LessonCard';

function LessonsList() {

    useEffect(() => {
        fetchData();
    }, []);

    const [ items, setItems ] = useState([]);
    const dispatch = useDispatch();

    const fetchData = async () => {
        const response = await fetch('/subscribers');
        const items = await response.json();
        setItems(items);
    };

    return (
        <Container className="block">
            {
                items.map((item, index) => {
                    return (<LessonCard id={item._id} index={index} key={index}/>);
                })
            }
        </Container>
    );
}

export default LessonsList;
