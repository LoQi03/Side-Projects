import './App.css';
import Modal from './components/modal.component';
import Popover from './components/popover.component';

function App() {
  return (
    <div className='h-screen w-screen bg-blue-500'>
    <Modal zindex="5" title="Test" buttontext="valami" isVisible={true}><div>sdfjadskléfjkléadsjkléfdaskléjfsdakléjasdfjklasdfjlkédasfjklsdjkfaljklésadyfí;</div></Modal>
    <Popover></Popover>
    </div>
  );
}


export default App;
