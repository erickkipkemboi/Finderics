"use client";
import React from "react";
import Sidebar from "@/app/components/dashboardcomponents/Sidebar";
import Table from "@/app/components/dashboardcomponents/Table1"
import { Home, Settings } from "lucide-react";
import { useProtectedPage } from "@/app/hooks/page";
import Profile from "../Profile/page";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: <Home size={20} /> },
  { label: "Settings", href: "/settings", icon: <Settings size={20} /> },
];

function Page() {
  useProtectedPage(["admin"]);
  return (
    <>
      <Sidebar navItems={navItems} />
        <Profile onMenuClick={function (): void {
        throw new Error("Function not implemented.");
      } }/>
     <Table/>
    </>
  );
}

export default Page;
