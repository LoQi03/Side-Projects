import React  from "react";
import './App.css';
import UploadFileContainer from './components/uploadFilecontainer.component'


function App() {
  return (
    <div className='h-screen w-screen bg-blue-500 flex justify-center items-center'>
      <UploadFileContainer className="h-10 h-32"></UploadFileContainer>
    </div>
      
  );
}


export default App;
