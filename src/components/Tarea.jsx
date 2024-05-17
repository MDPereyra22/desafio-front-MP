/* eslint-disable react/prop-types */
import React from 'react';
import { ListItem, ListItemText, Box } from '@mui/material';

const Tarea = ({ tarea, index, handleTareaCompleta }) => {
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
        key={index}
        style={{ textDecoration: tarea.completa ? 'line-through' : 'none' }}
        onClick={() => handleTareaCompleta(index)}
      >
        <ListItemText primary={tarea.nombre} />
      </ListItem>
    </Box>
  );
};

export default Tarea;
