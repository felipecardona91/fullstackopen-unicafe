import React from 'react'
import ReactDOM from 'react-dom'

const Display = ({ prop, name, sufix }) =>  
    <div>
      <p>{name} {prop} {sufix}</p>   {/*prop != 0 ? sufix : null (esto es para hacerlo de tal manera que quiera que no se muestre el sufijo de % si no cuando haya algún valor, sí sufijo es diferente de cero el valor es sufix, sí no es null. operador ternario, es un If corto. */}
    </div>


export default Display