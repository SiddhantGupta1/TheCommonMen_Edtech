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

  const [signUpOpen, setSignupOpen] = useState(false)
  const handleSignupOpen = () => setSignupOpen(true)
  const handleSignupClose = () => setSignupOpen(false)
  
  const navigate = useNavigate()

  return (
    <>
      <div style={{position: 'fixed', zIndex: '10', top: '0%', width: '100%', height: '3.5rem', fontSize: '0.9rem', background: '#FFCC4D', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <p>Read the Walkthrough - Use Signup/Login and hit the Proceed in button to get redirected to the Dashboard.</p>
      </div>
    <div style={{marginTop: '3.5rem'}}>
        
      <header>
        <div style={{position: 'absolute', zIndex:'2', left: '1100px', top: '9%'}}>
          <button onClick={handleSignupOpen} style={{color:'#ffffff',background: '#070707', borderRadius: '7.57056px', padding: '10.8306px', fontSize: '19.495px', fontWeight: '300',justifycontent: 'center', width:'154.88px', height: '50.9px'}}>Signup</button> &emsp;
          <button onClick={handleLoginOpen} style={{color:'#000000',border: '1.08306px solid #282828', borderRadius: '7.57056px', padding: '10.8306px', fontSize: '19.495px', fontWeight: '300',justifyContent: 'center', width:'154.88px', height: '50.9px'}}>Login</button>
        </div>
      </header>

      <Modal open={loginOpen} onClose={handleLoginClose}>
          <Fade in={loginOpen}>
          <Grid item container xs={12}>
          
              <form className='signup-modal'>
                <Grid item xs={2} className='leftimg'>
                  <img alt="" src={loginimg} style={{position:'absolute',width:'40%', float:'left',zIndex:'-1', flex:'1'}}/>
                </Grid>
                <Grid item xs={10} className='leftimg' style={{display:'flex',flexWrap: 'wrap', alignItems:'stretch'}}>
                  <p style={{position:'absolute', color:'#F24E1E', width: '72.3px', height: '39.84px', left:'666px', top:'180px',fontstyle: 'normal', fontWeight: '500', fontSize: '26.561px', lineHeight: '40px'}}>Login</p>
                  <p style={{position:'absolute',color:'#FFFFFF', width: '216px', height: '26.4px', left:'666px', top:'220px',fontstyle: 'normal', fontWeight: '300', fontSize: '17.7073px', lineHeight: '40px'}}>Welcome back to Office!</p>
                  
                  <input placeholder='Email e.g : vincidiui@gmail.com' className='nameInput' style={{position:'absolute', padding: '12px', color:'#FFFFFF', background: 'rgba(255, 255, 255, 0.15)', width:'20rem', left:'635px', top: '240px'}}/>
                  <input placeholder='Password' className='nameInput' style={{position:'absolute', color:'#FFFFFF', background: 'rgba(255, 255, 255, 0.15)', width:'20rem', left:'635px', top: '287px'}}/>
                  <input onClick={()=>{navigate('/dashboard')}} type="submit" value="Proceed in" className='imageInputSubmit' style={{position:'absolute', background:'#F24E1E', width:'20rem', height:'2.75rem', left:'666px', top: '360px', alignItems: 'center', padding: '12px'}} />
                  
                  <p style={{position:'absolute',color:'#FFFFFF', width: '72.3px', height: '39.84px', left:'888px', top:'53.69px',fontstyle: 'normal', fontWeight: '300', fontSize: '13.7419px', lineHeight: '40px'}}>New User?</p>
                  <button style={{position:'absolute',color:'#F24E1E', width: '72.3px', height: '39.84px', left:'960px', top:'53.69px',fontstyle: 'normal', fontWeight: '300', fontSize: '13.7419px', lineHeight: '40px'}}>Signup <img alt="" src={righticon} style={{height: '20%'}}/></button>
                  <p style={{position:'absolute',color:'rgba(255, 255, 255, 0.65)', width: '105.6px', height: '18px', left:'666px', top:'435px',fontstyle: 'normal', fontWeight: '300', fontSize: '12px', lineHeight: '18px'}}>Forgot Password?</p>
                </Grid>
                  
                  <button style={{position:'absolute', left:'720px', top:'500px'}}><img alt="" src={windowsicon} style={{height: '20%'}}/></button>
                  <button style={{position:'absolute', left:'800px', top:'500px'}}><img alt="" src={googleicon} style={{height: '20%'}}/></button>
                  <button style={{position:'absolute', left:'880px', top:'500px'}}><img alt="" src={appleicon} style={{height: '20%'}}/></button>

              </form>
          </Grid>
          </Fade>
        </Modal>

      <Modal open={signUpOpen} onClose={handleSignupClose}>
          <Fade in={signUpOpen}>
          <Grid item container xs={12}>
          
              <form className='signup-modal'>
                <Grid item xs={2} className='leftimg'>
                  <img alt="" src={loginimg} style={{position:'absolute',width:'40%', float:'left',zIndex:'-1', flex:'1'}}/></Grid>
                <Grid item xs={10} className='leftimg' style={{display:'flex',flexWrap: 'wrap', alignItems:'stretch'}}>
                <p style={{position:'absolute', color:'#F24E1E', width: '72.3px', height: '39.84px', left:'666px', top:'120px',fontstyle: 'normal', fontWeight: '500', fontSize: '26.561px', lineHeight: '40px'}}>Signup</p>
                  <p style={{position:'absolute',color:'#FFFFFF', width: '250px', height: '26.4px', left:'666px', top:'160px',fontstyle: 'normal', fontWeight: '300', fontSize: '17.7073px', lineHeight: '40px'}}>Hiiii!! Welcome to our space</p>
                  <input placeholder='What do you prefer to be called as?' className='nameInput' style={{position:'absolute', padding: '12px', color:'#FFFFFF', background: 'rgba(255, 255, 255, 0.15)', width:'20rem', left:'635px', top: '193px'}}/>
                  <input placeholder='Email e.g : vincidiui@gmail.com' className='nameInput' style={{position:'absolute', padding: '12px', color:'#FFFFFF', background: 'rgba(255, 255, 255, 0.15)', width:'20rem', left:'635px', top: '240px'}}/>
                  <input placeholder='Password' className='nameInput' style={{position:'absolute', color:'#FFFFFF', background: 'rgba(255, 255, 255, 0.15)', width:'9.8rem', left:'635px', top: '287px'}}/>
                  <input placeholder='Type it again' className='nameInput' style={{position:'absolute', color:'#FFFFFF', background: 'rgba(255, 255, 255, 0.15)', width:'9.8rem', left:'799px', top: '287px'}}/>
                  <input onClick={()=>{navigate('/dashboard')}} type="submit" value="Proceed in" className='imageInputSubmit' style={{position:'absolute', background:'#F24E1E', width:'20rem', height:'2.75rem', left:'666px', top: '360px', alignItems: 'center', padding: '12px'}} />
                  
                  <p style={{position:'absolute',color:'#FFFFFF', width: '200.3px', height: '39.84px', left:'770px', top:'53.69px',fontstyle: 'normal', fontWeight: '300', fontSize: '13.7419px', lineHeight: '40px'}}>Oohh!! Already Existing User?</p> &emsp;
                  <button onClick={handleLoginOpen} style={{position:'absolute',color:'#F24E1E', width: '72.3px', height: '39.84px', left:'960px', top:'53.69px',fontstyle: 'normal', fontWeight: '300', fontSize: '13.7419px', lineHeight: '40px'}}>Login <img alt="" src={righticon} style={{height: '20%'}}/></button></Grid>
                  
                  <button style={{position:'absolute', left:'720px', top:'500px'}}><img alt="" src={windowsicon} style={{height: '20%'}}/></button>
                  <button style={{position:'absolute', left:'800px', top:'500px'}}><img alt="" src={googleicon} style={{height: '20%'}}/></button>
                  <button style={{position:'absolute', left:'880px', top:'500px'}}><img alt="" src={appleicon} style={{height: '20%'}}/></button>

              </form></Grid>
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
    </>
  )
}

export default Home