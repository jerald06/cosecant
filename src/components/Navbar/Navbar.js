import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Navbar() {

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-100px";
        }
    }
    window.onscroll = function () {
        scrollFunction()
    };

    const navigate = useNavigate()
    function handle() {
        navigate('/')
    }

    const MenuBox = styled(Box)({
        display: "flex",
        gap: 40,
        marginRight: "90px"
    })
    const SearchItems = [
        { Name: <Typography className='a1' onClick={handle} >Home</Typography>, Link: "#" },
        { Name: <Typography className='about'>About Us
        <div className='submenu1'>
        <ul>
           <li className='hover-me'><a href='jerald'>jerald<ArrowForwardIosIcon sx={{fontSize:"small",float:"right",marginTop:"4px"}}/></a>
           <div className='submenu2'>
            <ul>
                <li><a href='football'>Footbal</a></li>
                <li><a href='cricket'>Cricket</a></li>
                <li><a href='tennis'>Tennis</a></li>
            </ul>
           </div>
           </li>
            <li><a href='jerald jr'>jeraldJR<ArrowForwardIosIcon sx={{fontSize:"small",float:"right",marginTop:"4px"}}/></a></li>
            <li className='hover-me'><a href='jerald10'>jerald10<ArrowForwardIosIcon sx={{fontSize:"small",float:"right",marginTop:"4px"}}/></a>
            <div className='submenu2'>
            <ul>
                <li><a href='football'>Footbal</a></li>
                <li><a href='cricket'>Cricket</a></li>
                <li><a href='tennis'>Tennis</a></li>
            </ul>
           </div>
            </li>
        </ul>
        </div>
        </Typography>, Link: "#" },
        {
            Name: <Typography className='service'>Services
                <div className='dropdown-content'>   
                
                   <a href='consulting'>Consulting<ArrowForwardIosIcon sx={{fontSize:"small",float:"right",marginTop:"4px"}}/></a>
                    <div className='submenu'>
                   <a href='information'>Informatica</a>
                       <a href='salesforce'>Salesforce</a>
                     <a href='postgresql'>PostgresQL/SQL Server/Oracle </a>
                      <a href='web development'>Web Development</a>
                    
                    </div>
                   
                    <div>
                    <a href='arrow icon'>Training<ArrowForwardIosIcon sx={{fontSize:"small",float:"right",marginTop:"4px"}}/></a>
                    </div>
                </div>
            </Typography>, Link: "#"
        },
        { Name: <Typography className='a1'>Careers</Typography>, Link: "#" },
        { Name: <Typography className='a1'>Contact Us</Typography>, Link: "#" },
    ]
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    })


    return (
        <>

            <AppBar elevation={0}
                // className='navbar1'
                id='navbar'

                sx={{
                    position: "sticky",
                }}
            >
                <StyledToolbar sx={{
                    background: "grey",
                    height: "90px",
            
                }}>
                    <Typography>
                        <img className='cosecant_logo' src='https://cosecantinc.com/wp-content/uploads/2022/11/Cosecant-1.png' alt='cosecant logo' />
                      
                    </Typography>
                    <MenuBox>
                        {
                            SearchItems.map((content) => (
                                <Typography sx={{ cursor: "pointer" }}>{content.Name}</Typography>
                            ))
                        }
                    </MenuBox>
                </StyledToolbar>
            </AppBar>
        </>
    )
}

export default Navbar