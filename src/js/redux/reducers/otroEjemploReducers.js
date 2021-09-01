import { types } from "../types/types";

const INIT_STATE = {
        otroEjemplo: false,
        holaMundo: "Con valor por defecto"
};

export const OtroEjemploReducers = (state = INIT_STATE, action) => {
    switch (action.type) {
        //No se usó pero tiene la misma lógica que el anterior
        case types.OTRO_EJEMPLO_SAVE: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return state;
    }
};
