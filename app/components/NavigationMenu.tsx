"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Logo from "/public/icons/logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function NavigationMenu() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/aboutus", label: "About" },
    { href: "/courses", label: "Courses" },
    { href: "/contactus", label: "Contact Us" },
  ];
  return (
    <Card className="rounded-none border-none sticky top-0 z-50 bg-blue-950">
      <div className="h-24 max-w-7xl mx-auto px-4 lg:px-0 flex items-center justify-between">
        <div className="flex items-center sm:justify-start">
          <Link href="/" aria-label="Home">
            <div className="w-20 h-20 sm:w-16 sm:h-16 pt-2 sm:pt-0">
              <Image
                src={Logo}
                alt="New Company Logo"
                width={200}
                height={200}
              />
            </div>
          </Link>
          <div className="text-yellow-600 font-bold ml-2 sm:ml-1 text-2xl sm:text-lg sm:leading-snug text-left">
            Finders International Consultancy
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-6">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant={pathname === link.href ? "default" : "link"}
                className={`text-white ${
                  pathname === link.href ? "bg-yellow-600" : "hover:bg--500"
                } focus:bg-yellow-500`}
                aria-label={`Go to ${link.label}`}
              >
                {link.label}
              </Button>
            </Link>
          ))}
            <Button
            onClick={() => router.push("/login")}
            className="bg-yellow-700 hover:bg-blue-400 text-white font-bold px-6 py-2 rounded-lg shadow-md transition-all duration-300"
            aria-label="Sign In"
          >
            Sign In
          </Button>
        </div>

        <div className="lg:hidden">
          <Button onClick={toggleMenu} className="text-white" aria-label="Toggle menu">
            {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </Button>
        </div>
      </div>


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
                  onClick={toggleMenu} 
                  aria-label={`Go to ${link.label}`}
                >
                  {link.label}
                </Button>
              </Link>
            </li>
          ))}
                <li>
            <Button
              onClick={() => {
                toggleMenu();
                router.push("/Sign");
              }}
              className="w-full text-left bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-2 rounded-lg shadow-md transition-all duration-300"
              aria-label="Sign In"
            >
              Sign In
            </Button>
          </li>
        </ul>
      </div>
    </Card>
  );
}

export default NavigationMenu;
