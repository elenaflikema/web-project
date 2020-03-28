import React,{ useEffect, useState } from 'react';

function ItemDetail({match}): React.ReactNode {

    useEffect(() => {
        fetchData();
    }, []);

    const [ item, setItem ] = useState({});

    const fetchData = async () => {
        const data = await fetch('/api/hello');
        const itemDetails = await data.json();
        setItem(itemDetails)
    };

    console.info(item)
    return (
        <div>
            {match.params.id}&nbsp;{item.express}
        </div>
    );
}

export default ItemDetail;
