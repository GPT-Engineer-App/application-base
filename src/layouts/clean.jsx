import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">Bare-Bones Web Application</h1>
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-secondary text-secondary-foreground p-4 text-center">
        <p>© 2023 Your Company</p>
      </footer>
    </div>
  );
};

export default Layout;