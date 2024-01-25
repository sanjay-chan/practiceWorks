import React from 'react'
import './Home.css';
import myImage from './smart.jpg';
const Home = () => {
  return (
    <div className='container-one'>
     <div className='top-border'>
      <h5>LIMITED-TIME DEAL: 50% OFF of Business Plan</h5>
     </div>
  <div className='img-container'>
    <img src={myImage} /></div>
     

     <div className='nav-bar'>
     <h3>Smart Drive</h3>
     </div>
    </div>
  )
}

export default Home;