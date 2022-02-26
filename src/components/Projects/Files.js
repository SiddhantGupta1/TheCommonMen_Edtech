import React from 'react';
import { useParams } from 'react-router-dom';

const Files = ({projects}) => {

  const params = useParams()
  const query = params.query

  console.log(projects)
  return (
    <>
    {projects.map((e,index) => {
      if(query === e.name)
      {
        return(
          <div key={index} style={{marginTop: '3rem'}}>
            <div style={{display: 'flex', width: '100%', justifyContent: 'center', marginBottom: '2rem'}}>
              <input type='file' className='projectsFileInput' />
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', padding: '0 2rem'}}>
              {e.files.map((e,index) => (
                <div key={index} style={{margin: '1rem', textAlign: 'center'}} >
                  <img alt="" src={e.fileImg} style={{width: '100px', height: '100px'}} />
                  <p style={{width: '8rem' }} >{e.fileName}</p>
                </div>
              ))}
            </div>
          </div>
        )
      }
    })}
   
    </>
  )
}

export default Files