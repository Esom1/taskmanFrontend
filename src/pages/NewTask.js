import React, { useEffect,useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/NewTask.css'
import navigation from '../assets/navigation.png'
// import arrowdown from '../assets/arrow-down.png.'
import axios from 'axios';


const NewTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags,setTags] = useState('');
  const [author,setAuthor] = useState('');

  const navigate = useNavigate()
  
  function handlePost(e){
    e.preventDefault()
    axios.post('http://localhost:9090/tasks/create',{
      title,
      description,
      tags,
      author
    })
    navigate('/AllTasks')
  }
  function scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className='new-tasks'>
      <div className='container'>
       <div className='navigate d-flex pt-4'>
       <div> <Link to='/'><img  className='vigate pt-1' src={navigation} alt="" /></Link></div>
       <div className='navigate-tag'> <p>New Task</p></div>
       </div>
       <form className="">
                <div className="">
                <label htmlFor="name">Task Title</label>
                  <input onChange={(e)=> setTitle(e.target.value)} type="text" className='mb-4' placeholder="E.g Project Defense, Assignment ..." />
                  <label htmlFor="name">Description</label>
                  <input onChange={(e)=> setDescription(e.target.value)} className='middle mb-4'  type="text" placeholder="Briefly describe your task..." />
                  <label htmlFor="name">Tags</label>
                  <input onChange={(e)=> setTags(e.target.value)} type="text" placeholder='Urgent   Important' />
                  <label htmlFor="author">Author</label>
                  <input onChange={(e)=> setAuthor(e.target.value)} type="text" placeholder='Written By...' />
                </div>
              </form>
              <div className='text-center mt-4'>
                <button type='submit' onClick={handlePost} className='new-btn'>Done</button>
                </div>
              <div className=' text-center mt-5'>
    <button onClick={scrollToTop} className='footer'>Back To Top</button>
    </div>
      </div>
    </div>
  )
}

export default NewTask