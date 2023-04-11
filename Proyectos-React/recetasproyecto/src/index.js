import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Recetas from './components/recetas';
import Usuario from './components/usuario';
import reportWebVitals from './reportWebVitals';
import Principal from './components/pagPrincipal';


ReactDOM.render(

  <React.StrictMode>
    
  
       <Principal/>
     


    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
