import { Outlet } from 'react-router-dom';
import './App.css';
import Switcher from './components/Switcher';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <Switcher />
      {/*<Test />*/}
      <Outlet />
    </div>
  );
}

export default App;
