import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import { Modal, Fade} from '@mui/material';

const Notes = ({ projects }) => {

  const params = useParams()
  const query = params.query

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [open1, setOpen1] = useState(false)
  const handleModalClose = () => setOpen1(false)
  const handleModalOpen = () => setOpen1(true)

  return (
    <>
    {projects.map((e,index) => {
      if(query === e.name)
      {
        return(
          <div key={index} style={{marginTop: '4rem', display: 'flex', }} >
            {e.notes.map((e,index) => (
              <div key={index}>
                <button onClick={handleOpen} style={{width: '100px', height: '100px', borderRadius: '8px', color: 'white', fontWeight: '500', fontSize: '1.1rem', background: 'rgb(209, 179, 8)', marginRight: '2rem' }} >Note #{index+1}</button>
                  <Modal open={open} onClose={handleClose}>
                    <Fade in={open}>
                        <form className='NotesModal' >
                          <h2 style={{color: 'white', marginBottom: '1rem'}} >Note #{index}</h2>
                          <textarea className='NotesModalInput'>{e}</textarea>
                          <input type="submit" value="Save" style={{color: 'brown', fontWeight: '600', fontSize: '1rem', padding: '5px 10px', background: 'none', marginTop: '10px'}} />
                        </form>
                    </Fade>
                  </Modal>
              </div>
            ))}
            <button onClick={handleModalOpen} style={{width: '100px', height: '100px', background: 'black', color: 'white', fontSize: '3rem', fontWeight: '300', borderRadius: '8px' }} >+</button>
                  <Modal open={open1} onClose={handleModalClose}>
                    <Fade in={open1}>
                        <form className='NotesModal' >
                          <h2 style={{color: 'white', marginBottom: '1rem'}} >New Note</h2>
                          <textarea className='NotesModalInput'></textarea>
                          <input type="submit" value="Save" style={{color: 'brown', fontWeight: '600', fontSize: '1rem', padding: '5px 10px', background: 'none', marginTop: '10px'}} />
                        </form>
                    </Fade>
                  </Modal>
          </div>
        )
      }
    })}
    </>
  )
}

export default Notes