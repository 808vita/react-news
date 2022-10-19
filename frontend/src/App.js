import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ArticleList from "./pages/ArticleList";
import FullArticle from "./pages/FullArticle";
import NotVerifiedPage from "./pages/NotVerifiedPage";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <div className="" style={{ padding: "1rem" }}>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/full-article" element={<FullArticle />} />
            <Route path="/not-verified" element={<NotVerifiedPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
