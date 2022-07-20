import React from 'react';
import DataTable from '../../components/dataTable/DataTable';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

//style
import './List.scss';

const List = () => {
    return (
        <div className='list'>
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <DataTable/>
            </div>
        </div>
    );
}

export default List;
