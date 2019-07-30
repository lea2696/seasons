import React from "react"

const Loading = (props) =>{
    return (

    <div className="ui active inverted dimmer">
         <div className="ui text loader">{props.message}</div>
     </div>
    )
}

//Este es el valor que se coloca para definir los valores por defectos en caso de que se nos olvide pasar algun prop, es similar a usar un ||  pero mas elegante
Loading.defaultProps={
    message: "Cargando"
}
export default Loading