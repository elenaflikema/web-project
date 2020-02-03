import React,{ useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
function Shop() {

    useEffect(() => {
        fetchData();
    }, []);

    const [ items, setItems ] = useState([]);

    const fetchData = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();
        console.info(body);
        setItems([body]);
    };

console.info(items[0])
    //console.info(items[0])
    return (
        <div>
            {
                items.map((item, index) => (
                    <Link to={`/shop/${index}`}>{index}</Link>
                    )
                )
            }
        </div>
    );
}

export default Shop;
