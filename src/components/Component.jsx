import React from 'react';
import { useDispatch } from 'react-redux';
import { ExampleClean, ExampleSave } from '../js/redux/actions/exampleActions';


const Component = () => {
    const dispatch = useDispatch();

    const guardar = () => {
        const obt = { holaMundo: "Example", data1: { holamundo2: "Otros datos" }, data2: [1, 2, 3] }
        dispatch(ExampleSave(obt))
    }

    return (
        <div style={{ backgroundColor: "red" }}>
            <button onClick={guardar}>Guardar</button>
            <button onClick={() => dispatch(ExampleClean())}>Clean</button>
        </div>
    );
}

export default Component;
