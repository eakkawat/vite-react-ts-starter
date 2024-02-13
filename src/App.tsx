import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '@/components/Header';
import Home from '@/pages/Home';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WrappedApp;
