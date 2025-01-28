import Link from 'next/link';
import Image from 'next/image';
import Logo from "/public/icons/logo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between space-y-8 md:space-y-0">
      
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" aria-label="Home">
              <div className="w-24 h-24">
                <Image
                  src={Logo}
                  alt="Finders International Consultancy Logo"
                  width={150} 
                  height={150} 
                       />
              </div>
              <p className="text-xl font-semibold text-yellow-500"> 
                Finders International Consultancy
              </p>
            </Link>
            <div className="flex space-x-3">
              {[
                { href: "https://instagram.com", icon: "/icons/instagram.png", label: "Instagram" },
               { href: "https://facebook.com", icon: "/icons/facebook.png", label: "Facebook" },
              ].map(({ href, icon, label }) => (
                <Link key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={icon}
                    alt={`${label} Icon`}
                    width={28}
                    height={28}
                    className="hover:scale-110 transition-transform"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-base">
            {[
              {
                title: "OUR MAJOR PRODUCTS",
                links: ["Learning French", "Learn German", "Preparation to IELTS"],
              },
              {
                title: "LINKS",
                links: ["Home", "About Us", "Courses", "Contact Us"],
              },
              {
                title: "LEARNING RESOURCES",
                links: ["Moodle", "Team Chat", "Video Conferencing", "Shared Calendars"],
              },
              {
                title: "REPORTING",
                links: ["Project Analytics", "Custom Dashboards", "Performance Metrics", "Export Reports"],
              },
            ].map(({ title, links }) => (
              <div key={title}>
                <h3 className="font-bold text-white">{title}</h3>
                <ul className="mt-2 space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="hover:text-blue-400 transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-gray-400 text-sm">
          © 2025 Finderics. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
