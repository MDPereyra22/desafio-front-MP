import {describe, it, expect, vi} from 'vitest' 
import { render, screen, fireEvent } from '@testing-library/react'
import AgregarTarea from '../src/components/AgregarTarea'

describe('AgregarTarea', () => {
  it('AgregarTarea muestra el input y el botón', () => {
    render(<AgregarTarea  />)    
    const inputElement = screen.getByRole('textbox', { name: /¿Qué tarea querés hacer? */i });
    expect(inputElement).toBeVisible();

    const buttonElement = screen.getByRole('button', { name: /AGREGAR TAREA/i });
    expect(buttonElement).toBeVisible();
    
  })

  it('Al hacerle click al botón, se invoca a la función handleSubmit', () => {
    const handleSubmitMock = vi.fn()
    
    render(<AgregarTarea handleSubmit={handleSubmitMock}  />)

    const buttonElement = screen.getByRole('button', { name: /AGREGAR TAREA/i });
    fireEvent.submit(buttonElement);

    expect(handleSubmitMock).toHaveBeenCalledTimes(1);
  })
})