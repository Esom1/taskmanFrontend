import React from 'react'
import '../styles/Edit.css'
import { Link } from 'react-router-dom'
import navigation from '../assets/navigation.png'

const Edit = () => {
  return (
    <div className='new-tasks'>
    <div className='container'>
     <div className='navigate d-flex pt-4'>
     <div> <Link to='/'><img  className='vigate pt-1' src={navigation} alt="" /></Link></div>
     <div className='navigate-tag'> <p>Edit Task</p></div>
     </div>
     <form class="">
              <div class="">
              <label for="name">Task Title</label>
                <input type="text" className='mb-4' />
                <label for="name">Description</label>
                <input className='middle mb-4'  type="text" />
                <label for="name">Tags</label>
                <input type="text" placeholder='Urgent   Important' />
              </div>
            </form>
            <div className='text-center mt-4'><Link className='text-decoration-none new-btn' to='/'>Done</Link></div>
            <div className=' text-center mt-5'>
  <Link className='footer' to='/'>Back To Top</Link>
  </div>
    </div>
  </div>
  )
}

export default Edit