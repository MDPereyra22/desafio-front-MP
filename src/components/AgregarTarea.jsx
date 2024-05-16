import { TextField, Button, Box } from '@mui/material';


const AgregarTarea = ({ tarea, handleSubmit, handleChange }) => {
    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    variant='outlined'
                    value={tarea}
                    label='¿Qué tarea quieres hacer?'
                    onChange={handleChange}
                />

                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '8px' }}>
                    Agregar tarea
                </Button>
            </form>

        </Box>
    )
};

export default AgregarTarea;