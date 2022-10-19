import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ArticleList from "./pages/ArticleList";
import FullArticle from "./pages/FullArticle";

import UserProfile from "./pages/UserProfile";
import ShowNotVerified from "./components/ShowNotVerified";

function App() {
  return (
    <div className="" style={{ padding: "1rem" }}>
      <BrowserRouter>
        <Header />
        <ShowNotVerified />
        <div>
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/full-article/:id" element={<FullArticle />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
