import React,{useState} from 'react';
import './home.css';
import frame1img from '../assets/frame1img.jpg';
import frame2img from '../assets/frame2img.jpg';
import frame3img from '../assets/frame3img.jpg';
import loginimg from '../assets/loginimg.jpg';
import righticon from '../assets/righticon.svg';
import windowsicon from '../assets/windowsicon.svg';
import googleicon from '../assets/googleicon.svg';
import appleicon from '../assets/appleicon.svg';
import { Grid, Modal, Fade} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [loginOpen, setLoginOpen] = useState(false)
  const handleLoginOpen = () => setLoginOpen(true)
  const handleLoginClose = () => setLoginOpen(false)

  const handleSignupOpen = () => {}

  const navigate = useNavigate()

  return (
    
    <div class='framesfinal'>
        
      <header>
        <div style={{position: 'absolute', zIndex:'2', left: '1100px', top: '5%'}}>
          <button onClick={handleSignupOpen} style={{color:'#ffffff',background: '#070707', borderRadius: '7.57056px', padding: '10.8306px', fontSize: '19.495px', fontWeight: '300',justifycontent: 'center', width:'154.88px', height: '50.9px'}}>Signup</button> &emsp;
          <button onClick={handleLoginOpen} style={{color:'#000000',border: '1.08306px solid #282828', borderRadius: '7.57056px', padding: '10.8306px', fontSize: '19.495px', fontWeight: '300',justifyContent: 'center', width:'154.88px', height: '50.9px'}}>Login</button>
        </div>
      </header>

      <Modal open={loginOpen} onClose={handleLoginClose}>
          <Fade in={loginOpen}>
              <form className='signup-modal'>
                  <img alt="" src={loginimg} style={{position:'absolute',width:'69vh', float:'left',zIndex:'-1'}}/>
                  <p style={{position:'absolute',color:'#F24E1E', width: '72.3px', height: '39.84px', left:'666px', top:'180px',fontstyle: 'normal', fontWeight: '500', fontSize: '26.561px', lineHeight: '40px'}}>Login</p>
                  <p style={{position:'absolute',color:'#FFFFFF', width: '216px', height: '26.4px', left:'666px', top:'220px',fontstyle: 'normal', fontWeight: '300', fontSize: '17.7073px', lineHeight: '40px'}}>Welcome back to Office!</p>
                  
                  <input placeholder='Email e.g : vincidiui@gmail.com' className='nameInput' style={{position:'absolute',color:'#FFFFFF', background: 'rgba(255, 255, 255, 0.15)', width:'20rem', left:'635px', top: '240px'}}/>
                  <input placeholder='Password' className='nameInput' style={{position:'absolute', color:'#FFFFFF', background: 'rgba(255, 255, 255, 0.15)', width:'20rem', left:'635px', top: '287px'}}/>
                  <input onClick={()=> {navigate('/dashboard') }} type="submit" value="Proceed in" className='imageInputSubmit' style={{position:'absolute', background:'#F24E1E', width:'20rem', height:'2.75rem', left:'666px', top: '360px', alignItems: 'center', padding: '12px'}} />
                  
                  <p style={{position:'absolute',color:'#FFFFFF', width: '72.3px', height: '39.84px', left:'888px', top:'53.69px',fontstyle: 'normal', fontWeight: '300', fontSize: '13.7419px', lineHeight: '40px'}}>New User?</p>
                  <button onClick={handleLoginOpen} style={{position:'absolute',color:'#F24E1E', width: '72.3px', height: '39.84px', left:'960px', top:'53.69px',fontstyle: 'normal', fontWeight: '300', fontSize: '13.7419px', lineHeight: '40px'}}>Signup <img alt="" src={righticon} style={{height: '20%'}}/></button>
                  <p style={{position:'absolute',color:'rgba(255, 255, 255, 0.65)', width: '105.6px', height: '18px', left:'666px', top:'435px',fontstyle: 'normal', fontWeight: '300', fontSize: '12px', lineHeight: '18px'}}>Forgot Password?</p>
                  
                  <button style={{position:'absolute', left:'720px', top:'500px'}}><img alt="" src={windowsicon} style={{height: '20%'}}/></button>
                  <button style={{position:'absolute', left:'800px', top:'500px'}}><img alt="" src={googleicon} style={{height: '20%'}}/></button>
                  <button style={{position:'absolute', left:'880px', top:'500px'}}><img alt="" src={appleicon} style={{height: '20%'}}/></button>

              </form>
          </Fade>
        </Modal>

      <div class='frame1'>
        <img alt="" src={frame1img} style={{height: '100%',float:'left'}}/>
        <p class='ff1' style={{position: 'absolute', width: '535px', height: '149.3px',left: '750px', top: '250px'}} >Bringing the On-Site experience back</p>
        <p class='ff2' style={{position: 'absolute', width: '535px', height: '149.3px',left: '750px', top: '420px'}} >Establish a team, Have Board meetings, Connect on calls, Add Events</p>
      </div>
      
      <div class='frame2'>
        <img alt="" src={frame2img} style={{height: '100%',float:'right'}}/>
        <p class='ff1' style={{position: 'absolute', width: '535px', height: '149.3px',left: '150px', top: '125%'}} >Find the best collabs for your projects</p>
        <p class='ff2' style={{position: 'absolute', width: '535px', height: '149.3px',left: '150px', top: '150%'}} >Establish a team, Have Board meetings, Connect on calls, Add Events</p>
      </div>
      
      <div class='frame3'>
        <img alt="" src={frame3img} style={{height: '100%',float:'left'}}/>
        <p class='ff1' style={{position: 'absolute', width: '535px', height: '149.3px',left: '750px', top: '225%'}} >Bringing the On-Site experience back</p>
        <p class='ff2' style={{position: 'absolute', width: '535px', height: '149.3px',left: '750px', top: '250%'}} >Establish a team, Have Board meetings, Connect on calls, Add Events</p>
      </div>

    </div>
    
  )
}

export default Home

/*Login Register Home */