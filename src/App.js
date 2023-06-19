import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbars from './layout/Navbars';
import Footer from './layout/Footer';
import Home from './pages/Home';
import AllTask from './pages/AllTask';
import NewTask from './pages/NewTask';
import Edit from './pages/Edit';



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbars/>
    <Routes>
    <Route index element={<Home/>}/>
    <Route path='/NewTasks' element={<NewTask/>}/> 
    <Route path='/AllTasks' element={<AllTask/>}/> 
    <Route path='/Edit' element={<Edit/>}/> 
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
