import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';
import Post from './components/post/Post';

function App() {
  return (
      <div className="app">
        <Post/>
      </div>
  );
}

export default App;
