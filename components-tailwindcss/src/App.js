import React  from "react";
import './App.css';
import DropDown from "./components/dropdown.component";
import { MenuItems } from "./MenuItems";


function App() {
  return (
    <div className='h-screen w-screen bg-blue-500'>
      <DropDown id="test" List={MenuItems} placeHolder="Valami"></DropDown>
    </div>
      
  );
}


export default App;
