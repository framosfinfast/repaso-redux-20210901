import { createStore, combineReducers } from "redux";
import { ExampleReducers } from "../reducers/exampleReducers";
import { OtroEjemploReducers } from "../reducers/otroEjemploReducers";
import { loadFromSessionStorage, saveToSessionStorage } from "./localStorage";

const reducers = combineReducers({
  example: ExampleReducers,
  otroEjemplo: OtroEjemploReducers
});

export const store = createStore(
  reducers,
  loadFromSessionStorage(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// listen for store changes and use saveToLocalStorage to
// save them to localStorage en cada cambio
store.subscribe(() => saveToSessionStorage(store.getState()));
//save on close o refresh
// window.onbeforeunload = () => saveToSessionStorage(store.getState())