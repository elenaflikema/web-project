import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

function UsersList() {

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
        <Container>
            {
                items.map((item, index) => {
                    return (
                        <Row>
                            <Link to={`/users/${item._id}`}>
                                {item.name}&nbsp;{item._id}
                            </Link>
                        </Row>
                    );
                })
            }
        </Container>
    );
}

export default UsersList;
