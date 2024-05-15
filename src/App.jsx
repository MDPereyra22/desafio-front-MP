import { Container, Typography, TextField, Button } from '@mui/material';
import './App.css'
import AgregarTarea from './components/AgregarTarea';
import { useState } from 'react';
import ListaDeTareas from './components/ListaDeTareas';


function App() {

  return (
    <div>
      <AgregarTarea />
      <ListaDeTareas/>
    </div>
  )
}

export default App
