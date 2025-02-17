import React from "react";
import { headerStyles } from "./styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Tabs,
  Tab,
} from "@material-ui/core";
import { useRouter } from 'next/router'

const Header = () => {
  const classes = headerStyles();
  const router = useRouter();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (route) => {
    router.push(route)
  }

  React.useEffect(() => {
    if(router.pathname == '/test') {
      setValue(1)
    }
    else if (router.pathname == '/') {
      setValue(0)
    }
    else {
      setValue(5)
    }
  }, [])

  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Typography>NEW NEXT APP</Typography>
          </IconButton>
          <Tabs
            classes={{
              root: classes.tabRoot,
              flexContainer: classes.flexContainer,
            }}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="#ffffff"
          >
            <Tab onClick={() => handleClick('/')}  label="Home" />
            <Tab onClick={() => handleClick('/test')}  label="Test" />
          </Tabs>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
