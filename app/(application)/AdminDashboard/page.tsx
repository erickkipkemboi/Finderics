// app/(application)/AdminDashboard/page.tsx
"use client"
import React from "react"
import Sidebar from "@/app/components/dashboardcomponents/Sidebar"
import Table from "@/app/components/dashboardcomponents/Table1"
import { Home, Settings } from "lucide-react"
import { useProtectedPage } from "@/app/hooks/useProtectedPage"
import Profile from "@/app/components/dashboardcomponents/Profile"

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: <Home size={20} /> },
  { label: "Settings", href: "/settings", icon: <Settings size={20} /> },
]

export default function Page() {
  useProtectedPage(["admin"])

  return (
    <>
      <Sidebar navItems={navItems} />
      <Profile onMenuClick={() => console.log("menu clicked")} />
      <Table />
    </>
  )
}
