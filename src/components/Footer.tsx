import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 Power Suite Tech. All rights reserved.
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};