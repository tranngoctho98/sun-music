import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PageWebsite from "./pages/page-website";
import HomePage from "./pages/home-page/home-page";
import ContactPage from "./pages/contact-page/contact-page";
import NotFoundPage from "./pages/errors/not-found-page";
import NewsPage from "./pages/new-page/news-page";
import IntroducePage from "./pages/introduce-page/Introduce-page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageWebsite />}>
            <Route index element={<HomePage />} />
            <Route path="gioi-thieu" element={<IntroducePage />} />
            <Route path="cac-khoa-hoc" element={<NewsPage />} />
            <Route path="noi-mua-nhac-cu" element={<NewsPage />} />
            <Route path="tin-tuc" element={<NewsPage />} />
            <Route path="lien-he" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
