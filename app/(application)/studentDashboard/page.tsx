"use client";

import React from "react";
import Sidebar from "@/app/components/dashboardcomponents/Sidebar";
import { Home, Settings } from "lucide-react";
import Course_Selection from "@/app/components/studentDashboard/Course_Selection";
import { useProtectedPage } from "@/app/hooks/page";
import Profile from "../Profile/page";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: <Home size={20} /> },
  { label: "Settings", href: "/settings", icon: <Settings size={20} /> },
];

function Page() {
  useProtectedPage(["user"]);
  return (
    <>
      <Sidebar navItems={navItems} />
        <Profile onMenuClick={function (): void {
        throw new Error("Function not implemented.");
      } }/>
      <Course_Selection />
    </>
  );
}

export default Page;
