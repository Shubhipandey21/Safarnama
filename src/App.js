import { Route, Routes } from 'react-router-dom';

//Components
import MyNavbar from './components/Navbar.components';
import Footer from './components/Footer.components';
import PhoneAuth from './components/PhoneAuth.comp.auth';
import HeroSection from './components/HeroSection.components';
import Gallery from './components/Gallery.components';

//Pages
import HomePage from './pages/Home.pages';
import LoginPage from './pages/Login.pages';
import RegisterPage from './pages/Register.pages';
import DestinationPage from './pages/Destination.pages';
import BlogForm from './pages/BlogForm.pages';
import About from './pages/About.pages';

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<BlogForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/phone" element={<PhoneAuth />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
