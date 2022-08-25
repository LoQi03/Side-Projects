import React,{useState} from "react";
import './App.css';
import Popover from './components/popover.component';

function App() {
  const [iv,siv] = useState(true);
  
  const PopoverValami=()=>
  {
    return(iv ? <Popover popoverId="test" isVisible={iv} elementId={'buttontest'} preferredPosition={'TOP'} useAnchorElementWidth={false} isFlipEnable={true}><div className=' bg-white h-80 w-80'>fasdfasdf</div></Popover>:"");
  }

  function test(){
    if(iv)
    {
      siv(false)
    }
    else{
    siv(true)}
  }

  return (
    <div className='h-screen w-screen bg-blue-500'>
      <div className='absolute flex justify-center items-center h-screen w-screen'><button id='buttontest' className='bg-white' onClick={test}>test</button></div>
    <PopoverValami></PopoverValami>
    </div>
  );
}


export default App;
