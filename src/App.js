import logo from './logo.svg';
import './App.css';
import { Route ,Link, Routes} from "react-router-dom";
//import { Routes, Route } from 'react-router-dom'  
//import { BrowserRouter as Router, Routes , Route, useParams } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'



const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path="/" exact element={<Home/>}/>
      </Routes>
    </div>
  );
}


export default App;
