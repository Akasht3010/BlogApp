import './App.css'
import Header from './Header'
import Post from './Post'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route index element={
          <main>
            <Header />
            <Post />
            <Post />
            <Post />
          </main>
        } />
        <Route path='/login' element={
          <main>
            <Header />
            <div>login</div>
          </main>
        } />
      </Routes>
    </div>
  )
}

export default App
