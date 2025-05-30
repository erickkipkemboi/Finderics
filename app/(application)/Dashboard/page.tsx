"use client";
import React from "react";
import Sidebar from "@/app/components/dashboardcomponents/Sidebar";
import DashboardCards from "@/app/components/dashboardcomponents/Cards";
import Charts from "@/app/components/dashboardcomponents/Charts";
import { Card } from "@/components/ui/card";
import  Table  from "@/app/components/dashboardcomponents/Table1";
import { Home, BarChart, Settings, Table as TableIcon } from "lucide-react"; 

const Dashboard: React.FC = () => {

  const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: <Home size={20} /> },
    { label: "Analytics", href: "/analytics", icon: <BarChart size={20} /> },
    { label: "Settings", href: "/settings", icon: <Settings size={20} /> },
    { label: "Table", href: "/table", icon: <TableIcon size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      <Sidebar navItems={navItems} />

 
      <main className="lg:ml-12 ml-24">
        

        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-900"> Admin Dashboard</h1>

            <div className="mt-6">
              <DashboardCards />
            </div>
            <div className="mt-6">
              <Card className="p-6">
                <Table />
                <h2 className="text-lg font-medium mb-4">Analytics</h2>
                <Charts />
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
