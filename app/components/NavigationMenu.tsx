"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Logo from "/public/icons/logo.png"; // Updated logo
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function NavigationMenu() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/aboutus", label: "About" },
    { href: "/courses", label: "Courses" },
    { href: "/elearning", label: "Elearning" },
    { href: "/contactus", label: "Contact Us" },
  ];

  return (
    <Card className="rounded-none border-none sticky top-0 z-50 bg-[#6366f1]">
      <div className="h-24 max-w-7xl mx-auto py- px-4 lg:px-0 flex items-center justify-between">
      <div className="flex items-center">
  <Link href="/" aria-label="Home">
    <div className="w-40 h-40 pt-2"> {/* Reduced top padding */}
      <Image
        src={Logo}
        alt="New Company Logo"
        width={160}
        height={160}
        layout="intrinsic"
      />
    </div>
  </Link>
  <div className="text-yellow-500 text-xl font-bold ml-1"> {/* Reduced margin */}
    Finders International Consultancy
  </div>
</div>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant={pathname === link.href ? "default" : "link"}
                className={`text-white ${
                  pathname === link.href ? "bg-yellow-500" : "hover:bg-yellow-500"
                } focus:bg-yellow-500`}
                aria-label={`Go to ${link.label}`}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button onClick={toggleMenu} className="text-white" aria-label="Toggle menu">
            {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-all duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="p-4 flex items-center justify-between border-b">
          <span className="text-lg font-semibold text-[#6366f1]">Menu</span>
          <Button onClick={toggleMenu} variant="ghost" aria-label="Close menu">
            <AiOutlineClose size={24} className="text-[#6366f1]" />
          </Button>
        </div>
        <ul className="flex flex-col space-y-4 p-4">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <Button
                  variant={pathname === link.href ? "default" : "link"}
                  className={`w-full text-left text-[#6366f1] ${
                    pathname === link.href ? "bg-yellow-500" : "hover:bg-yellow-500"
                  } focus:bg-yellow-500`}
                  onClick={toggleMenu} // Close menu on link click
                  aria-label={`Go to ${link.label}`}
                >
                  {link.label}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

export default NavigationMenu;
