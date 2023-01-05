import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Header from './components/header/header';

function App() {
  return <Router>

    <Header />

    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  </Router>
}

export default App;
