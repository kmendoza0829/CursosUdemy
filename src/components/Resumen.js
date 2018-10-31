import React,{Component} from 'react';
import {primeraMayuscula} from '../helper';
import Resultado from './Resultado';

class Resumen extends Component {
    
    mostrarResumen = () =>{
        const {marca, year, plan} = this.props.datos;
        if(!marca) return null;
        return (
            <div className="resumen">
                <h2>Resumen de Cotizacion</h2>
                <li>Marca Seleccionada: {primeraMayuscula(marca)}</li>
                <li>Plan Seleccionado: {plan}</li>
                <li>Año Seleccionado: {year}</li>
            </div>
        )
    }
    render() {
        
        return (
            <div>
                {this.mostrarResumen()}
                <Resultado
                    resultado={this.props.resultado}
                />
            </div>

        );
    }
}
export default Resumen;