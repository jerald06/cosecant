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
           <li className='hover-me'><a>jerald<ArrowForwardIosIcon sx={{fontSize:"small",float:"right",marginTop:"4px"}}/></a>
           <div className='submenu2'>
            <ul>
                <li><a>Footbal</a></li>
                <li><a>Cricket</a></li>
                <li><a>Tennis</a></li>
            </ul>
           </div>
           </li>
            <li><a>jeraldJR<ArrowForwardIosIcon sx={{fontSize:"small",float:"right",marginTop:"4px"}}/></a></li>
            <li className='hover-me'><a>jerald10<ArrowForwardIosIcon sx={{fontSize:"small",float:"right",marginTop:"4px"}}/></a>
            <div className='submenu2'>
            <ul>
                <li><a>Footbal</a></li>
                <li><a>Cricket</a></li>
                <li><a>Tennis</a></li>
            </ul>
           </div>
            </li>
        </ul>
        </div>
        </Typography>, Link: "#" },
        {
            Name: <Typography className='service'>Services
                <div className='dropdown-content'>   
                
                   <a >Consulting<ArrowForwardIosIcon sx={{fontSize:"small",float:"right",marginTop:"4px"}}/></a>
                    <div className='submenu'>
                   <a >Informatica</a>
                       <a >Salesforce</a>
                     <a >PostgresQL/SQL Server/Oracle </a>
                      <a >Web Development</a>
                    
                    </div>
                   
                    <div>
                    <a >Training<ArrowForwardIosIcon sx={{fontSize:"small",float:"right",marginTop:"4px"}}/></a>
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
                        <img className='cosecant_logo' src='https://cosecantinc.com/wp-content/uploads/2022/11/Cosecant-1.png' />
                      
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