import React from 'react';
import { render } from '@testing-library/react';
import ListaDeTareas from './ListaDeTareas';

test('renderiza la lista de tareas correctamente', () => {
  const tareas = [
    { nombre: 'Tarea 1' },
    { nombre: 'Tarea 2' },
  ];
  render(<ListaDeTareas tareas={tareas} />);
});