import React  from "react";
import { AlertList } from "./AlertList";
import './App.css';
import DropFileInput from "./components/drop-file-input/dropfileinput.component";
import ToastNotification from "./components/toastnotification-service/toastnotification.component";


function App() {
  const onFileChange = (files) => {
    console.log(files);
}

  return (
    <div className="h-screen w-screen bg-rose-400 p-2">

      <ToastNotification AlertList={AlertList} type="warning"></ToastNotification>
      <div className="m-[30rem]"></div>
      <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            />
      </div>
  );
}


export default App;
