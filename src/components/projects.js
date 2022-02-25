import React,{useState} from 'react';
import './projects.css';
import { Grid, Modal, Fade} from '@mui/material';
import LeftSideNav from './Common/LeftSideNav';
import { Link, useParams } from 'react-router-dom';
import ProjectsDiscussion from './Common/ProjectsDiscussion';
import SearchIcon from '../assets/SearchIcon.svg';
import HouseBG from '../assets/HouseBG.svg';

const Projects = () => {

  const params = useParams()
  const query = params.query
  const projects = [
    {
      id: 36,
      name: 'The Saas Project',
      progress: 60,
      desc: 'Remote work isn’t just about doing your job from a different location; it’s also about maintaining availability to your colleagues throughout the whole working day. About Turbonators. Remote work isn’t just about doing your job from a different location; it’s also about maintaining availability to your colleagues throughout the whole working day. About Turbonators. ',
      achievers: ["Design Heist", "Design Heist", "Design Heist", "Design Heist",],
      investors: ["Eric James", "Brian Lara", "Natasha", "Eric Jones", "Tony Stark", "Natasha", "Eric Jones", "Tony Stark"],
    },
    {
      id: 37,
      name: 'Microsoft Challenge',
      progress: 40,
      desc: 'Remote work isn’t just about doing your job from a different location; it’s also about maintaining availability to your colleagues throughout the whole working day. About Gigglers. Remote work isn’t just about doing your job from a different location; it’s also about maintaining availability to your colleagues throughout the whole working day. About Gigglers. ',
      achievers: ["Design Heist", "Design Heist", "Design Heist", "Design Heist",],
      investors: ["Eric James", "Brian Lara", "Natasha", "Eric Jones", "Tony Stark"],
    },
    {
      id: 38,
      name: 'Android Task Monitoring',
      progress: 25,
      desc: 'Remote work isn’t just about doing your job from a different location; it’s also about maintaining availability to your colleagues throughout the whole working day. About Inspiers. Remote work isn’t just about doing your job from a different location; it’s also about maintaining availability to your colleagues throughout the whole working day. About Inspiers.',
      achievers: ["Design Heist", "Design Heist", "Design Heist", "Design Heist",],
      investors: ["Eric James", "Brian Lara", "Natasha", "Eric Jones", "Tony Stark"],
    },
  ]

  const myHands = ['Overview', 'Tasks', 'Files', 'Notes', 'Collab', 'Recordings', 'Investments']


  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Grid item container xs={12}>
      <Grid item xs={2} style={{background: 'white'}} >
        <LeftSideNav />
      </Grid>

      <Grid item xs={10}>
        {projects.map((e,index) => {
          if(query === e.name)
          {
            return(
              <div key={index} style={{position: 'relative'}} >
                <img alt="" src={HouseBG} style={{width: '100%', height: '19.5rem', position: 'absolute'}} />
                <div style={{position: 'relative', width: '100%', height: '19.5rem', paddingTop: '4.5rem', marginBottom: '2rem' }}>
                  <div style={{display: 'flex', justifyContent: 'center', padding: '0 4rem' }} >
                    <img alt="" src={SearchIcon} style={{marginRight: '-38px', zIndex:'2', position: 'relative' }} />
                    <input placeholder='Search topics, etc.' style={{width: '73%', height: '3rem', borderRadius: '8px', paddingLeft: '3rem', background: 'rgba(250, 250, 250, 0.5)'}} />
                    <button onClick={handleOpen} style={{background: 'white', padding: '0.5rem 1rem', borderRadius: '20px', marginLeft: '11rem'}}>+ Collab Notice</button>
                  </div>

                  <Modal open={open} onClose={handleClose}>
                    <Fade in={open}>
                        <form className='house-modal' style={{height: '35rem'}} >
                            <p style={{fontWeight: '300', fontSize: '1.2rem', marginBottom: '1rem'}}>Collab Notice</p>
                            <select className='nameInput' >
                              <option value="frontend" >Frontend Developer</option>
                              <option value="designer" >UI/UX Designer</option>
                              <option value="backend" >Backend Developer</option>
                            </select>
                            <textarea placeholder='Describe Your Project in Few Lines' className='descInput' style={{maxHeight: '10rem', marginTop: '1rem'}} />
                            <input placeholder='Perks' className='nameInput' />
                            <input type="submit" value="Post Collab" className='imageInputSubmit' />
                        </form>
                    </Fade>
                  </Modal>

                  <br />
                  <p style={{fontSize: '3rem', color: 'white', fontWeight: '500', marginLeft: '4rem'}}>{e.name}</p>
                  <div style={{display: 'flex'}}>
                    <div style={{width: '100%', padding: '1rem 4rem'}}>
                      <div style={{width: '100%', height: '6px', background: '#5e5e5e', borderRadius: '3px'}}></div>
                      <div style={{width: `${e.progress}%`, height: '6.5px', background: 'white', borderRadius: '3px', transform: 'translateY(-6.5px)' }}></div>
                      <p style={{float: 'left', fontWeight: '500', color: 'white' }}>{e.progress}%</p>
                      <p style={{float: 'right', fontWeight: '500', color: '#a7a7a7'}}>100%</p>
                    </div>
                    <button style={{width: '14rem', height: '40px', background: '#D7EEFF', borderRadius: '20px', margin: '0 4rem 0 6rem'}}>Update Progress</button>

                  </div>

                  <Grid item container xs={12} style={{marginTop: '1.6rem'}} >

                    <Grid item xs={8} style={{padding: '2rem 2rem 1rem 4rem'}} >
                      <div className='projectCards' style={{display: 'flex', overflow: 'auto'}}>
                        {myHands.map((e,index) => (
                          <p key={index} style={{margin: '0 2rem'}} >{e}</p>
                        ))}
                      </div>
                    </Grid>


                    <Grid item xs={4} style={{background: 'white'}} >
                      <ProjectsDiscussion />
                    </Grid> 

                  </Grid>

                </div>


              </div>
            )
          }
        })}
      </Grid>
    </Grid>
  )
}

export default Projects