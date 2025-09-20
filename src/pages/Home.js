import React from 'react'
import './Home.css'
import Dish from '../components/Dish'
import Carousel from '../components/Carousel'
function Home({onAddToCart}) {
  return (
    <div className='homes'>
    <div className='home'>
    <div className='home-left'>
        <h2>Welcome</h2>
        <p>We’re delighted to have you dine with us. Sit back, relax, and enjoy<br></br> our carefully crafted dishes made with fresh,<br></br> quality ingredients.</p>
    </div>
    <div className='home-right'>
     <img src='https://imgs.search.brave.com/6CgufZ1cxvOZDJhC5Db_OcAvuvqaYhZaaN9loG5uDuE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8x/MS8yMS8xNi8wMi9v/dXRkb29yLWRpbmlu/Zy0xODQ2MTM3XzY0/MC5qcGc'/>
    </div>
    </div>
    <Dish onAddToCart={onAddToCart}/>
    <Carousel/>
    </div>
  )
}

export default Home
