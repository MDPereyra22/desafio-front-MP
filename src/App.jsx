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
      <AgregarTarea tarea={tarea} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <ListaDeTareas tareas={tareas} handleTareaCompleta={handleTareaCompleta}/>
    </div>
  )
}

export default App
