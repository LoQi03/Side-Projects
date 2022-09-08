import {React,useState} from "react";

const UploadFileContainer = (props)=>{
    const [selectedFile, setSelectedFile] = useState(null);
    const [message,setMessage] = useState("Choose a file!")
    return(
        <div className="bg-white flex justify-center items-center h-20">
        <input  className="opacity-0 w-full h-full" type="file" value={props.file} style={{zIndex:5}}></input>
        <div className="absolute flex justify-around">
        <div>Icon</div>
        <div>{selectedFile === null ? message : props.filename}</div>
        </div>
        </div>
    );

}

export default UploadFileContainer;