import './App.css'
import AgregarTarea from './components/AgregarTarea';
import { useState } from 'react';
import ListaDeTareas from './components/ListaDeTareas';


function App() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState('');


const handleChange =(event)=>{
  setTarea(event.target.value)
}

const handleSubmit = (event) =>{
  event.preventDefault();
  if(tarea.trim() !== ''){
    setTareas([...tareas, {nombre: tarea, completa: false}])
    setTarea('');
    
  }
}

const handleTareaCompleta = (index) =>{
  const tareasAcutualizadas = [...tareas]
  tareasAcutualizadas[index] = {...tareasAcutualizadas[index], completa: !tareasAcutualizadas[index].completa}
  setTareas(tareasAcutualizadas);
}

  return (
    <div>
      <h1>Lista de tareas</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder='Escribe una tarea'
        value={tarea} 
        onChange={handleChange}
        />
        <button type='submit' >Agregar tarea</button>
      </form>
      <ul>
        {tareas.map((tarea, index)=> (
          <li key={index}
              style={{ textDecoration: tarea.completa ? 'line-through' : 'none' }}
              onClick={() => handleTareaCompleta(index)}
          >{tarea.nombre}</li>
        )
        )}
      </ul>
    </div>
  )
}

export default App
