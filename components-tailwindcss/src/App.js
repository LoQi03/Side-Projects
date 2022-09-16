import React  from "react";
import './App.css';
import DropFileInput from "./components/drop-file-input/dropfileinput.component";
import ToastNotification from "./components/toastnotification-service/toastnotification.component";
import ToastNotificationProvider from "./components/toastnotification-service/toastnotificationprovider.component";


function App() {
  const onFileChange = (files) => {
    console.log(files);
}

  return (
    <div className="h-screen w-screen bg-rose-400">
      <ToastNotificationProvider></ToastNotificationProvider>
      <div className=""></div>
      <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            />
      
      </div>
  );
}


export default App;
