/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tarea from "./Tarea";

const ListaDeTareas = ({ tareas, handleTareaCompleta }) => {
    const contadorDePendientes = tareas.filter(tarea => !tarea.completa).length;
    
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 2,
            width: '100%',
            bgcolor: 'background.paper',
            boxShadow: 3,
            borderRadius: 2
        }}>

            <Typography variant="h6"  component="div" color="primary">
                Tareas Pendientes: {contadorDePendientes}
            </Typography>
            {tareas.map((tarea, index) => (
                <Tarea
                    key={index}
                    tarea={tarea}
                    index={index}
                    handleTareaCompleta={() => handleTareaCompleta(index)} />
            )
            )}

        </Box>
    )
};

export default ListaDeTareas;