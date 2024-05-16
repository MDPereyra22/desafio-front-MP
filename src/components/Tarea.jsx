/* eslint-disable react/prop-types */
import { ListItem, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';



const Tarea = ({ tarea, index, handleTareaCompleta }) => {
    return (
        <Box sx={{
            width: '95%',
            bgcolor: tarea.completa ? 'grey' : 'primary.main' ,
            color: 'primary.contrastText',
            marginY: 1,
            padding: 1,
            borderRadius: 2,
          }}>
            <ListItem
                
                disablePadding
                key={index}
                style={{ textDecoration: tarea.completa ? 'line-through' : 'none' }}
                onClick={() => handleTareaCompleta(index)}
            >
                <ListItemText primary={tarea.nombre} />
            </ListItem>
        </Box>

    )
}

export default Tarea;