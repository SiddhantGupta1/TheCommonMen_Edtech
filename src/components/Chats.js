import React from 'react'
import './Chats.css'
import {Grid} from '@mui/material'
import LeftSideNav from './Common/LeftSideNav';
import User1 from '../assets/User1.svg';
import User2 from '../assets/User2.svg';
import User3 from '../assets/User3.svg';
import { Link } from 'react-router-dom';

const Chats = () => {

  const messages = [
    {
      userImg: User1,
      userName: 'Sid',
      userText: 'Guys all set!? I’ve created the group, Eric Are you in for the game?',
      time: '17',
    },
    {
      userImg: User2,
      userName: 'Gena',
      userText: 'Yesss!! we are all set to go...',
      time: '7',
    },
    {
      userImg: User3,
      userName: 'Eric',
      userText: 'Yes!! Sid, I’ve updated the expenses in the discussion board, You can check now.',
      time: '2',
    },
    {
      userImg: User1,
      userName: 'Sid',
      userText: 'Guys all set!? I’ve created the group, Eric Are you in for the game?',
      time: '17',
    },
    {
      userImg: User2,
      userName: 'Gena',
      userText: 'Yesss!! we are all set to go...',
      time: '7',
    },
    {
      userImg: User3,
      userName: 'Eric',
      userText: 'Yes!! Sid, I’ve updated the expenses in the discussion board, You can check now.',
      time: '2',
    },
    {
      userImg: User1,
      userName: 'Sid',
      userText: 'Guys all set!? I’ve created the group, Eric Are you in for the game?',
      time: '17',
    },
    {
      userImg: User2,
      userName: 'Gena',
      userText: 'Yesss!! we are all set to go...',
      time: '7',
    },
  ]

  const chats = [
    {
      name: 'The Sophomores',
      label: 'Some title Yada Yada Yada'
    },
    {
      name: 'Sid',
      label: 'Some title Daaya Daaya '
    },
    {
      name: 'Harey Jenkins',
      label: 'Some title Yada Yada Ya'
    },
    {
      name: 'The Sophomores',
      label: 'Some title Yada Yad'
    },
  ]

  return (
    <Grid item container xs={12}>
      <Grid item xs={2} style={{background: 'white'}} >
        <LeftSideNav />
      </Grid>

      <Grid item xs={3} style={{background: '#292929', width: '100%', minHeight: '100vh'}} >
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
      
      <Grid item xs={7} style={{background: '#1D1D1D', width: '100%', minHeight: '100vh', padding: '2rem 3rem'}} >
          
          {messages.map((e,index) => (
            <div key={index} style={{position: 'relative', marginBottom: '1.8rem'}}>
              <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <img alt="" src={e.userImg} style={{width: '40px', marginRight: '10px'}} />
                <p style={{color: 'white', marginRight: '10px', fontSize: '1rem'}} >{e.userName}</p>
                <p style={{color: 'rgba(255, 255, 255, 0.3)', fontSize: '0.7rem'}} >{e.time} mins ago</p>
              </div>
              <p style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', marginTop: '0.7rem'}} >{e.userText}</p>
            </div>
          ))}
          
          <input placeholder='Message' style={{fontSize: '1rem', position: 'fixed', zIndex: '10', top: '90%', width: '52%', marginTop: '1.5rem', background: 'rgb(196, 196, 196)', padding: '0.6rem 1rem', borderRadius: '8px', color: 'black'}} />

      </Grid>
    </Grid>
  )
}

export default Chats