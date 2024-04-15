import React from 'react';
import Formulario from '../components/Formulario';
import List from '../components/List';
import style from './app.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
     <Formulario />
     <List />
    </div>
  );
}

export default App;
