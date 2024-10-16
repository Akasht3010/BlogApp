import './App.css'
import Header from './Header'
import Post from './Post'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider } from './UserContext';

function App() {
  return (
    <div>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </div>
  )
}

export default App
