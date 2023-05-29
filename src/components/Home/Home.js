import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
//import '../Navbar/Navbar.css'
import { Box, Button, Typography } from '@mui/material'
import Service from '../service/Service'
import Define from '../define/Define'
import About from '../About Us/About'
//import itsolution from '../../Images/itsolution.jpg'



function Home() {
  return (
    <>
      <div className='home1'>
        <Navbar />
        <Box className="front_page"
          sx={{
            height: "800px",
            width: "100%",
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}>
          <div className='overlay'>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>
          <div>
            <Typography className='text1' sx={{
              color: "azure",
              fontSize: "5rem",
              fontWeight: "bold",
              textAlign: "center",
              position: "relative",
              marginBottom: "100px",
            }}>IT SOLUTIONS &<br />TECHNOLOGY</Typography>
          </div>

          <div>
            <Typography className='text2'
              sx={{
                color: "azure",
                textAlign: "center",
                position: "relative",
                marginTop: "100px",
                marginLeft: "-600px",
                marginBottom: "100px",
                fontSize: "1.2rem",
              }}>
              Accelerate Strategy Execution and Consistency in Revenue Growth!<br />
              We are committed to providing our clients the best strategic<br />
              guidance available
            </Typography>
          </div>



          <div>
            <button className='button1'
            >DISCOVER MORE</button>
          </div>
          <About />
          <img className='img-about'></img>
          <img className='img-about1'></img>
          <div className='about-div'>
            <Typography sx={{
              color:"orangered",
              position:"absolute",
              display:"block",
              marginLeft:"130px",
              marginTop:"40px",
              fontWeight:"bold",
              fontSize:"40px",
            }}>99&nbsp;+</Typography>
            <Typography sx={{
              color:"black",
              position:"absolute",
              display:"block",
              marginLeft:"125px",
              marginTop:"100px",
              fontSize:"15px",
           
            }}>Satisfied Client</Typography>
            <img className='img-div1'></img>
          </div>

          <div className='define1'>
            <Box className='defineBox' sx={{
              position: "absolute",
              transition: "0.5s ease",

            }}>

            </Box>
            <div className='boxDefine'>
              <div className='define2'></div>
              <Typography sx={{
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft: "90px",
                marginTop: "-40px",
              }}>
                Define
              </Typography>
            </div>
          </div>
          <div className='develop1'>
            <Box className='developBox' sx={{
              position: "absolute",

              transition: '0.5s ease',

            }}>

            </Box>
            <div className='boxDevelop'>
              <div className='business'></div>
              <Typography className='textDevelop' sx={{
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft: "90px",
                marginTop: "-40px"
              }}>Develop</Typography>
            </div>

          </div>
          <div className='deliver' >

            <div className='deliver1'>

            </div>
            <div className='box1'>
              <div className='rocket'></div>
              <Typography className='textDeliver' sx={{
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft: "90px",
                marginTop: "-40px"
              }}>Deliver</Typography>
            </div>
          </div>


        </Box>

      </div>

    </>

  )
}

export default Home