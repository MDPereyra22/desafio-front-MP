/* eslint-disable react/prop-types */
import { TextField, Button, Box } from '@mui/material';


const AgregarTarea = ({ tarea, handleSubmit, handleChange }) => {
    return (
        <Box component='form' onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    multiline
                    id='tarea'
                    variant='outlined'
                    value={tarea}
                    type="text"
                    label='¿Qué tarea querés hacer?'
                    onChange={handleChange}
                    required                    
                />

                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '8px' }}>
                    Agregar tarea
                </Button> 
        </Box>
    )
};

export default AgregarTarea;