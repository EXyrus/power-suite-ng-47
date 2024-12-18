import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const SocialLinks = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com/powersuite",
      icon: Facebook,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/powersuite",
      icon: Twitter,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/powersuite",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/powersuite",
      icon: Linkedin,
    },
    {
      name: "YouTube",
      url: "https://youtube.com/powersuite",
      icon: Youtube,
    },
  ];

  return (
    <div className="flex space-x-2">
      <TooltipProvider>
        {socialLinks.map((social) => (
          <Tooltip key={social.name}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
                asChild
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Follow us on {social.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
};