import React from 'react';
import './Discover.css';
import SearchIcon from '../assets/SearchIcon.svg';
import BGimg1 from '../assets/BGimg1.svg';
import LeftSideNav from './Common/LeftSideNav';
import {Grid} from '@mui/material';

const Discover = () => {

    const cards = [
        {
          bg: BGimg1,
          project: 'Saas Project',
          house: 'The Gigglers',
          progress: '60',
          edited: 'Last Edited 12h ago',
        },
        {
          bg: BGimg1,
          project: 'Microsoft Challenge',
          house: 'Elipsers',
          progress: '40',
          edited: 'Last Edited 12h ago',
        },
        {
          bg: BGimg1,
          project: 'Android Task Multitasking',
          house: 'Turbonators',
          progress: '90',
          edited: 'Last Edited 12h ago',
        },
        {
          bg: BGimg1,
          project: 'Saas Project',
          house: 'Elipsers',
          progress: '20',
          edited: 'Last Edited 12h ago',
        },
        {
            bg: BGimg1,
            project: 'Microsoft Challenge',
            house: 'Elipsers',
            progress: '50',
            edited: 'Last Edited 12h ago',
          },
          {
            bg: BGimg1,
            project: 'Vidya Vahini',
            house: 'Turbonators',
            progress: '90',
            edited: 'Last Edited 12h ago',
          },
          {
            bg: BGimg1,
            project: 'Saas Project',
            house: 'Elipsers',
            progress: '10',
            edited: 'Last Edited 12h ago',
          },
          {
            bg: BGimg1,
            project: 'Design Heist',
            house: 'Elipsers',
            progress: '100',
            edited: 'Last Edited 12h ago',
          },
          {
            bg: BGimg1,
            project: 'Android Task Multitasking',
            house: 'Turbonators',
            progress: '45',
            edited: 'Last Edited 12h ago',
          },
          {
            bg: BGimg1,
            project: 'Saas Project',
            house: 'Elipsers',
            progress: '30',
            edited: 'Last Edited 12h ago',
          },
        
      ]

  return (
      <Grid item container xs={12} >
          <Grid item xs={2} style={{background: 'white'}} >
              <LeftSideNav />
          </Grid>
          <Grid item xs={10}>
    <div className='DiscoverSection' >
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <img alt="" src={SearchIcon} style={{marginRight: '-35px', zIndex:'2', position: 'relative' }} />
            <input placeholder='Search topics, etc.' />
        </div>

        <div className='discoverCards' >
            {cards.map((e,index) => (
                <div key={index} style={{width: '18.5rem', margin: '1rem 2rem' }}>

                    <div style={{position: 'relative' }}>
                        <img alt="" src={e.bg} style={{position: 'absolute', width: '18.55rem', borderRadius: '10px 10px 0 0'}} />
                        <div style={{position: 'relative', height: '8.75rem', padding: '2.5rem 0 0 1rem', borderRadius: '10px 10px 0 0', background: 'linear-gradient(180deg, rgba(3, 3, 3, 0) -12.5%, #000000 115.3%),url()'}} >
                        <p style={{color: 'white', fontSize: '1rem'}} >{e.house}</p>
                        <p style={{color: 'white', fontWeight: '500', fontSize: '1.6rem'}} >{e.project}</p>
                        </div>
                    </div>

                    <div style={{background: 'white', padding: '0.6rem 0.7rem', borderRadius: '0 0 10px 10px' }}>
                        <div style={{width: '100%', height: '2px', background: '#E6E6E6', borderRadius: '2px'}}></div>
                        <div style={{width: `${e.progress}%`, height: '2px', background: '#333333', borderRadius: '2px', transform: 'translateY(-2px)' }}></div>
                        <p style={{float: 'left' }}>{e.progress}%</p>
                        <p style={{float: 'right', color: '#D3D3D3'}}>100%</p>

                        <p style={{color: 'rgba(0, 0, 0, 0.3)', fontSize: '0.8rem', marginTop: '2rem'}}>{e.edited}</p>
                    
                    </div>
                
                </div>
            ))}
        </div>
    </div>
    </Grid>
    </Grid>
  )
}

export default Discover