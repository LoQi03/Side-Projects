import React  from "react";
import './App.css';
import DropFileInput from "./components/drop-file-input/dropfileinput.component";
import ToastNotification from "./components/toastnotification-service/toastnotification.component";


function App() {
  const onFileChange = (files) => {
    console.log(files);
}

  return (
    <div className="h-screen w-screen bg-rose-400 p-2">
      <ToastNotification alert="Egy nagyon de nagyon szép hosszú szöveg, tök jó hogy itt van" type="warning"></ToastNotification>
      <div className="m-[30rem]"></div>
      <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            />
      
      </div>
  );
}


export default App;
