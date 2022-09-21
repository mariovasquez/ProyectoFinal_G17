import Header from './components/sections/Header';
import logo from './assets/svg/Logo_Vao.svg';
import './styles/css/index.css';
import './styles/css/library.css';
import IndexPage from './pages/IndexPage';
import Footer from './components/sections/Footer';

function App() {
  return (
    <>
      <Header logo={logo}/>
    </>
  );
}

export default App;
