import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/global/Header';
import Homepage from './pages/Homepage';

function App() {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
