import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './drop-file-input.css';

import { FileImageConfig } from '../../config/ImageConfig'; 
import uploadImg from '../../assets/cloud-upload-regular-240.png';

const DropFileInput = props => {

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

    return (
        <>
        <div className='bg-white p-4 rounded-lg'>
            <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="drop-file-input__label flex flex-col place-items-center border-dashed border-2 bg-white rounded-lg border-slate-400">
                    <img src={uploadImg} alt="" />
                    <p className="text-slate-400">Drop your files here</p>
                </div>
                <input type="file" value="" onChange={onFileDrop}/>
            </div>
            {
                fileList.length > 0 ? (
                    <div className="">
                        <p className="p-4 bg-slate-300 rounded-lg font-semibold mb-2 text-lg">
                            Ready to upload
                        </p>
                        {
                            fileList.map((item, index) => (
                                <div className='bg-slate-200 rounded-lg'>
                                <div key={index} className="drop-file-preview__item p-2">
                                    <img src={FileImageConfig[item.type.split('/')[1]] || FileImageConfig['default']} alt="" />
                                    <div className="drop-file-preview__item__info">
                                        <p>{item.name}</p>
                                        <p>{item.size} byte</p>
                                    </div>
                                    <span className="drop-file-preview__item__del bg-white rounded-full shadow-lg pb-1" onClick={() => fileRemove(item)}>x</span>
                                </div>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
            </div>
        </>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default DropFileInput;
