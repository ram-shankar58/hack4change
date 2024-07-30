import React from 'react';
import {AppBar, Toolbar, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <AppBar position="static" className="header">
            <Toolbar>
                <Typography variant="h6" className="header">
                    Crop Recommendation System
                </Typography>
                <Button color="inherit" component={Link} to="/">Dashboard</Button>
                <Button color="inherit" component={Link} to="/">Solar Management</Button>
                <Button color="inherit" component={Link} to="/">Water Management</Button>
                <Button color="inherit" component={Link} to="/">Waste Management</Button>
            </Toolbar>
            </AppBar>

    );
};

export default Header;