import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home/Home'
import VideoPlayer from './VideoPlayer/VideoPlayer'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/player/:videoId' element={<VideoPlayer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
