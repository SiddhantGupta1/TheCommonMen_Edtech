import React from 'react'
import { Link, useParams } from 'react-router-dom';
import CardBG from '../../assets/CardBG.svg'


const Overview = ({projects}) => {
    console.log(projects)
    const params = useParams()
    const query = params.query
    
    return (
        <>
        {projects.map((e,index) => {
        if(query === e.name)
        { 
            return(
            <div key={index} >
                <p style={{color: 'rgba(0, 0, 0, 0.5)', fontWeight: '500'}}>Upcoming Tasks</p>
                <div className='NoScrollBar' style={{display: 'flex', overflow: 'auto', marginTop: '0.5rem'}}>
                    {e.task.map((e,index) => (
                        <div key={index} style={{background: 'white', borderRadius: '8px', padding: '1rem 1.5rem', marginRight: '0.7rem', textAlign: 'center'}}>
                            <p style={{display: 'inline', color: '#F24E1E', fontSize: '1.2rem'}}>{e.taskDate.slice(0,2)}</p>
                            <p style={{display: 'inline', fontSize: '1.2rem' }} >{e.taskDate.slice(2)}</p>
                            <hr style={{background: 'rgba(0, 0, 0, 0.3)', border: '0', height: '1.5px', margin: '0 7px'}} />
                            <p style={{marginTop: '7px', fontSize: '11px'}} >{e.taskProgress}</p>
                        </div>
                    ))}
                </div>
                <p style={{color: 'rgba(0, 0, 0, 0.5)', fontWeight: '500', marginTop: '2rem'}} >About Us</p>
                <p style={{color: 'rgba(0, 0, 0, 0.8)', fontWeight: '300', marginTop: '0.7rem'}} >{e.desc}</p>
                <p style={{color: 'rgba(0, 0, 0, 0.5)', fontWeight: '500', marginTop: '2rem'}} >Achievers ({e.achievers.length})</p>
                <div className='NoScrollBar' style={{display: 'flex', overflow: 'auto', marginTop: '3.2rem'}}>
                    {e.achievers.map((e,index) => (
                        <div key={index} style={{marginRight: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5px'}} >
                            <img alt="" src={CardBG} style={{borderRadius: '8px', position: 'absolute'}} />
                            <p style={{position: 'relative', color: 'white', fontSize: '0.9rem'}} >{e}</p>
                        </div>
                    ))}

                </div>
            </div>
        )}
        })}
        </>
    )
}

export default Overview