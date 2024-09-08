import Header from './Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './Footer.jsx';

const Layout = () => {
  return (
    <div className='flex flex-col h-full'>
      <Header />
      <main className='flex justify-center mt-[50px] bg-gray-100 flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
