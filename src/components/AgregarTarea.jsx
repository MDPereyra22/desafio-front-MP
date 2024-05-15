
const AgregarTarea = () => {
    return (
        <div>
            <form>
                <input
                    type='text'
                    name='agregarTarea'
                    value="tarea"
                    placeholder='¿Qué tarea quieres hacer?' />

                <button type="submit">Agregar tarea</button>
            </form>

        </div>
    )
};

export default AgregarTarea;