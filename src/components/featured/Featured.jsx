import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar} from 'react-circular-progressbar';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

//styles
import './Featured.scss';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1>Total revenue</h1>
                <MoreVertIcon fontSize='xsmall' className='icon'/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={`${ 70}%`} strokeWidth='5'/>
                </div>
                <p className='title'>Total sales today</p>
                <p className='amount'>$300</p>
                <p className='desc'>Prev transactions processing. Last payments...</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpIcon/>
                            $12.4k</div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon/>
                            $12.4k</div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpIcon/>
                            $12.4k</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
