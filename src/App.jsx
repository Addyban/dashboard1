import React from 'react';
import { Provider } from 'react-redux';
import { CssBaseline, Box, Grid } from '@mui/material';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UserTable from './components/UserTable';
import { store } from './store/store';
import ResponsiveAppBar from './components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Box sx={12}>
        {/* <Sidebar /> */}
        <ResponsiveAppBar />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid>
              <Dashboard />
            </Grid>
            <Grid item xs={12}>
              <UserTable />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Provider>
  );
}

export default App;



