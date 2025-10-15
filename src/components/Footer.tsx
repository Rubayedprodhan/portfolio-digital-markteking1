import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo1.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/rubayedprodhan9", label: "Facebook" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/rubayedprodhannr/", label: "LinkedIn" },
    { icon: Instagram, url: "https://www.instagram.com/mohammedrubayed/", label: "Instagram" }, // updated username
    { icon: Youtube, url: "https://www.youtube.com/@MdRubayedProdhan", label: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
              </div>
              <span className="font-semibold text-lg">Rubayed Prodhan</span>
            </div>
            <p className="text-muted-foreground">
              Digital Marketing Specialist helping brands grow through data-driven strategies and creative excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {["home", "services", "reviews", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block text-muted-foreground hover:text-primary transition-colors capitalize"
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            Copyright © {currentYear} Rubayed Prodhan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
