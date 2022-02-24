import React from 'react';
import './houses.css';
import {Grid} from '@mui/material'
import LeftSideNav from './Common/LeftSideNav';

const Houses = () => {
  return (
    <Grid item container xs={12}>
      <Grid item xs={2} style={{background: 'white'}} >
        <LeftSideNav />
      </Grid>
      <Grid item xs={10}>
        Houses
      </Grid>
    </Grid>
  )
}

export default Houses