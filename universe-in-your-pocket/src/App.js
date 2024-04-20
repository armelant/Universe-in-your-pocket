import { Route, Routes } from "react-router-dom";
import "./styles/main.css";
import Main from "./components/Main/Main.js";
import Header from "./components/header/header.js";
import News from "./components/News/News.js";
import Register from "./components/Register/Register.js";
import Authorization from "./components/Authorization/Authorization.js";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/authorization" element={<Authorization />}>
          =
        </Route>
      </Routes>
    </div>
  );
};

export default App;
