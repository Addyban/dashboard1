import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (

    <Box sx={{ width: 250, bgcolor: 'background.paper' }}>
      <List>
        <ListItem button>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="User" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Subscriptions" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Transactions" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Reports" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
