import React from 'react';
import { Grid } from '@mui/material';
import LeftSideNav from './Common/LeftSideNav';

const NotAvailable = () => {
  return (
    <Grid item container xs={12}>
        <Grid item xs={2} style={{background: 'white'}} >
            <LeftSideNav />
        </Grid>
        <Grid item xs={10} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
            <h1>This Feature is not yet available</h1>
        </Grid>
    </Grid>
  )
}

export default NotAvailable