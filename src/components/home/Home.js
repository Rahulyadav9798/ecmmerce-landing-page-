import React from 'react'
import './home.scss'
import Products from  '../products/Products'
import Carousels from './cards/Carousels'



function Home() {
    return (
        <>
        <div className="home">
            
            <div className="banner">
            <Carousels/>
            <Products />
          
        
        </div>
                    
        </div>
        </>
)
}

export default Home
