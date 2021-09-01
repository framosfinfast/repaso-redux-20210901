import React, { useState } from 'react';

const Js = (datos) => {
    const [state, setState] = useState({ });

    const handlerClick = () => {
        const remplazo = { dato1: 6546546, dato2: "BuenaCabros" };
        const nuevoReemplazo = { dato3: false };

        setState({ ...remplazo, ...nuevoReemplazo })
    }

    let { dato1, dato2, dato3 } = state
    let nuevosDatos = {dato4: 4, ...datos }
    return (
        <div>
            <button onClick={handlerClick} >Cambiar</button>
            {JSON.stringify(state)} <br />
            {JSON.stringify(dato1)} <br />
            {JSON.stringify(dato2)} <br />
            {JSON.stringify(dato3)} <br />
            {JSON.stringify(nuevosDatos)} <br />
        </div>
    );
}

export default Js;
