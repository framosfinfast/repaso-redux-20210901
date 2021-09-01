import { types } from "../types/types";

const INIT_STATE = {
    saved: false,
    holaMundo: ""
};

export const ExampleReducers = (state = INIT_STATE, action) => {
    switch (action.type) {
        case types.EXAMPLE_SAVE: {
            //Guardamos los nuevos datos necesarios para la sesion
            console.log(action.payload)
            return {
                ...state,
                saved: true,
                ...action.payload,
            };
        }
        case types.EXAMPLE_CLEAN: {
            return INIT_STATE;
        }
        default:
            return state;
    }
};
