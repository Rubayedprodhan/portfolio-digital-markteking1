 /*
import { Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/rubayed.png";
import heroBg from "@/assets/hero-bg.jpg";
import pdfD from "@/assets/Rubayed Prodhan.pdf";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/8801823110915", "_blank");
  };

  const handleDownloadResume = () => {
    // This will trigger the download of the resume
    const link = document.createElement("a");
    link.href = "/Rubayed Prodhan.pdf";
    link.download = "Rubayed_Prodhan_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay }
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content }
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Rubayed Prodhan
                </span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-foreground/90">
                Digital Marketing Expert
              </h2>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              I help brands grow through data-driven marketing strategies and creative content.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 text-lg px-8"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Hire Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadResume}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Image }
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-30 animate-glow"></div>
              <img
                src={heroImage}
                alt="Rubayed Prodhan"
                className="relative rounded-3xl shadow-2xl w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
 */

import { Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/rubayed.png";
import heroBg from "@/assets/hero-bg.jpg";
import pdfD from "@/assets/Rubayed Prodhan.pdf"; // ✅ imported file

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/8801823110915", "_blank");
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = pdfD;
    link.download = "Rubayed_Prodhan_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Rubayed Prodhan
                </span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-foreground/90">
                Digital Marketing Expert
              </h2>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              I help brands grow through data-driven marketing strategies and creative content.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 text-lg px-8"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Hire Me
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadResume}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-30 animate-glow"></div>
              <img
                src={heroImage}
                alt="Rubayed Prodhan"
                className="relative rounded-3xl shadow-2xl w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
