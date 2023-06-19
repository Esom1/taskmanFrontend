import React ,{useEffect, useState}from 'react';
import { Link } from 'react-router-dom';
import '../styles/AllTask.css';
import editicon from '../assets/clarity_note-edit-line.png'
import binicon from '../assets/bin-icon.png'
import axios from 'axios'


const AllTask = () => {
  const [data,setData] = useState([]);
  let url = 'https://task-manager-a6jl.onrender.com/tasks/alltask'
  const getFetchedData = async () =>{
    let fetchedUrl = await axios(url);
    setData(fetchedUrl.data)
  }
  useEffect(()=>{
    getFetchedData()
  },[]);

  function handleDelete(id) {
    axios.delete(`https://task-manager-a6jl.onrender.com/tasks/delete/${id}`)
    window.location.reload()
  }
  
 
  return (
    <div className='all-task'>
     <section className='container'>
     <div className='first pt-5 d-flex justify-content-between align-items-center'>
    <div className='top'>
    <h1>My Tasks</h1>
    </div>
   <div>
   <Link className='text-decoration-none mt-3 mb-1 add-new' to='/NewTasks'>+ Add New Tasks</Link>
   </div>
     </div>
    {data.map((datum)=>{
      const{_id,title,description,tags,author} = datum;
      return(
        <div key={_id} className='border border-2 mb-5'>
          <div className='task-holder d-flex justify-content-between align-items-center mt-2 border-bottom'>
          <p>{tags}</p>
          <div className='d-flex gap-2'>
            <button className='btn-1' ><img className='edit' src={editicon} alt="" /> Edit</button>
            <button className='btn-2' onClick={()=> handleDelete(_id)}> <img className='bin' src={binicon} alt="" /> Delete</button>
          </div>
          </div>
          <div>
            <h2 className='title'>{title}</h2>
            <p>{description}</p>
            <p className='fw-bold'>Written By: {author}</p>
          </div>
        </div>
      )
    })}
    <div className=' text-center mt-5'>
    <Link className='footer' to='/'>Back To Top</Link>
    </div>
     </section>
    </div>
  )
}

export default AllTask