import React, {Fragment, useState} from 'react'
import { calcularTotal } from '../helpers';

const Formulario = (props) => {

  const { cantidad,
          guardarCantidad,
          plazo,
          guardarplazo,
          guardarTotal, 
          guardarCangando } = props;
  // definir useState
  const [error, guardarError] = useState(false);

  // cuando el usuario hace submit
  const calcularPrestamo = (e) => {
    e.preventDefault();

    // validar
    if (cantidad === 0 || plazo === "") {
      guardarError(true);
      return;
    }

    // eliminar el error previo
    guardarError(false);


    // Habilitar spinner
    guardarCangando(true);

    setTimeout( () => { 
    // realizar cotizacion
    const total = calcularTotal(cantidad, plazo);
 
    // Una vex calculado guardar el total
    guardarTotal(total);
    

    // Deshabilitar el spinner
    guardarCangando(false)
  }, 3000);

  }

  return (
    <Fragment>
      <form onSubmit={calcularPrestamo}>
        <div className="row">
          <label>Cantidad Prestamo</label>
          <input
            className="u-full-width"
            type="number"
            placeholder="Ejemplo: 3000"
            onChange={(e) => guardarCantidad(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label>Plazo para pagar</label>
          <select
            className="u-full-width"
            onChange={(e) => guardarplazo(parseInt(e.target.value))}
          >
            <option value="">Seleccionar</option>
            <option value="3">3 meses</option>
            <option value="6">6 meses</option>
            <option value="12">12 meses</option>
            <option value="24">24 meses</option>
          </select>
        </div>
        <div>
          <input
            type="submit"
            value="calcular"
            className="button-primary u-full-width"
          />
        </div>
      </form>

        { (error) ? <p className="error">Todos los campos son obligatorios</p> : null }
      
    </Fragment>
  );
};
 
export default Formulario
