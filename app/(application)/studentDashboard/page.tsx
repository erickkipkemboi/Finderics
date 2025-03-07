"use client"
import React from 'react'
import Sidebar from "@/app/components/dashboard/Sidebar";
import { Home,  Settings} from "lucide-react"; 
import Profile from "@/app/components/dashboard/Profile";
import Course_Selection from '@/app/components/studentDashboard/Course_Selection';

const user = {
    name: "John Doe",
    role: "Admin",
    avatarInitials: "JD",
  };
const navItems=[
    {label:"Dashboard",href:"/dashboard", icon: <Home size={20} /> },
    {label:"Settings", href:"/settings", icon:<Settings size={20} />}
]
function page() {
  return (
      <><Sidebar navItems={navItems} />
 <Profile user={user} onMenuClick={() => console.log("Menu clicked")} />
  <Course_Selection/>
</>

  )
}

export default page
