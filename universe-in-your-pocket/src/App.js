import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./styles/main.css"
import MainPage from './pages/mainPage.js';
import Header from './components/header/header.js';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;