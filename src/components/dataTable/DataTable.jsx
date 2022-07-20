import React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {userColumns, userRows} from '../../DataSources';

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
                        <div className="viewButton">View</div>
                        <div className="viewButton">Delete</div>
                    </div>
                )
            }
        }
    ]
    return (
        <div className='dataTable'>
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