import Header from './Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './Footer.jsx';

const Layout = () => {
  return (
    <>
      <Header />
      <main className='flex justify-center mt-[50px] bg-gray-100'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
