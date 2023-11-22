import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

    <div className="App">
 
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
  
    </div>

  );
}

export default App;
