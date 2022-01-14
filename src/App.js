import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/global/Header';
import Homepage from './pages/Homepage';
import Jokepage from './pages/Jokepage';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <BrowserRouter> */}
      {/* <Header /> */}
      <Routes>
        <Route path='/you-got-the-joke' element={<Jokepage />} />
        <Route path='/' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
