import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import {
  MAINPAGE_ROUTE,
  TREES_ROUTE,
  EXPLANATION_ROUTE,
  SETTINGS_ROUTE,
  EXAMPLES_ROUTE,
} from '../utils/const'; 

const NavBar = observer(() => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const theme = useTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar>
          <Link to={MAINPAGE_ROUTE} style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              Optimal WireCutting Algorithm
            </Typography>
          </Link>

          {isWideScreen ? (
            <>
              <Link to={TREES_ROUTE} style={{ color: 'white', textDecoration: 'none' }}>
                <Button color="inherit">
                  <Typography variant="body1" textTransform={'none'}>Trees</Typography>
                </Button>
              </Link>
              <Link to={EXPLANATION_ROUTE} style={{ color: 'white', textDecoration: 'none' }}>
                <Button color="inherit">
                  <Typography variant="body1" textTransform={'none'}>Explanation</Typography>
                </Button>
              </Link>
              <Link to={SETTINGS_ROUTE} style={{ color: 'white', textDecoration: 'none' }}>
                <Button color="inherit">
                  <Typography variant="body1" textTransform={'none'}>Settings</Typography>
                </Button>
              </Link>
              <Link to={EXAMPLES_ROUTE} style={{ color: 'white', textDecoration: 'none' }}>
                <Button color="inherit">
                  <Typography variant="body1" textTransform={'none'}>Examples</Typography>
                </Button>
              </Link>
            </>
          ) : (
            <>
              <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="left" open={open} onClose={handleDrawerToggle}>
                <List>
                  <ListItem component={Link} to={TREES_ROUTE} onClick={handleDrawerToggle}>
                    <Typography variant="body1">Trees</Typography>
                  </ListItem>
                  <ListItem component={Link} to={EXPLANATION_ROUTE} onClick={handleDrawerToggle}>
                    <Typography variant="body1">Explanation</Typography>
                  </ListItem>
                  <ListItem component={Link} to={SETTINGS_ROUTE} onClick={handleDrawerToggle}>
                    <Typography variant="body1">Settings</Typography>
                  </ListItem>
                  <ListItem component={Link} to={EXAMPLES_ROUTE} onClick={handleDrawerToggle}>
                    <Typography variant="body1">Examples</Typography>
                  </ListItem>
                </List>
              </Drawer>
            </>
          )}

          
        </Toolbar>
      </Container>
    </AppBar>
  );
});

export default NavBar;
