import Tarea from "./Tarea";

const ListaDeTareas = ({tareas, handleTareaCompleta, contadorDePendientes}) =>{
    return(
        <div>
          
          <p>Tareas Pendientes: {contadorDePendientes}</p>
        {tareas.map((tarea, index)=> (
          <Tarea 
           key={index} 
           tarea={tarea} 
           index={index} 
           handleTareaCompleta={handleTareaCompleta}/>
        )
        )}

        </div>
    )
};

export default ListaDeTareas;