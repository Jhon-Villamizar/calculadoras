import { Outlet } from 'react-router';
import { Nav } from './components/nav';

export const Layout = () => {    
  return (
    <div>
      <Nav />
      <main className="flex m-auto w-3/4">
        <Outlet />
      </main>
    </div>
  );
};
