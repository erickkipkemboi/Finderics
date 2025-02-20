"use client";
import React from 'react';
import Sidebar from '@/app/components/dashboard/Sidebar';
import Profile from '@/app/components/dashboard/Profile';
import DashboardCards from '@/app/components/dashboard/Cards';
import Charts from '@/app/components/dashboard/Charts';
import { Card } from '@/components/ui/card';

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

      <main
        className={`transition-all duration-300 ${
          isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'
        }`}
      >
        <Profile user={user} onMenuClick={toggleSidebar} />

        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            {/* Page Title */}
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Users Card */}
    

              {/* Dashboard Cards Wrapped in a Card */}
              <div className="lg:col-span-3">
                <Card className="p-6">
                  <h2 className="text-lg font-medium mb-4">Overview</h2>
                  <DashboardCards />
                </Card>
              </div>

              {/* Charts Wrapped in a Card */}
              <div className="lg:col-span-3">
                <Card className="p-6">
                  <h2 className="text-lg font-medium mb-4">Analytics</h2>
                  <Charts />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;