import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tester from './Components/Tester';
import Validate from './Components/Validate';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact element={<Home/>} path="/"/>
        <Route element={<Tester/>} path="/typing-test"/>
        <Route element={<Validate/>} path="/validate"/>
        <Route element={<Home/>} path="*"/>
      </Routes>
    </BrowserRouter>
      // {/* <div className='bg-theme-secondary text-white py-2 px-5'>
      //   <h2>Typing Test</h2>
      // </div>*/}
  );
}

export default App;
