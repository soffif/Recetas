import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Contador from './contador';
import Calculadora from './calculadora';
import Recetas from './recetas';

class Principal extends Component{
state={
           
    muestraCalculadora: true,
    muestraRecetas:false,
    muestraContador:false
       
    }

   
         
            render(){
       
         
               
              if (this.state.muestraCalculadora) {
                return (
                    <React.Fragment>
                    <input type='button' value= 'Mostrar calculadora' onClick={(e) => this.muestraCalculadora()}/>
                    <input type='button' value= 'Mostrar Recetas' onClick={(e) => this.muestraRecetas()}/>
                    <input type='button' value= 'Mostrar contador' onClick={(e) => this.muestraContador()}/>
                        <br />
         <Calculadora/>
                    </React.Fragment>
   );
}

      if (this.state.muestraRecetas) {
                return (
                <React.Fragment>
                     <input type='button' value= 'Mostrar calculadora' onClick={(e) => this.muestraCalculadora()}/>
                    <input type='button' value= 'Mostrar Recetas' onClick={(e) => this.muestraRecetas()}/>
                    <input type='button' value= 'Mostrar contador' onClick={(e) => this.muestraContador()}/>
                        <br />
       <Recetas/>
                       </React.Fragment>
   );
}
  if (this.state.muestraContador) {
                return (
                     <React.Fragment>
                             <input type='button' value= 'Mostrar Calculadora' onClick={(e) => this.muestraCalculadora()}/>
                    <input type='button' value= 'Mostrar Recetas' onClick={(e) => this.muestraRecetas()}/>
                    <input type='button' value= 'Mostrar contador' onClick={(e) => this.muestraContador()}/>
                        <br />
        <Contador/>
                       </React.Fragment>
   );
}

            //  <Recetas/>
                   

}
       
      //    if(this.state.muestraCalculadora)
    //    {
           
      //        <Calculadora/>
//        }
//           if(this.state.muestraContador)
  //      {
           
    //        <Contador/>
      //  }  
           
             
   
   
  muestraContador()  {
     
    this.setState({muestraContador : true })
     this.setState({muestraRecetas : false })
      this.setState({muestraCalculadora : false })
     
     
  }
 muestraCalculadora()  {
     
       
    this.setState({muestraContador : false })
     this.setState({muestraRecetas : false })
      this.setState({muestraCalculadora : true })
     
  }
 muestraRecetas()  {
     
     
    this.setState({muestraContador : false })
     this.setState({muestraRecetas : true })
      this.setState({muestraCalculadora : false })
     
  }
}
    export default Principal;