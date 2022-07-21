import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';

//style
import './New.scss';

const New = ({inputs ,title}) => {

    const [file, setFile] = useState('');

    const handleHhangeImage = (e) => {
         setFile(e.target.files[0]);
         
    }

    return (
        <div className='new'>
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h2>{title}</h2>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/add-photo-icon/add-photo-icon-19.jpg"}
                            alt="avatar/img"
                            srcset=""/>
                    </div>
                    <div className="right">
                        <form action="">
                            <div className="formInput">
                                <label htmlFor='file' style={{cursor:"pointer"}}>Image:  <DriveFolderUploadOutlinedIcon className='icon'/></label>
                                <input type="file" id='file' style={{display: "none"}} onChange={handleHhangeImage}/>
                            </div>
                            {inputs.map((input, index) => (
                                <div className="formInput" key={index}>
                                <label>{input.label}</label>
                                <input type={input.type} placeholder={input.placeholder}/>
                            </div>
                            ))}
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default New;
