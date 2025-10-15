import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import facebookpdf from "@/components/pdfs/facebook.pdf";
import googlepdf from "@/components/pdfs/google.pdf";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Facebook Marketing",
    description: "Boost your brand's online presence with strategic Facebook campaigns.",
    features: ["Audience segmentation", "Ad creative design & copywriting", "Campaign optimization"],
    tools: "Meta Ads Manager, Canva, Meta Business Suite",
    pdf: facebookpdf
  },
  {
    title: "Google Ads",
    description: "Generate leads and sales with high-performing Google Search, Display, and YouTube ads.",
    features: ["Keyword research", "Conversion tracking", "ROI optimization"],
    tools: "Google Ads, Keyword Planner, GA4",
    pdf: googlepdf
  },
  {
    title: "Google Analytics 4 (GA4) Setup",
    description: "Track every customer journey with powerful analytics and event tracking.",
    features: ["GA4 property setup", "Conversion goals", "Custom reports"],
    tools: "Google Analytics 4, Tag Manager",
    pdf: facebookpdf
  },
  {
    title: "Google Tag Manager (GTM) Integration",
    description: "Manage all your tracking codes in one place without touching website code.",
    features: ["Tag setup", "Trigger configuration", "Full debugging"],
    tools: "Google Tag Manager, GA4",
    pdf: facebookpdf
  },
  {
    title: "Data Layer & Ecommerce Tracking",
    description: "Set up advanced ecommerce data tracking to measure sales impact.",
    features: ["Add-to-cart tracking", "Checkout tracking", "Purchase tracking with GA4"],
    tools: "GTM, GA4",
    pdf: facebookpdf
  },
  {
    title: "Email Marketing",
    description: "Build relationships and increase sales through automated campaigns.",
    features: ["Automated flows", "Newsletter design", "Audience segmentation"],
    tools: "Mailchimp",
    pdf: facebookpdf
  },
  {
    title: "Media Buying & Ad Campaign Management",
    description: "Maximize reach and conversions through cross-platform ad management.",
    features: ["Budget planning", "A/B testing", "Multi-platform management"],
    tools: "Meta Ads, Google Ads, TikTok Ads",
    pdf: facebookpdf
  },
  {
    title: "LinkedIn Ads",
    description: "Reach professionals and B2B clients with precision targeting.",
    features: ["Sponsored content", "InMail campaigns", "Audience analytics"],
    tools: "LinkedIn Campaign Manager, Analytics",
    pdf: facebookpdf
  }
];

const Services = () => {
  const handleViewDemo = (pdfPath: string) => {
    window.open(pdfPath, "_blank");
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing solutions to grow your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold">Tools:</span> {service.tools}
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                {/* <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                  onClick={() => handleViewDemo(service.pdf)}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  View Demo PDF
                </Button> */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
