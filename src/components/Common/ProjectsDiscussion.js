import React, { useState } from 'react';
import './ProjectsDiscussion.css';
import Arrow from '../../assets/Arrow.svg'
import { Link } from 'react-router-dom';

const ProjectsDiscussion = () => {

  const [discussion, setDiscussion] = useState(true)

  return (
    <div style={{height: '60vh'}} >

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '50vh', background: 'red'}} >
          <h1>My cards👐</h1>
      
        </div>

      <div style={{background: '#111111', width: '100%', height:'4rem', padding: '0 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: '1'}}>
        <p style={{color: 'white', fontSize: '1rem' }} >Discussion Room</p>
        <button onClick={() => {setDiscussion(!discussion)}} ><img alt="" src={Arrow} className={discussion ? 'invertedArrow' : 'arrow'} /></button>
      </div>

        <div className={discussion ? 'discussion' : 'NoDiscussion'} style={{background: 'white'}}>
          <p className={discussion ? 'display' : 'NOdisplay'} style={{fontSize: '30px', fontWeight: '600' }}>Discussion Room</p>
          <div className={discussion ? 'display' : 'NOdisplay'} style={{margin: '4rem 0'}}>
            <p style={{textAlign: 'center', color: '#7C7C7C', fontWeight: '500', }}>Eric, Harley Jenkins & 30+ more in the house meet</p>
          </div>
          <Link to="#" className={discussion ? 'display' : 'NOdisplay'} style={{padding: '1rem 3.5rem', background: '#212121', color: 'white', borderRadius: '10px', fontSize: '1rem', fontWeight: '600'}} >Join Meet</Link>
        </div>      
      
        
    </div>
  )
}


export default ProjectsDiscussion