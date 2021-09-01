import React from 'react';
import { useSelector } from 'react-redux';

const OtherComponent = () => {
    const {example, otroEjemplo} = useSelector(store => store);
    
    return (
        <>
        <div style={{backgroundColor: "yellow"}}>
            {JSON.stringify(example)}
        </div>
        <div style={{backgroundColor: "blued"}}>
            {JSON.stringify(otroEjemplo)}
        </div>
        </>
    );
}

export default OtherComponent;
