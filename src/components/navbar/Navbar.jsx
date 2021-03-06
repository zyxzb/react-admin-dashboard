import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { useContext } from "react";
import { ThemeContext } from '../../context/ThemeContext';

//style
import './Navbar.scss';

const Navbar = () => {

    const {dispatch} = useContext(ThemeContext);
    const {darkMode} = useContext(ThemeContext);

    const handleChangeMode = () =>{
        dispatch({type:"TOGGLE"})
    }

    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...'/>
                    <SearchOutlinedIcon/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className='icon'/>
                         <span>English</span> 
                    </div>
                    <div className="item" onClick={handleChangeMode}>
                        {darkMode ? <WbSunnyOutlinedIcon className='icon' style={{color:"yellow"}}/> :<DarkModeOutlinedIcon className='icon'/>}
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className='icon'/>
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className='icon'/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className='icon'/>
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className='icon'/>
                    </div>
                    <div className="item">
                        <img src="https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png" alt="avatar-img" srcset="" className='avatar'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
