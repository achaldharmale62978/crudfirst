
import './App.css';
import Navbar from './component/LYOUT/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/LYOUT/Home';
import About from './component/LYOUT/About';
import History from './component/LYOUT/History';
import Login from './component/Pages/Login';
import Showdata from './component/Pages/Showdata';
import Gallary from './component/LYOUT/Gallary';
import Update from './component/Pages/Update';
import Delete from './component/Pages/Delete';
import Error from './component/Error'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/history' element={<History/>}></Route>
          <Route path='/gallary' element={<Gallary/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/pages/showdata' element={<Showdata/>}></Route>
          <Route path='/pages/update/:usersId' element={<Update/>}></Route>
          <Route path='/pages/delete/:usersId' element={<Delete/>}></Route>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
