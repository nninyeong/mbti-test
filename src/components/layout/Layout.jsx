import Header from './Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './Footer.jsx';

const Layout = () => {
  return (
    <>
      <Header />
      <main className='mt-[50px]'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
