import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import {obtenerDiferenciaAnio} from '../helper';
import {calcularMarca,obtenerPlan} from '../helper';
import Resultado from './Resultado';

class App extends Component {
  state = {
    resultado: '',
    datos:{}
  }
  cotizarSeguros = (infoAuto) =>{
    console.log(infoAuto);
    //destructuring
    const {marca, plan, year} = infoAuto;
    
    let resultado = 2000;
    const diferencia = obtenerDiferenciaAnio(year);
    resultado -= ((diferencia * 3) * resultado)/ 100;
    resultado  = calcularMarca(marca)*resultado;
    let incrementoPlan = obtenerPlan(plan);
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    this.setState({
      resultado: resultado,
      datos:infoAuto
    });
  }
  render() {
    return (
      <div className="contenedor">
        <Header
          titulo="Cotizador de seguros"
        />
        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguros={this.cotizarSeguros}
          />
          <Resumen
            datos={this.state.datos}
            resultado={this.state.resultado}
          />
          
        </div>
      </div>
    );
  }
}

export default App;
