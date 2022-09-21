import Header from './components/sections/Header';
import './styles/css/index.css';
import './styles/css/library.css';
import IndexPage from './pages/IndexPage';
import Footer from './components/sections/Footer';
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import Layout from './layout/Layout';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage/>}></Route>
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
