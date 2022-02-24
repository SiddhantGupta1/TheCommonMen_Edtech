import React,{useState} from 'react';
import './dashboard.css';
import LeftSideNav from './Common/LeftSideNav';
import { Grid, Modal, Fade} from '@mui/material';
import UpcomingEventsIcon from '../assets/UpcomingEventsIcon.svg';
import SearchIcon from '../assets/SearchIcon.svg';
import NotificationsIcon from '../assets/NotificationsIcon.svg'; 
import CollabRequestIcon from '../assets/CollabRequestIcon.svg';
import HousesIcon from '../assets/HousesIcon.svg';
import ProjectsIcon from '../assets/ProjectsIcon.svg';
import BGimg1 from '../assets/BGimg1.svg';
import User1 from '../assets/User1.svg';
import User2 from '../assets/User2.svg';
import User3 from '../assets/User3.svg';
import House1 from '../assets/House1.svg';
import House2 from '../assets/House2.svg';
import House3 from '../assets/House3.svg';

const Dashboard = () => {

  const events = [
    {
      date: '8',
      name: 'Saas Project',
      script: 'Phase 1',
      desc: 'Build & Present the Project',
    },
    {
      date: '15',
      name: 'Elipsers',
      script: 'Phase 1',
      desc: 'Build & Present the Project',
    },
    {
      date: '29',
      name: 'Saas Project',
      script: 'Phase 2',
      desc: 'Build & Present the Project',
    },
  ]
  const cards = [
    {
      bg: BGimg1,
      project: 'Saas Project',
      house: 'The Gigglers',
      progress: '60',
      users: [User1, User2, User3, User2 ],
      edited: 'Last Edited 12h ago',
    },
    {
      bg: BGimg1,
      project: 'Microsoft Challenge',
      house: 'Elipsers',
      progress: '40',
      users: [User1, User2, User3, User2, User1, User2 ],
      edited: 'Last Edited 12h ago',
    },
    {
      bg: BGimg1,
      project: 'Android Task Multitasking',
      house: 'Turbonators',
      progress: '90',
      users: [User1, User2, User3, User2, User3, User2 ],
      edited: 'Last Edited 12h ago',
    },
    {
      bg: BGimg1,
      project: 'Saas Project',
      house: 'Elipsers',
      progress: '20',
      users: [User1, User2, User3, User1, User2 ],
      edited: 'Last Edited 12h ago',
    },
    {
      bg: BGimg1,
      project: 'Android Task Multitasking',
      house: 'Turbonators',
      progress: '90',
      users: [User1, User2, User3, User2, User3, User2 ],
      edited: 'Last Edited 12h ago',
    },
    {
      bg: BGimg1,
      project: 'Saas Project',
      house: 'Elipsers',
      progress: '20',
      users: [User1, User2, User3, User1, User2 ],
      edited: 'Last Edited 12h ago',
    },
    
  ]

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Grid item container xs={12}>
      <Grid item xs={2} style={{background: 'white'}} >
        <LeftSideNav />
      </Grid>
      <Grid item xs={8} className='DashboardSection' >
        
        <header>
          <img alt="" src={SearchIcon} style={{position: 'absolute', margin: '10px 0 0 5px'}} />
          <input placeholder='Search topics, etc.' />

          <div>
            <button style={{background: 'rgba(255, 255, 255, 0.7)', borderRadius: '10px', padding: '0.5rem', marginRight: '1.5rem'}} ><img alt="" src={NotificationsIcon} style={{width: '30px'}} /></button>
            <button onClick={handleOpen} style={{background: '#FFF9C6', borderRadius: '10px', padding: '0.6rem 0.5rem', fontSize: '18px', fontWeight: '500'}}> + New House</button>
          </div>
        </header>

        <Modal open={open} onClose={handleClose}>
          <Fade in={open}>
              <form className='house-modal'>
                  <p style={{fontWeight: '300', fontSize: '1.2rem', marginBottom: '1rem'}}>Build House</p>
                  <input type="file" accept="image/png, image/jpeg, image/jpg" className='imageInput' />
                  <input placeholder='Full Name' className='nameInput' />
                  <textarea placeholder='Describe Your House in Few Lines' className='descInput' />
                  <input type="submit" value="Build it!" className='imageInputSubmit' />
              </form>
          </Fade>
        </Modal>

        <p style={{fontSize: '2.5rem', fontWeight: '500', margin: '3rem 0 2rem 0'}}><span style={{fontWeight: '300'}}>Holaa!! </span>Vinci di Ui &nbsp;<img alt="" src={CollabRequestIcon} style={{width: '1.8rem'}} /></p>
        <p style={{fontSize: '1.5rem', color: 'rgba(0, 0, 0, 0.7)', marginBottom: '1rem'}} >Recently Opened Projects &nbsp;<img alt="" src={ProjectsIcon} style={{width: '1.2rem'}} /></p>

        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {cards.map((e,index) => (
              <div key={index} style={{width: '13.5rem', margin: '1.5rem 1.3rem 1.5rem 0' }}>

              <div style={{position: 'relative' }}>
                <img alt="" src={e.bg} style={{position: 'absolute', width: '13.55rem', borderRadius: '10px 10px 0 0'}} />
                <div style={{position: 'relative', height: '6.3rem', padding: '2.5rem 0 0 1rem', borderRadius: '10px 10px 0 0', background: 'linear-gradient(180deg, rgba(3, 3, 3, 0) -12.5%, #000000 115.3%),url()'}} >
                  <p style={{color: 'white', fontSize: '1rem'}} >{e.house}</p>
                  <p style={{color: 'white', fontWeight: '500', fontSize: '1.6rem'}} >{e.project.split(" ")[0]}</p>
                </div>
              </div>

              <div style={{background: 'white', padding: '0.6rem 0.7rem', borderRadius: '0 0 10px 10px' }}>
                <div style={{width: '100%', height: '2px', background: '#E6E6E6', borderRadius: '2px'}}></div>
                <div style={{width: `${e.progress}%`, height: '2px', background: '#333333', borderRadius: '2px', transform: 'translateY(-2px)' }}></div>
                <p style={{float: 'left' }}>{e.progress}%</p>
                <p style={{float: 'right', color: '#D3D3D3'}}>100%</p>
                
                <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', margin: '2rem 0 0.5rem 0'}}>
                    {e.users.length <= 4 ?
                    e.users.map((e,index) => (
                      <img alt="" key={index} src={e} style={{width: '2rem', height: '2rem', borderRadius: '50%', margin: '3px' }} />
                    )) : 
                    e.users.slice(0,3).map((e,index) => (
                      <img alt="" key={index} src={e} style={{width: '2rem', height: '2rem', borderRadius: '50%', margin: '3px' }} />
                    ))
                  }
                </div>

                <p style={{color: 'rgba(0, 0, 0, 0.3)', fontSize: '0.8rem'}}>{e.edited}</p>
              
              </div>
              
            </div>
            ))}
        </div>
        
        <p style={{fontSize: '1.5rem', color: 'rgba(0, 0, 0, 0.7)', margin: '2rem 0 1.5rem 0'}} >My Houses &nbsp; <img alt="" src={HousesIcon} style={{width: '1.6rem'}} /></p>
        <img alt="" src={House1} style={{width: '10rem', height: '11rem'}} /> &emsp;&emsp;
        <img alt="" src={House2} style={{width: '10rem', height: '11rem'}} /> &emsp;&emsp;
        <img alt="" src={House3} style={{width: '10rem', height: '11rem'}} />

      </Grid>
      <Grid item xs={2} className='UpcomingEventsSection'>
        
        <p style={{display: 'flex', fontSize: '1.2rem', fontWeight: '500', marginBottom: '2rem'}} >Upcoming Events &nbsp;<img alt="" src={UpcomingEventsIcon} /> </p>

        <p style={{fontSize: '1.4rem', fontWeight: '300', marginBottom: '1rem'}} >February</p>

        {events.map((e,index)=> (
          <div className='event' key={index} >
            <section>{e.date}</section>
            <div>
              <p style={{fontSize: '14px', fontWeight: '500'}} >{e.name}</p>
              <p style={{fontSize: '12px'}} >{e.script}</p>
              <p style={{fontSize: '12px'}} >{e.desc}</p>
            </div>
          </div>
        ))}
        
      </Grid>
    </Grid>
  )
}

export default Dashboard