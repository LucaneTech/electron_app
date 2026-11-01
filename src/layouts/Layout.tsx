import { NavLink, Outlet } from 'react-router';

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/settings', label: 'Paramètres' },
];

export const Layout = () => {
  return (
    <div className="flex h-screen bg-slate-100 text-slate-900">
      <aside className="flex w-56 shrink-0 flex-col bg-slate-900 p-4 text-white">
        <p className="mb-6  text-lg font-bold text-center">ELECTRON</p>

        <nav className="flex flex-col gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              className={({ isActive }) =>
                `rounded px-3 py-2 duration-300 ${
                  isActive ? 'bg-blue-500 font-bold' : 'hover:bg-slate-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* The window matching the current route is displayed here. */}
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
};
