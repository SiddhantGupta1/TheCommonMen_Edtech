import React from 'react';
import './LeftSideNav.css';
import {Link} from 'react-router-dom';
import HomeIcon from '../../assets/HomeIcon.svg';
import DiscoverIcon from '../../assets/DiscoverIcon.svg';
import ChatsIconGrey from '../../assets/ChatsIconGrey.svg';
import HousesIcon from '../../assets/HousesIcon.svg';
import ProjectsIcon from '../../assets/ProjectsIcon.svg';
import InvestmentsIcon from '../../assets/InvestmentsIcon.svg';
import CollabRequestIcon from '../../assets/CollabRequestIcon.svg';
import ChatsIconBlack from '../../assets/ChatsIconBlack.svg';
import EventsIcon from '../../assets/EventsIcon.svg';
import NotificationsIcon from '../../assets/NotificationsIcon.svg';
import SettingsIcon from '../../assets/SettingsIcon.svg';
import UserIcon from '../../assets/UserIcon.svg'


const LeftSideNav = () => {


  return (
    <div className='LeftSideNav'>
      <p style={{fontSize: '2rem', fontWeight: '300'}} >Collab</p>
      <hr />
      
      <div style={{width: '85%', display: 'flex', flexDirection: 'column', marginTop: '1rem'}} >
        <Link to="#" className='center Links2' > <img alt="" src={HomeIcon} />&nbsp; Dashboard</Link>
        <Link to="#" className='center Links1' > <img alt="" src={DiscoverIcon} />&nbsp; Discover</Link>
        <Link to="#" className='center Links1' > <img alt="" src={ChatsIconGrey} />&nbsp; Chats</Link>
      </div>

      <div style={{width: '85%', display: 'flex', flexDirection: 'column', margin: '2rem 0 1rem 0'}}>
        <Link to='#' className='center ' style={{color: '#808080', fontWeight: '500' }} > <img alt="" src={HousesIcon} style={{width: '1.3rem', height: '1.3rem'}} />&nbsp; Houses</Link>
        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '3rem' }}>
          <Link to="#" className='fontLight' >Turbonators</Link>
          <Link to="#" className='fontLight' >Elipsers</Link>
          <Link to="#" className='fontLight' >The Gigglers</Link>
        </div>
        <Link to="#" className='center ' style={{color: '#808080', fontWeight: '500', marginTop: '1rem' }} > <img alt="" src={ProjectsIcon} style={{width: '1.3rem', height: '1.3rem'}} />&nbsp; Projects</Link>
        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '3rem' }}>
          <Link to="#" className='fontLight' >The Saas Project</Link>
          <Link to="#" className='fontLight' >Microsoft Challenge</Link>
          <Link to="#" className='fontLight' >Android Task Multitasking</Link>
        </div>
      </div>

      <Link to="#" className='center font500' > <img alt="" src={InvestmentsIcon} />&nbsp; Investments</Link>
      <Link to="#" className='center font500' > <img alt="" src={CollabRequestIcon} />&nbsp; Collab Requests</Link>
      <hr style={{margin: '0.4rem 0'}} />
      <Link to="#" className='center font500' > <img alt="" src={ChatsIconBlack} />&nbsp; Chats</Link>
      <Link to="#" className='center font500' > <img alt="" src={EventsIcon} />&nbsp; Events</Link>
      <Link to="#" className='center font500' > <img alt="" src={NotificationsIcon} />&nbsp; Notifications</Link>
      <Link to="#" className='center font500' > <img alt="" src={SettingsIcon} />&nbsp; Settings</Link>

      <div style={{width: '80%', display: 'flex', alignItems: 'center', margin: '2rem 0 1rem 0'}}>
        <img alt="" src={UserIcon} />
        &nbsp;&nbsp;Vinci di Ui
      </div>

    </div>
  )
}

export default LeftSideNav