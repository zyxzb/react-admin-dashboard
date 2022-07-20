import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

//style
import './New.scss';

const New = () => {
    return (
        <div className='new'>
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
            </div>
        </div>
    );
}

export default New;
