import React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {userColumns, userRows} from '../../DataSources';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {Link} from 'react-router-dom';

//style
import './DataTable.scss';

const DataTable = () => {

    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: () => {
                return (
                    <div className='cellAction'>
                        <Link
                            to="/users/test"
                            style={{
                            textDecoration: "none"
                        }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div className="viewButton">Delete</div>
                    </div>
                )
            }
        }
    ]
    return (
        <div className='dataTable'>
            <div className="dataTableTitle">
                <h2>Add New User</h2>
                <Link to="/users/new">
                    <AddCircleOutlineOutlinedIcon className='icon'/>
                </Link>
            </div>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection/>
        </div>
    );
}

export default DataTable;
