import React,{useState} from 'react';
import './LeftSideNav.css';
import {Link} from 'react-router-dom';
import HomeIconLight from '../../assets/HomeIconLight.svg';
import HomeIconDark from '../../assets/HomeIconDark.svg'
import DiscoverIconDark from '../../assets/DiscoverIconDark.svg';
import DiscoverIconLight from '../../assets/DiscoverIconLight.svg';
import ChatsIconDark from '../../assets/ChatsIconDark.svg';
import ChatsIconLight from '../../assets/ChatsIconLight.svg'
import HousesIcon from '../../assets/HousesIcon.svg';
import ProjectsIcon from '../../assets/ProjectsIcon.svg';
import InvestmentsIcon from '../../assets/InvestmentsIcon.svg';
import CollabRequestIcon from '../../assets/CollabRequestIcon.svg';
import EventsIcon from '../../assets/EventsIcon.svg';
import NotificationsIcon from '../../assets/NotificationsIcon.svg';
import SettingsIcon from '../../assets/SettingsIcon.svg';
import UserIcon from '../../assets/UserIcon.jpg'
import { useParams } from 'react-router-dom';


const LeftSideNav = () => {

  const houseNames = ['Turbonators', 'The Gigglers', 'Inspiers']
  const projectNames = ['Saas Project', 'Microsoft Challenge', 'Android Task Monitoring']

  const path = window.location.pathname
  
  const Params = useParams()
  const pathQuery = Params.query

  const [ishouses, setIsHouses] = useState(false)
  const [isprojects, setIsProjects] = useState(false)

  return (
    <div className='LeftSideNav'>
      <Link to="/" style={{fontSize: '2rem', fontWeight: '300'}} >Collab</Link>
      <hr />
      
      <div style={{width: '85%', display: 'flex', flexDirection: 'column', marginTop: '1rem'}} >
        <Link to="/dashboard" className={path === '/dashboard' ? 'Links2' : 'Links1'} > <img alt="" src={path === '/dashboard' ? HomeIconLight : HomeIconDark } />&nbsp; Dashboard</Link>
        <Link to="/discover" className={path === '/discover' ? 'Links2' : 'Links1'} > <img alt="" src={path === '/discover' ? DiscoverIconLight : DiscoverIconDark } />&nbsp; Discover</Link>
        <Link to="/chats" className={path === '/chats' ? 'Links2' : 'Links1'} > <img alt="" src={path === '/chats' ? ChatsIconLight : ChatsIconDark } />&nbsp; Chats</Link>

        <button onClick={()=>{setIsHouses(!ishouses)}} className={ishouses ? 'Links2' : 'Links1'} style={{ fontWeight: '500', marginTop: '1rem' }} > <img alt="" src={HousesIcon} style={{width: '1.3rem', height: '1.3rem'}} />&nbsp; Houses</button>
        <div style={{flexDirection: 'column', marginLeft: '3rem', display: `${ishouses ? 'flex' : 'none'}`}}>
          {houseNames.map((e,index) => (
            <Link key={index} to={`/houses/${e}`} className={pathQuery === e ? 'houseNamesBG-active' : 'houseNamesBG'} >{e}</Link>
          ))}
        </div>
        
        <button onClick={() => {setIsProjects(!isprojects)}} className={isprojects ? 'Links2' : 'Links1'} style={{ fontWeight: '500' }} > <img alt="" src={ProjectsIcon} style={{width: '1.3rem', height: '1.3rem'}} />&nbsp; Projects</button>
        <div style={{flexDirection: 'column', marginLeft: '3rem', display: `${isprojects ? 'flex' : 'none'}` }}>
          {projectNames.map((e,index) => (
            <Link key={index} to={`/projects/${e}#Overview`} className={pathQuery === e ? 'productNamesBG-active' : 'productNamesBG'} >{e}</Link>
          ))}
        </div>
      

        <Link to="/investments" style={{marginTop: '1rem'}} className={path === '/investments' ? 'Links2' : 'Links1'} > <img alt="" src={InvestmentsIcon} />&nbsp; Investments</Link>
        <button onClick={() => alert('Collab Requests is not yet available.')} className='Links1' > <img alt="" src={CollabRequestIcon} />&nbsp; Collab Requests</button>
      
      <hr style={{margin: '0.4rem 0', width: '95%'}} />
      <button onClick={() => alert('Events is not yet available.')} className='center font500' > <img alt="" className="NavIconsSize" src={EventsIcon} />&nbsp; Events</button>
      <button onClick={() => alert('Notifications is not yet available.')} className='center font500' > <img alt="" className="NavIconsSize" src={NotificationsIcon} />&nbsp; Notifications</button>
      <button onClick={() => alert('Settings is not yet available.')} className='center font500' > <img alt="" className="NavIconsSize" src={SettingsIcon} />&nbsp; Settings</button>
      </div>
      <div style={{width: '80%', display: 'flex', alignItems: 'center', margin: '2rem 0 1rem 0'}}>
        <img alt="" src={UserIcon} style={{width: '2.5rem', height: '2.5rem'}} />
        &nbsp;&nbsp;Vinci di Ui
      </div>

    </div>
  )
}

export default LeftSideNav