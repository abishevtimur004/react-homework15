import { Routes, Route } from "react-router-dom";
import Header from "./components/core/Header";
import Sidebar from "./components/core/Sidebar";
import PopularBooks from "./pages/PopularBooksPage";
import FavoriteBook from "./pages/FavoriteBooksPage";
import IntroPage from "./pages/IntroPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="container">
        <div className="content">
          <Routes>
            <Route path="/" element={<IntroPage/>} />
            <Route path="/favorite" element={<FavoriteBook />} />
            <Route path="/popular" element={<PopularBooks />} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
