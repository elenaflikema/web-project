import React,{ useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

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
        <div>
            {
                items.map((item, index) => {
                    console.info(item)
                    return (
                        <div>
                            <Link to={`/users/${item._id}`}>
                                {item.name}&nbsp;{item._id}
                            </Link>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default UsersList;
