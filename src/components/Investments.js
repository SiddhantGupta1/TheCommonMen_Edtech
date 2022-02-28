import React from 'react'
import { Grid } from '@mui/material';
import LeftSideNav from './Common/LeftSideNav';
import InvestmentsBG from '../assets/InvestmentsBG.jpg';
import members from '../assets/members.svg'
import {invest} from './JSON/JSON'

const Investments = () => {

  return (
    <>
    <div style={{position: 'fixed', zIndex: '10', top: '0%', width: '100%', height: '3.5rem', fontSize: '0.9rem', background: '#FFCC4D', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <p>This is where you can invest or get funded for your projects. This is all under development. Stay Connected 😁✨</p>
    </div>
    
      <Grid item container xs={12} style={{marginTop: '3.5rem'}} >
        <Grid item xs={2} style={{background: 'white', position: 'relative'}} >
            <div style={{position: 'fixed', width: '16rem'}} >
                <LeftSideNav />
            </div>
        </Grid>

        <Grid item xs={10}>
            <div style={{position: 'relative' }} >
                <img alt="" src={InvestmentsBG} style={{width: '100%', position: 'absolute'}} />
                <div style={{position: 'relative', width: '100%', height: '19.5rem', padding: '4.5rem 0 0 4rem', }}>
                    <p style={{color: 'white', fontSize: '4rem', fontWeight: '500' }} >Invest</p>
                    <p style={{color: 'white', fontSize: '1.5rem', fontWeight: '300' }} >on Projects, Startups & Be a part of it’s amazing journey</p>
                </div>
            </div>
            <div style={{width: '100%', padding: '0 4rem'}}>
                <p style={{color: 'rgba(0, 0, 0, 0.7)', marginBottom: '1rem'}} >Top Recommended Projects</p>
                <div className='NoScrollBar' style={{display: 'flex', width: '100%', overflow: 'auto'}} >
                    {invest.map((e,index) => (
                        <div key={index} style={{position: 'relative', minWidth: '8rem', marginRight: '3rem'}}>
                            <img alt="" src={e.img} style={{position: 'absolute', borderRadius: '8px', width: '8rem', height: '10rem'}} />
                            <div style={{position: 'relative', margin: ' 0.7rem 0.6rem'}}>
                                <div style={{background: 'white', marginBottom: '2rem', display: 'flex', justifyContent: 'center', borderRadius: '10px', width: '2rem'}}>
                                    <img alt="" src={members} style={{width: '15px', height: '20px'}} />
                                    <p style={{fontSize: '13px'}} >{e.members}</p>
                                </div>
                                <p style={{fontWeight: '500', fontSize: '1rem', color: 'white', height: '3rem'}} >{e.name}</p>
                                <p style={{fontWeight: '300', fontSize: '0.6rem', color: 'rgba(255, 255, 255, 0.7)'}} >looking for</p>
                                <p style={{fontWeight: '600', fontSize: '1rem', color: 'white'}}>${e.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{width: '100%', background: '#222222', height: '9rem', margin: '2rem 0', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <p style={{color: 'white', marginBottom: '10px', fontWeight: '600', fontSize: '0.9rem'}} >Become a Partner with us!! What Say?</p>
                        <p style={{color: 'white', marginBottom: '10px', fontWeight: '400', fontSize: '0.7rem', width: '11rem', textAlign: 'center'}} >Whatever you want to Invest, Let’s make it 50%</p>
                        <p style={{color: 'white', marginBottom: '4px', fontWeight: '600', fontSize: '0.8rem'}} >You pay 50%, We pay 50%</p>
                        <p style={{color: 'white', marginBottom: '', fontWeight: '300', fontSize: '0.5rem'}} >Collab</p>
                </div>

            </div>
        </Grid>
    
    </Grid>
    </>
  )
}

export default Investments