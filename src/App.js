import { Provider } from 'react-redux';
import { store } from './js/redux/store/store';
import './App.css';
import Component from './components/Component';
import OtherComponent from './components/OtherComponent';
import NewComponent from './components/NewComponent';
import Js from './components/Js';


function App() {
  const datos = {dato4: "Nada", dato5: "Prueba"}
  //Provider es lo que da acceso al storage de redux a todos los children dentro de él
  return (
    <Provider store={store}>
      <Component />
      <OtherComponent />
      <NewComponent/>
      <Js {...datos}/>
    </Provider>
  );
}

export default App;
