import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App'; /*Puedo agregar imports y cerrarlos en la etiqueta de abajo */
import Calculadora from './components/calculadora.jsx';
import Counter from './components/contador.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(

  <React.StrictMode>
    
  <table>
    <tr>
      <td>
       <Calculadora/>
      </td>
      <td>
       <Counter/>
      </td>
    </tr>
  </table>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
