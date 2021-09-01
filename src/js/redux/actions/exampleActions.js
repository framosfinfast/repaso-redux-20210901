import { types } from "../types/types";

export const ExampleSave = (data) => ({
    type: types.EXAMPLE_SAVE,
    payload: data
})

export const ExampleClean = () => ({
    type: types.EXAMPLE_CLEAN
})