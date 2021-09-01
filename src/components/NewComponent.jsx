import React from 'react';
import { useSelector } from 'react-redux';

const NewComponent = () => {
    const {example} = useSelector(store => store);
    return (
        <div style={{backgroundColor: "green"}}>
            {JSON.stringify(example)}
        </div>
    );
}

export default NewComponent;
