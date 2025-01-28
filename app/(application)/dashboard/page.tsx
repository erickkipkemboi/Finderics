"use client";
import React from 'react';
import Sidebar from '@/app/components/dashboard/Sidebar';
import Profile from '@/app/components/dashboard/Profile';
import DashboardCards from '@/app/components/dashboard/Cards';

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const user = {
    name: 'John Doe',
    role: 'Admin',
    avatarInitials: 'JD',
  };

  const navItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Analytics', href: '/analytics' },
    { label: 'Settings', href: '/settings' },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} navItems={navItems} />

      {/* Main Content */}
      <main
        className={`transition-all duration-300 ${
          isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'
        }`}
      >
        {/* Profile Section */}
        <Profile user={user} onMenuClick={toggleSidebar} />

        {/* Dashboard Content */}
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            {/* Page Title */}
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

            {/* Dashboard Cards */}
            <div className="mt-6">
              <DashboardCards />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;