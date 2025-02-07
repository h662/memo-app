import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">Memo App</h1>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
