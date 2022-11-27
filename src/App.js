import './App.css';
// import Navbar from './components/Navbar';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div>
      <BrowserRouter>
      <AppRouter/>
      {/* <Navbar/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
