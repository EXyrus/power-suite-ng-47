import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img src="/logo.png" alt="Power Suite Logo" className="w-10 h-10 object-contain" />
      <span className="font-bold text-xl hidden md:inline-block">Power Suite</span>
    </Link>
  );
};