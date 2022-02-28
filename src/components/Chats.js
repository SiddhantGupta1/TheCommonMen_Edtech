import React from 'react'
import {Grid} from '@mui/material'
import LeftSideNav from './Common/LeftSideNav';
import User1 from '../assets/User1.svg';
import { Link } from 'react-router-dom';
import {messages, chats} from './JSON/JSON'

const Chats = () => {

  return (
    <>
      <div style={{position: 'fixed', zIndex: '10', top: '0%', width: '100%', height: '3.5rem', fontSize: '0.9rem', background: '#FFCC4D', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <p>This is chats, you can text your colleagues/work partners, Listen and Watch features are under development. Stay Connected 😁✨. You can refer to the Ui doc submitted for reference.</p>
      </div>
    
    <Grid item container xs={12} style={{marginTop: '3.5rem'}} >
      <Grid item xs={2} style={{ position: 'relative'}} >
        <div style={{position: 'fixed', width: '16rem'}} >
          <LeftSideNav />
        </div>
      </Grid>

      <Grid item xs={3} className="NoScrollBar" style={{background: '#292929', width: '100%', maxHeight: '92.5vh', overflow: 'auto'}} >
        {chats.map((e,index) => (
          <Link to={`#${e.name}`} key={index} className="chatsHover" style={{display: 'flex', width: '100%', height: '5rem', padding: '1.5rem 1rem 2rem 2rem'}} >
              <img alt="" src={User1} style={{width: '45px', height: '45px', borderRadius: '50%', background: '#C4C4C4', marginRight: '0.7rem'}} />
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <p style={{color: 'rgba(255, 255, 255', fontSize: '0.9rem'}} >{e.name}</p>
                <p style={{color: 'rgba(255, 255, 255, 0.5', fontSize: '0.6rem'}} >{e.label}</p>
              </div>
          </Link>
        ))}
      </Grid>
      
      <Grid item xs={7} style={{background: '#1D1D1D', width: '100%', maxHeight: '92.5vh', padding: '2rem 3rem', overflow: 'auto', position: 'relative'}} >
          
          {messages.map((e,index) => (
            <div key={index} style={{position: 'relative', marginBottom: '1.8rem'}}>
              <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <img alt="" src={e.userImg} style={{width: '40px', height: '40px', marginRight: '10px'}} />
                <p style={{color: 'white', marginRight: '10px', fontSize: '1rem'}} >{e.userName}</p>
                <p style={{color: 'rgba(255, 255, 255, 0.3)', fontSize: '0.7rem'}} >{e.time} mins ago</p>
              </div>
              <p style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', marginTop: '0.7rem'}} >{e.userText}</p>
            </div>
          ))}
          
          <input placeholder='Message' style={{fontSize: '1rem', position: 'fixed', zIndex: '10', top: '89%', width: '52%', marginTop: '1.5rem', background: '#292929', padding: '1rem 1rem', borderRadius: '8px', color: 'white'}} />

      </Grid>
    </Grid>
    </>
  )
}

export default Chats