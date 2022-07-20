import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//styles
import './ListTable.scss';

const ListTable = () => {

    const rows = [
        {
            id:1233,
            product: "Something 1",
            img: "https://cdn.pixabay.com/photo/2018/02/25/19/40/spaghetti-3181557_960_720.jpg",
            customer: "Jan Kowalski",
            date: "1 March",
            amount: 725,
            method: "Online Payments",
            status: "Approved"
        }, {
            id:1234,
            product: "Something 2",
            img: "https://cdn.pixabay.com/photo/2018/02/25/19/40/spaghetti-3181557_960_720.jpg",
            customer: "Jan Kowalski",
            date: "1 March",
            amount: 725,
            method: "Online Payments",
            status: "Cancelled"
        }, {
            id:1235,
            product: "Something 3",
            img: "https://cdn.pixabay.com/photo/2018/02/25/19/40/spaghetti-3181557_960_720.jpg",
            customer: "Jan Kowalski",
            date: "1 March",
            amount: 725,
            method: "Cash",
            status: "Approved"
        }, {
            id:1237,
            product: "Something 14",
            img: "https://cdn.pixabay.com/photo/2018/02/25/19/40/spaghetti-3181557_960_720.jpg",
            customer: "Jan Kowalski",
            date: "1 March",
            amount: 725,
            method: "Online Payments",
            status: "Pending"
        }
    ];

    return (

        <TableContainer component={Paper} className='tableWrapper'>
            <Table
                sx={{
                minWidth: 650
            }}
                aria-label="simple table"
                className='table'>
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell'>Tracking ID</TableCell>
                        <TableCell className='tableCell'>Product</TableCell>
                        <TableCell className='tableCell'>Customer</TableCell>
                        <TableCell className='tableCell'>Date</TableCell>
                        <TableCell className='tableCell'>Amount</TableCell>
                        <TableCell className='tableCell'>Payments Method</TableCell>
                        <TableCell className='tableCell'>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className='tableCell'>{row.id}</TableCell>
                            <TableCell className='tableCell'>
                                <div className='tableCellImgWrapper'>
                                    <img src={row.img} alt="" srcset="" className='tableCellImg' />
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell className='tableCell'>{row.customer}</TableCell>
                            <TableCell className='tableCell'>{row.date}</TableCell>
                            <TableCell className='tableCell'>{row.amount}</TableCell>
                            <TableCell className='tableCell'>{row.method}</TableCell>
                            <TableCell className='tableCell'>
                                <span className={`status ${row.status}`}>{row.status}</span> 
                                </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ListTable;
