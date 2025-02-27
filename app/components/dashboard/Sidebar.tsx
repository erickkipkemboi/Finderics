import React from 'react';
import { Menu} from 'lucide-react';

interface SidebarProps {
  navItems: { label: string; href: string; icon?: React.ReactNode }[];
}

const Sidebar: React.FC<SidebarProps> = ({ navItems }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white
        transition-all duration-300 z-30
        ${isHovered ? 'w-64' : 'w-16'}
        hover:w-64`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="h-16 flex items-center justify-between px-4 border-b border-gray-700">
            <span className={`text-xl font-semibold ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
              MyApp
            </span>
            <button
              className="p-2 text-gray-300 hover:text-white rounded-lg"
              aria-label="Toggle sidebar"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 px-2 py-6 space-y-2 overflow-y-auto">
            {navItems.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                className="flex items-center px-4 py-2.5 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white"
              >
                <span className="w-6">{icon}</span>
                <span className={`ml-3 ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                  {label}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;