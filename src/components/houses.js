import React,{useState} from 'react';
import { Grid, Modal, Fade} from '@mui/material';
import LeftSideNav from './Common/LeftSideNav';
import { useParams } from 'react-router-dom';
import HouseBG from '../assets/HouseBG.jpg';
import SearchIcon from '../assets/SearchIcon.svg';
import CardBG from '../assets/CardBG.jpg';
import ProjectsDiscussion from './Common/ProjectsDiscussion';
import {houses} from './JSON/JSON';

const Houses = () => {
  
  const params = useParams()
  const query = params.query

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
    <div style={{position: 'fixed', zIndex: '10', top: '0%', width: '100%', height: '3.5rem', fontSize: '0.9rem', background: '#FFCC4D', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <p>Welcome to the House. You have your team, your projects all listed. Explore the Discussion room. It's active✨</p>
    </div>
    
    <Grid item container xs={12} style={{marginTop: '3.5rem'}} >
      <Grid item xs={2} style={{background: 'white', position: 'relative'}} >
        <div style={{position: 'fixed', width: '15.5rem'}} >
          <LeftSideNav />
        </div>
      </Grid>
      <Grid item xs={10}>

        {houses.map((e,index) => {
          if(query === e.name)
          {
            return(
              <div key={index} style={{position: 'relative'}} >
                <img alt="" src={HouseBG} style={{width: '100%', height: '19.5rem', position: 'absolute'}} />
                <div style={{position: 'relative', width: '100%', height: '19.5rem', paddingTop: '4.5rem', }}>
                  <div style={{display: 'flex', justifyContent: 'center', padding: '0 4rem' }} >
                    <img alt="" src={SearchIcon} style={{marginRight: '-38px', zIndex:'2', width: '1.7rem', height: '3rem', position: 'relative' }} />
                    <input placeholder='Search topics, etc.' style={{width: '73%', height: '3rem', borderRadius: '8px', paddingLeft: '3rem', background: 'rgba(250, 250, 250, 0.5)'}} />
                    <button onClick={handleOpen} style={{background: 'white', padding: '0.5rem 1rem', borderRadius: '20px', marginLeft: '11rem'}}>+ Post a Collab</button>
                  </div>

                  <Modal open={open} onClose={handleClose}>
                    <Fade in={open}>
                        <form className='house-modal'>
                            <p style={{fontWeight: '300', fontSize: '1.2rem', marginBottom: '1rem'}}>Post Collab</p>
                            <input type="file" accept="image/png, image/jpeg, image/jpg" className='imageInput' />
                            <select className='nameInput' >
                              <option value="frontend" >Frontend Developer</option>
                              <option value="designer" >UI/UX Designer</option>
                              <option value="backend" >Backend Developer</option>
                            </select>
                            <textarea placeholder='Describe Your Project in Few Lines' className='descInput' style={{maxHeight: '10rem'}} />
                            <input placeholder='Perks' className='nameInput' />
                            <input type="submit" value="Post Collab" className='imageInputSubmit' />
                        </form>
                    </Fade>
                  </Modal>

                  <br /><br /><br /><br />
                  <p style={{fontSize: '3rem', color: 'white', fontWeight: '500', marginLeft: '6rem'}}>{e.name}</p>
                </div>

                <Grid item container xs={12}>
                  <Grid item xs={8} style={{padding: '2rem 1.5rem 0 3rem'}}>
                    <p style={{fontSize: '1.1rem', color: 'rgba(0, 0, 0, 0.5)', fontWeight: '500'}}>This House is all about</p>
                    <p style={{fontSize: '1.1rem', marginTop: '0.5rem', textAlign: 'justify' }}>{e.desc}</p> <br />
                    
                    <p style={{fontSize: '1.1rem', color: 'rgba(0, 0, 0, 0.5)', fontWeight: '500', marginBottom: '0.5rem'}}>Family Members ({e.members.length})</p>
                    <div className="NoScrollBar" style={{display: 'flex', overflow: 'auto' }}>
                      {e.members.map((e,index) => (
                        <div key={index} style={{minWidth: '100px', marginRight: '15px', position: 'relative' }} >
                          <img alt="" src={e.img} style={{position: 'absolute', width: '100px', height: '100px', borderRadius: '8px'}} />
                          <p style={{position: 'relative', color: 'white', padding: '3.7rem 0.5rem', fontSize: '13px'}}>{e.name}</p>
                        </div>
                       ))}
                    </div>

                    <p style={{fontSize: '1.1rem', color: 'rgba(0, 0, 0, 0.5)', fontWeight: '500', marginBottom: '0.5rem'}}>Projects ({e.projects.length})</p>
                    <div className="HousesCards" style={{display: 'flex', overflow: 'auto' }}>
                      {e.projects.map((e,index) => (
                        <div key={index} style={{minWidth: '100px', marginRight: '15px', position: 'relative' }} >
                          <img alt="" src={CardBG} style={{position: 'absolute', width: '100px', height: '100px', borderRadius: '8px'}} />
                          <p style={{position: 'relative', color: 'white', padding: '3.7rem 0.5rem', fontSize: '13px'}}>{e}</p>
                        </div>
                       ))}
                    </div>

                  </Grid>
                  
                  <Grid item xs={4} style={{background: 'white'}} >
                    <ProjectsDiscussion />
                  </Grid> 

                  </Grid>

              </div>
              )
          }
        })}

      </Grid>
    </Grid>
    </>
  )
}

export default Houses