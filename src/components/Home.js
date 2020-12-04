import React,{useEffect} from 'react'
import Base from './Base'
//import './App.css';
import Aboutus from './Aboutus';
import Banner from './Banner';
import Mission from './Mission'
import Ourservices from './Ourservices';
function Home() {
useEffect(() => {
  window.scrollTo(0, 0)
}, [])
    return (
        <Base>
            <Banner />
            <Ourservices />
            <Aboutus />
            <Mission />
        </Base>
            
        
    )
}

export default Home
