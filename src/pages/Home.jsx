import React from 'react'
import Head from '../Components/Head'
import Model from '../Components/Model'
import Solution from '../Components/Solution'
import Recent from '../Components/Recent'
import Footer from '../Components/Footer'  
// import OurServices from "../Components/OurServices";  
const Home = () => {
  return (
    <div>
       
      <Head />
      <Model/>
      
      <Recent/>
      <Solution/>
      {/* <Contact/> */}
      {/* <OurServices/> */}
      <Footer/>
      

    </div>
  )
}

export default Home
