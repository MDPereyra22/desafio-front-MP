import {describe, it, expect} from 'vitest' 
import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('App', () => {
  it('App muestra el título', () => {
    render(<App />)    
    // screen.debug(); // prints out the jsx in the App component unto the command line
    expect(screen.queryByText("Lista de tareas")).toBeVisible()
  })
})