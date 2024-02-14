import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

function MainLayout() {
  return (
    <>
      <Header
        onLogin={() => {}}
        onLogout={() => {}}
        onCreateAccount={() => {}}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default MainLayout;
