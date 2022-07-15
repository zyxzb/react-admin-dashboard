import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

//styles
import './Home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                home Container
            </div>
        </div>
    );
}

export default Home;
