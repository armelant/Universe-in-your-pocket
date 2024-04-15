import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./styles/main.css"
import MainPage from './pages/mainPage.js';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;