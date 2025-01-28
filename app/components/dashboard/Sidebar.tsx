import React from 'react';
import { Menu, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  navItems: { label: string; href: string; icon?: React.ReactNode }[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle, navItems }) => {
  return (
    <>
      {/* Toggle button outside the sidebar */}
      <button
        onClick={onToggle}
        className={`fixed top-4 left-4 z-40 p-2 text-gray-300 hover:text-white bg-gray-800 rounded-lg transition-transform duration-300 ${
          isOpen ? 'translate-x-64' : 'translate-x-0'
        } lg:hidden`}
        aria-label="Toggle sidebar"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onToggle}
          role="button"
          tabIndex={0}
          aria-label="Close sidebar"
          onKeyDown={(e) => e.key === 'Enter' && onToggle()}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white
        transition-transform duration-300 z-30
        ${isOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full'}
        lg:translate-x-0 lg:w-64`}
      >
        <div className="flex flex-col h-full">
          <div className="h-16 flex items-center justify-between px-6 border-b border-gray-700">
            <span className="text-xl font-semibold">MyApp</span>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navItems.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                className="flex items-center px-4 py-2.5 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white"
              >
                {icon}
                <span className="ml-3">{label}</span>
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;