import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
class Calculadora extends Component{

  state = { /* Lugar en el que se colocan las variables */
    count:0,
    numeroPantallita:'',
    Operacion:'', 
    Operando1:0,
    Operando2:0,
    Resultado:0
  }
  render() {
    return (<React.Fragment>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td colspan='4'>
              <input type="text" id="numeroPantallita" value={this.state.numeroPantallita} />
            </td>
          </tr>

          <tr>
            <td colspan='4'>
              <input type="button" value="/" id="div" className='btn btn-primary' onClick={(e) => this.guardaOperacion('div')}/>
            </td>
          </tr>

          <tr>
            <td>
              <input type="button" value="1" id="1" className='btn btn-primary' onClick={(e) => this.muestraEsteNumero('1')}/>
            </td>
            <td>
              <input type="button" value="2" id="2" className='btn btn-primary' onClick={(e) => this.muestraEsteNumero('2')}/>
            </td>
            <td>
              <input type="button" value="3" id="3" className='btn btn-primary' onClick={(e) => this.muestraEsteNumero('3')}/>
            </td>
            <td>
              <input type="button" value="*" id="multip"  className='btn btn-primary' onClick={(e) => this.guardaOperacion('multip')}/>
            </td>
          </tr>

          <tr>
            <td>
              <input type="button" value="4" id="4" className='btn btn-primary' onClick={(e) => this.muestraEsteNumero('4')}/>
            </td>
            <td>
              <input type="button" value="5" id="5" className='btn btn-primary' onClick={(e) => this.muestraEsteNumero('5')}/>
            </td>
            <td>
              <input type="button" value="6" id="6" className='btn btn-primary' onClick={(e) => this.muestraEsteNumero('6')}/>
            </td>
            <td>
              <input type="button" value="-" id="menos"  className='btn btn-primary' onClick={(e) => this.guardaOperacion('menos')}/>
            </td>
          </tr>

          <tr>
            <td>
              <input type="button" value="7" id="7" className='btn btn-primary' onClick={(e) => this.muestraEsteNumero('7')}/>
            </td>
            <td>
              <input type="button" value="8" id="8" className='btn btn-primary' onClick={(e) => this.muestraEsteNumero('8')}/>
            </td>
            <td>
              <input type="button" value="9" id="9" className='btn btn-primary' onClick={(e) => this.muestraEsteNumero('9')}/>
            </td>
            <td>
              <input type="button" value="+" id="mas"  className='btn btn-primary' onClick={(e) => this.guardaOperacion('mas')}/>
            </td>
          </tr>

          <td colspan='3'>
              <input type="button" value="0" id="0" className='btn btn-primary' onClick={(e) => this.muestraEsteNumero('0')}/>
            </td>
          <tr>

            <td colspan='4'>
              <input type="button" value="=" id="igual" className='btn btn-primary' onClick={(e) => this.ResultadoOp()}/>
            </td>
          </tr>
        </tbody>
      </table>
      </React.Fragment>)};

// La siguiente función agrega el número a la pantalla y lo muestra en la calculadora
  muestraEsteNumero(id){
    this.setState({numeroPantallita: this.state.numeroPantallita + id }) /* Suma el numero de la pantalla */
    console.log(id)
  }
  // La siguiente función guarda la operación realizada y los operandos necesarios para realizarla
  guardaOperacion(Operacion){
    this.setState({Operando1: parseInt(this.state.numeroPantallita) })
    this.setState({ Operacion:Operacion })
    this.setState({ numeroPantallita:'' })
  }
  // La siguiente función calcula el resultado de la operación solicitada y lo muestra en la pantalla
  ResultadoOp(){
    switch(this.state.Operacion){ 
      case 'mas':
          this.state.Resultado=(this.state.Operando1 + parseInt(this.state.numeroPantallita))
          this.setState({numeroPantallita:String(this.state.Resultado)})
          break;
      case 'menos':
          this.state.Resultado=(this.state.Operando1 - parseInt(this.state.numeroPantallita))
          this.setState({numeroPantallita:String(this.state.Resultado)})
          break;
      case 'multip':
          this.state.Resultado=(this.state.Operando1 * parseInt(this.state.numeroPantallita))
          this.setState({numeroPantallita:String(this.state.Resultado)})
          break;
      case 'div':
          this.state.Resultado=(this.state.Operando1 / parseInt(this.state.numeroPantallita))
          this.setState({numeroPantallita:String(this.state.Resultado)})
          break;
  }
}

  }

  // Se exporta el componente "Calculadora" para poder ser utilizado en otros archivos
  export default Calculadora;
