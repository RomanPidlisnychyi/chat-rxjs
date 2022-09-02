import { Outlet } from 'react-router-dom';
import './App.css';
import Switcher from './components/Switcher';
import Test from './components/Test';

function App() {
  // !TODO checking branch rename
  return (
    <div className="App">
      <Switcher />
      {/*<Test />*/}
      <Outlet />
    </div>
  );
}

export default App;
