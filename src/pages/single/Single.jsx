import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

//style
import './Single.scss';

const Single = () => {
    return (
        <div className='single'>
            <Sidebar/>
            <div className="singleContainer">
               <Navbar/> 
               single
            </div>
        </div>
    );
}

export default Single;
