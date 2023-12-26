import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import { useTheme } from "@emotion/react";

const TraversedList = ({ delayedList }) => {
  const theme = useTheme(); // Переместите useTheme внутрь компонента

  return (
    <Box display="flex" justifyContent="center">
      <List style={{ display: 'flex', flexDirection: 'row' }}>
        <TransitionGroup component={null}>
          {delayedList.map((num, index) => (
            <CSSTransition key={index} timeout={500} classNames="fade">
              <ListItem>
                <ListItemText style={{background: `${theme.palette.primary.main}`, padding: '10px' , borderRadius: '10px' , color: 'white'}} primary={num} />
              </ListItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </List>
    </Box>
  );
};

export default TraversedList;
