import React from 'react';
import Chart from '../../components/chart/Chart';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import ListTable from '../../components/table/ListTable';

//style
import './Single.scss';

const Single = () => {
    return (
        <div className='single'>
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">

                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h2 className='information'>Information</h2>
                        <div className="item">
                            <img
                                src="https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_960_720.jpg"
                                alt="ItemImg"/>
                            <div className="details">
                                <h3>Jan Kowalski</h3>
                                <div className="detailItem">
                                    <span className='itemKey'>Email:</span>
                                    <span className='itemValue'>jankowalski@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className='itemKey'>Phone:</span>
                                    <span className='itemValue'>666 666 666</span>
                                </div>
                                <div className="detailItem">
                                    <span className='itemKey'>Address:</span>
                                    <span className='itemValue'>Jakiś tam ul. Prosta</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart title="User Spending (Last 6 Months)"/>
                    </div>
                </div>
                <div className="bottom">
                    <div className="table">
                        <h2>Last transactions</h2>
                        <ListTable/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Single;
