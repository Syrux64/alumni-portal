import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './component/ui/header/Header';
import Feed from './pages/feed/Feed';
import Profile from './pages/profile/Profile';
import Blog from './pages//blog/Blog.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <div className='webApp'>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/create/blog" element={<Blog/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
