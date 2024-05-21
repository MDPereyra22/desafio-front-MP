import {describe, it, expect} from 'vitest' 
import { render, screen } from '@testing-library/react'
import ListaDeTareas from '../src/components/ListaDeTareas'

describe('ListaDeTareas', () => {
  it('ListaDeTareas muestra las tareas', () => {
    render(<ListaDeTareas tareas={[{completa: false, nombre: "Tarea 1"}, {completa: false, nombre: "Tarea 2"}]} />)    
    // screen.debug(); // prints out the jsx in the App component unto the command line
    expect(screen.queryByText("Tarea 1")).toBeVisible()
    expect(screen.queryByText("Tarea 2")).toBeVisible()
  })

  it('ListaDeTareas cuenta correctamente tareas completadas', () => {
    render(<ListaDeTareas tareas={[{completa: true, nombre: "Tarea 1"}, {completa: true, nombre: "Tarea 2"}, {completa: false, nombre: "Tarea 3"}]} />)    
    expect(screen.queryByText("Tareas Pendientes: 1")).toBeVisible()
  })
})