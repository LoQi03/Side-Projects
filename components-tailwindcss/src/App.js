import React  from "react";
import './App.css';
import DropFileInput from "./components/drop-file-input/dropfileinput.component";


function App() {
  const onFileChange = (files) => {
    console.log(files);
}

  return (
    <div className="h-screen w-screen bg-sky-400 p-2">
      <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            />
      </div>
  );
}


export default App;
