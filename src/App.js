import './styles/css/index.css';
import './styles/css/library.css';
import IndexPage from './pages/IndexPage';
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import Layout from './layout/Layout';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import StorePage from './pages/StorePage';
import ItemPage from './pages/ItemPage';
import { AlbumsProvider } from './context/AlbumsContext';

function App() {
  return (
    <>
      <AlbumsProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />}></Route>
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="store" element={<StorePage />} />
            <Route path="/store/:id" element={<ItemPage />}></Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AlbumsProvider>
    </>
  );
}

export default App;
