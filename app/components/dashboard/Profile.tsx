import React from "react";
import { Search, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/app/context/authContext"; // Import auth context

const Profile: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
  const { user } = useAuth(); // Fetch user from context

  // Default user data if no user is logged in
  const userName = user?.name || "Guest";
  const userRole = user?.role || "User";
  const userInitials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "G"; // Default to "G" for Guest

  return (
    <Card className="w-full bg-white border-b h-16 shadow-md">
      <div className="flex items-center justify-between px-6 h-full">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-3 text-gray-600 hover:text-gray-900 rounded-md"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        <div className="relative flex-1 max-w-md mx-auto">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="search"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center space-x-3">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-gray-700">{userName}</p>
                <p className="text-xs text-gray-500">{userRole}</p>
              </div>
              <div className="h-8 w-8 bg-blue-500 flex items-center justify-center rounded-full text-white font-medium">
                {userInitials}
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  );
};

export default Profile;
