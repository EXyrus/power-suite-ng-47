import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img src="/logo.png" alt="Power Suite Logo" className="w-16 h-16 object-contain" />
    </Link>
  );
};