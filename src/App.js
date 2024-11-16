import React from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import Preview from './Preview';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Chats from './Chats';
import ChatView from './ChatView';
import { useDispatch, useSelector } from 'react-redux';
import { selectuser } from './features/appSlice';
import Login from './Login';


function App() {
  const user = useSelector(selectuser);
  const dispatch = useDispatch();


  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ):(
          <div className='app__body'>
          <Routes>
            <Route path="/chats/view" element={<ChatView />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/preview" element={<Preview />} />
            <Route exact path="/" element={<WebcamCapture />} />
          </Routes>
        </div>

        ) }
      </Router>
    </div>
  );
}

export default App;
