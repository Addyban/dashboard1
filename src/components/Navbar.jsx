import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { FaBell } from 'react-icons/fa'; // Icon for the bell

const pages = [
  'Dashboard',
  'User',
  'Subscriptions',
  'Transactions',
  'Reports',
  'Field Management',
  'Content Management',
];

function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#ffffff', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo Section */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'sans-serif',
              fontWeight: 700,
              color: 'black',
              textDecoration: 'none',
            }}
          >
            <span style={{ color: '#f9a825' }}>UN</span>common
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: '#000', display: 'block', textTransform: 'none' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* User Info and Notifications */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Notification Icon */}
            <IconButton sx={{ color: '#000' }}>
              <FaBell />
            </IconButton>

            {/* User Details */}
            <Typography variant="body1" sx={{ color: '#000', mx: 1 }}>
              Kaustav
            </Typography>
            <Typography variant="body2" sx={{ color: '#9e9e9e', mr: 2 }}>
              kaustav.saha@webstep.in
            </Typography>

            {/* Avatar */}
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Kaustav" sx={{ bgcolor: '#f9a825' }}>K</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
