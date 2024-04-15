import { BrowserRouter, Route, Routes } from 'react-router-dom';

import main from './pages/mainPage.js';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<main />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;