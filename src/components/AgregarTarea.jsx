import { TextField, Button, Box } from '@mui/material';


const AgregarTarea = ({ tarea, handleSubmit, handleChange }) => {
    return (
        <Box component='form' onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    id='tarea'
                    variant='outlined'
                    value={tarea}
                    type='text'
                    label='¿Qué tarea quieres hacer?'
                    onChange={handleChange}
                    required
                    // helperText='Ingrese una tarea'
                    // error={true}
                />

                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '8px' }}>
                    Agregar tarea
                </Button>
        </Box>
    )
};

export default AgregarTarea;