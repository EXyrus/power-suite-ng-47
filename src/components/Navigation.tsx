import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            T&C Agency
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md ${
                isActive("/") ? "bg-primary-foreground/20" : "hover:bg-primary-foreground/10"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md ${
                isActive("/about") ? "bg-primary-foreground/20" : "hover:bg-primary-foreground/10"
              }`}
            >
              About
            </Link>
            <Link
              to="/courses"
              className={`px-3 py-2 rounded-md ${
                isActive("/courses") ? "bg-primary-foreground/20" : "hover:bg-primary-foreground/10"
              }`}
            >
              Courses
            </Link>
            <Link
              to="/art-store"
              className={`px-3 py-2 rounded-md ${
                isActive("/art-store") ? "bg-primary-foreground/20" : "hover:bg-primary-foreground/10"
              }`}
            >
              Art Store
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md ${
                isActive("/contact") ? "bg-primary-foreground/20" : "hover:bg-primary-foreground/10"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};