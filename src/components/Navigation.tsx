import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Logo } from "./Logo";

export const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          <div className="hidden md:flex space-x-4">
            <NavLinks isActive={isActive} />
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              <NavLinks isActive={isActive} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = ({ isActive }: { isActive: (path: string) => boolean }) => {
  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/courses", label: "Courses" },
    { path: "/art-store", label: "Art Store" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`px-3 py-2 rounded-md transition-colors ${
            isActive(link.path)
              ? "bg-primary-foreground/20"
              : "hover:bg-primary-foreground/10"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};