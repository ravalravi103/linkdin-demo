import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Feed from './Component/Feed/Feed';
import Header from './Component/Header/Header';
import RightFeed from './Component/RightFeed/RightFeed';
import Sidebar from './Component/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
          <Header />
          <div className="app__body">
                <Sidebar />
                <Feed />
                <RightFeed />
          </div>
    </div>
  );
}

export default App;
