import React from 'react';
import './ProjectsDiscussion.css';
import Arrow from '../../assets/Arrow.svg'

const ProjectsDiscussion = () => {
  return (
    <div >
      <div style={{background: 'white', padding: '5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{fontSize: '30px', fontWeight: '600' }}>Discussion Room</p>
        <div style={{margin: '5rem 0'}}>
          <p style={{textAlign: 'center', color: '#7C7C7C', fontWeight: '500', }}>Eric, Harley Jenkins & 30+ more in the house meet</p>
        </div>
        <button style={{padding: '1rem 3.5rem', background: '#212121', color: 'white', borderRadius: '10px', fontSize: '1rem', fontWeight: '600'}} >Join Meet</button>
      </div>

      <div style={{background: '#111111', width: '100%', height:'4rem', padding: '0 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <p style={{color: 'white', fontSize: '1rem' }} >Discussion Room</p>
        <img alt="" src={Arrow} />
      </div>
    </div>
  )
}


export default ProjectsDiscussion