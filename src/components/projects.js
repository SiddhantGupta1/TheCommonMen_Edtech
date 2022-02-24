import React from 'react';
import './projects.css';
import {Grid} from '@mui/material'
import LeftSideNav from './Common/LeftSideNav';

const Projects = () => {
  return (
    <Grid item container xs={12}>
      <Grid item xs={2} style={{background: 'white'}} >
        <LeftSideNav />
      </Grid>
      <Grid item xs={10}>
        Projects
      </Grid>
    </Grid>
  )
}

export default Projects