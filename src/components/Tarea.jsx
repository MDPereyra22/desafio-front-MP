/* eslint-disable react/prop-types */
import { ListItem, ListItemText, Box } from '@mui/material';

const Tarea = ({ tarea, handleTareaCompleta }) => {
  const tareaCompletaColor = tarea.completa ? 'grey' : 'primary.main';

  const tareaStyles = {
    width: '95%',
    bgcolor: tareaCompletaColor,
    color: 'primary.contrastText',
    marginY: 1,
    padding: 1,
    borderRadius: 2,
    cursor: 'pointer',
  };

  return (
    <Box sx={tareaStyles}>
      <ListItem
        disablePadding
        style={{ textDecoration: tarea.completa ? 'line-through' : 'none' }}
        onClick={handleTareaCompleta}
      >
        <ListItemText primary={tarea.nombre} />
      </ListItem>
    </Box>
  );
};

export default Tarea;
