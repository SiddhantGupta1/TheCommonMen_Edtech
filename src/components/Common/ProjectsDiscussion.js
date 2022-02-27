import React, { useState } from 'react';
import './ProjectsDiscussion.css';
import Arrow from '../../assets/Arrow.svg';
import CardBG from '../../assets/CardBG.jpg';
import { Link } from 'react-router-dom';
import User1 from '../../assets/User1.svg';
import User2 from '../../assets/User2.svg';
import User3 from '../../assets/User3.svg';

const ProjectsDiscussion = () => {

  const [discussion, setDiscussion] = useState(false)

  const [discussionType, setDiscussionType] = useState('chats')

  const chats = [
    {
      userImg: User1,
      userName: 'Sid',
      userText: 'Guys all set!? I’ve created the group, Eric Are you in for the game?',
      time: '17',
    },
    {
      userImg: User2,
      userName: 'Gena',
      userText: 'Yesss!! we are all set to go...',
      time: '7',
    },
    {
      userImg: User3,
      userName: 'Eric',
      userText: 'Yes!! Sid, I’ve updated the expenses in the discussion board, You can check now.',
      time: '2',
    },
    {
      userImg: User3,
      userName: 'Eric',
      userText: 'Yes!! Sid, I’ve updated the expenses in the discussion board, You can check now.',
      time: '2',
    },
  ]

  const myHands = ['New File', 'New Task', 'Add Notes', 'Post a Collab', 'New Event', 'Discussion Room', 'Add House Member', 'Wave at Investors', 'Edit House Details']

  return (
    <div style={{height: '60vh'}} >

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
          <h1 style={{marginTop: '1rem'}} >My Hands✊</h1>
          <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: '1rem 0', }}>
            {myHands.map((e,index) => (
              <div key={index} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px'}}>
                <img alt="" src={CardBG} style={{width: '100px', height: '100px', borderRadius: '8px'}} />
                <p style={{position: 'absolute', textAlign: 'center', color: 'white', width: '100px'}}>{e}</p>
              </div>
            ))}
          </div>
        </div>

      <div style={{background: '#111111', width: '100%', height:'4rem', padding: '0 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: '1'}}>
        <p style={{color: 'white', fontSize: '1rem' }} >Discussion Room</p>
        <button onClick={() => {setDiscussion(!discussion)}} style={{width: '25px', height: '25px' }} ><img alt="" src={Arrow} className={discussion ? 'invertedArrow' : 'arrow'} /></button>
      </div>

        <div className={discussion ? 'discussion' : 'NoDiscussion'} style={{background: '#111111'}}>
          <div className={discussion ? 'display' : 'NOdisplay'} style={{width: '100%', marginBottom: '1.5rem'}} >
            <button onClick={() => setDiscussionType('chats')} className={discussionType === 'chats' ? 'discussionActive' : 'discussionInactive'} >Chats</button>
            <button onClick={() => setDiscussionType('audio')} className={discussionType === 'audio' ? 'discussionActive' : 'discussionInactive'} >Audio</button>
            <button onClick={() => setDiscussionType('video')} className={discussionType === 'video' ? 'discussionActive' : 'discussionInactive'} >Video</button>
          </div>
          <div className={discussion ? 'display ChatDiscussion NoScrollBar' : 'NOdisplay'}  style={{display: `${discussionType === 'chats' ? 'flex' : 'none'}`, overflow: 'auto'}} >
            {chats.map((e,index) => (
              <div className={discussion ? 'display' : 'NOdisplay'} key={index} style={{position: 'relative'}} >
                <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                  <img alt="" src={e.userImg} style={{width: '40px', marginRight: '10px'}} />
                  <p style={{color: 'white', marginRight: '10px', fontSize: '1rem'}} >{e.userName}</p>
                  <p style={{color: 'rgba(255, 255, 255, 0.3)', fontSize: '0.7rem'}} >{e.time}mins ago</p>
                </div>
                <p style={{marginLeft: '45px', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem'}} >{e.userText}</p>
              </div>
            ))}
            <input className={discussion ? 'display' : 'NOdisplay'} placeholder='Message' style={{position: 'fixed', zIndex: '10', top: '84%', width: '76%', marginTop: '1.5rem', background: 'rgb(196, 196, 196)', padding: '0.6rem 0.5rem', borderRadius: '8px', color: 'black'}} />
          </div>

          <div className={discussion ? 'display AudioDiscussion' : 'NOdisplay'} style={{display: `${discussionType === 'audio' ? 'flex' : 'none'}`}} >
            <p className={discussion ? 'display' : 'NOdisplay'} style={{fontSize: '30px', fontWeight: '600', color: 'white' }}>Discussion Room</p>
            <div className={discussion ? 'display' : 'NOdisplay'} style={{margin: '4rem 0'}}>
              <p style={{textAlign: 'center', color: '#7C7C7C', fontWeight: '500', }}>Eric, Harley Jenkins & 30+ more in the house meet</p>
            </div>
            <Link to="" className={discussion ? 'display' : 'NOdisplay'} style={{padding: '1rem 2rem', background: '#EDEDED', borderRadius: '10px', fontSize: '1rem', fontWeight: '600'}} >Join Audio Meet</Link>
          </div>
          
          <div className={discussion ? 'display VideoDiscussion' : 'NOdisplay'} style={{display: `${discussionType === 'video' ? 'flex' : 'none'}`}} >
            <p className={discussion ? 'display' : 'NOdisplay'} style={{fontSize: '30px', fontWeight: '600', color: 'white' }}>Discussion Room</p>
            <div className={discussion ? 'display' : 'NOdisplay'} style={{margin: '4rem 0'}}>
              <p style={{textAlign: 'center', color: '#7C7C7C', fontWeight: '500', }}>Eric, Harley Jenkins & 30+ more in the house meet</p>
            </div>
            <Link to="" className={discussion ? 'display' : 'NOdisplay'} style={{padding: '1rem 2rem', background: '#EDEDED', borderRadius: '10px', fontSize: '1rem', fontWeight: '600'}} >Join Video Meet</Link>
          </div>
        
        </div>      
      
        
    </div>
  )
}


export default ProjectsDiscussion