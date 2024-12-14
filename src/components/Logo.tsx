import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-xl">PS</span>
      </div>
      <span className="font-bold text-xl hidden md:inline-block">Power Suite</span>
    </Link>
  );
};