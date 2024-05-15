import Tarea from "./Tarea";

const ListaDeTareas = ({tareas, handleTareaCompleta}) =>{
    return(
        <div>
          
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