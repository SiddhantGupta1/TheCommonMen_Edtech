import React from 'react'
import './Chats.css'
import {Grid} from '@mui/material'
import LeftSideNav from './Common/LeftSideNav';

const Chats = () => {
  return (
    <Grid item container xs={12}>
      <Grid item xs={2} style={{background: 'white'}} >
        <LeftSideNav />
      </Grid>
      <Grid item xs={10}>
        Chats
      </Grid>
    </Grid>
  )
}

export default Chats