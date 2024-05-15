
const Tarea = ({ tarea, index, handleTareaCompleta }) => {
    return (

        <div>
            <span >
                <label
                    key={index}
                    style={{ textDecoration: tarea.completa ? 'line-through' : 'none' }}
                    onClick={() => handleTareaCompleta(index)}
                >
                    {tarea.nombre}
                </label>
            </span>
        </div>

    )
}

export default Tarea;