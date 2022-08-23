import './App.css';
import Modal from './components/modal.component';

function App() {
  return (
    <div className='h-screen w-screen bg-blue-500'>
    <Modal zindex="5" title="Test" buttontext="valami" isVisible={true}><div>Valami skdjfélkasdjfélksdajfélajsdéklfjasdékljékljsadélfj</div></Modal>
    </div>
  );
}


export default App;
