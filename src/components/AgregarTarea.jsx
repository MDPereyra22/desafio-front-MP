
const AgregarTarea = ({tarea, handleSubmit, handleChange}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='agregarTarea'
                    value={tarea}
                    placeholder='¿Qué tarea quieres hacer?' 
                    onChange={handleChange}
                    />

                <button type="submit">Agregar tarea</button>
            </form>

        </div>
    )
};

export default AgregarTarea;