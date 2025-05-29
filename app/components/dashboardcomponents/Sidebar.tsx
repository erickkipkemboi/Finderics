"use client"
import React, { useState } from 'react';
import {ChevronLeft, ChevronRight } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  navItems?: NavItem[];
  appName?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  navItems = [], 
  appName = 'Dashboard' 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside
      className={`
        fixed top-0 left-0 h-full bg-gray-800 text-white
        transition-all duration-300 z-30
        ${isExpanded ? 'w-64' : 'w-16'}
        shadow-lg
      `}
    >
      <div className="flex flex-col h-full">
      
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-700">
          <span 
            className={`
              text-xl font-semibold 
              ${isExpanded ? 'opacity-100' : 'opacity-0'} 
              transition-opacity duration-300 overflow-hidden
            `}
          >
            {appName}
          </span>
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-300 hover:text-white rounded-lg"
            aria-label="Toggle sidebar"
          >
            {isExpanded ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
          </button>
        </div>

        <nav className="flex-1 px-2 py-6 space-y-2 overflow-y-auto">
          {navItems.length > 0 ? (
            navItems.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                className="
                  flex items-center 
                  px-4 py-2.5 
                  text-gray-300 
                  rounded-lg 
                  hover:bg-gray-700 
                  hover:text-white 
                  group
                  transition-colors
                "
              >
                <div className="w-6 flex items-center justify-center">
                  {icon}
                </div>
                <span 
                  className={`
                    ml-3 
                    ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}
                    transition-all duration-300 
                    overflow-hidden 
                    whitespace-nowrap
                  `}
                >
                  {label}
                </span>
              </a>
            ))
          ) : (
            <div className="text-center text-gray-500 px-4">
              No navigation items
            </div>
          )}
        </nav>
      </div>
    </aside>
  );
};


 
export default Sidebar;