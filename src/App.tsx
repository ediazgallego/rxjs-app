import './App.css';

import { Outlet } from 'react-router-dom';
import Switcher from './components/Switcher';

function App() {
  return (
    <div className="App">
      <Switcher />
      <Outlet />
    </div>
  );
}

export default App;
