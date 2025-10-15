// import { useState } from "react";
// import { Mail, Phone, MessageCircle, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent } from "@/components/ui/card";
// import { useToast } from "@/hooks/use-toast";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     whatsapp: "",
//     message: ""
//   });
//   const { toast } = useToast();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Here you would integrate with your email service
//     // For now, we'll just show a success message
//     toast({
//       title: "Message Sent!",
//       description: "Thank you for reaching out. I'll get back to you soon!",
//     });

//     setFormData({ name: "", email: "", whatsapp: "", message: "" });
//   };

//   const handleWhatsAppClick = () => {
//     window.open("https://wa.me/8801823110915", "_blank");
//   };

//   const socialLinks = [
//     { icon: Facebook, url: "https://www.facebook.com/rubayedprodhan9", label: "Facebook" },
//     { icon: Linkedin, url: "https://www.linkedin.com/in/rubayedprodhannr/", label: "LinkedIn" },
//     { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
//     { icon: Youtube, url: "https://www.youtube.com/@MdRubayedProdhan", label: "YouTube" }
//   ];

//   return (
//     <section id="contact" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold mb-4">
//             Let's Work <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Together</span>
//           </h2>
//           <p className="text-xl text-muted-foreground">
//             Have a project in mind? Get in touch and let's discuss how I can help
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
//               <p className="text-lg text-muted-foreground mb-8">
//                 Ready to grow your business? Reach out through any of the channels below, and I'll respond within 24 hours.
//               </p>
//             </div>

//             {/* Quick Contact Cards */}
//             <div className="space-y-4">
//               <Card className="border-2 hover:border-primary/50 transition-colors">
//                 <CardContent className="p-6">
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
//                       <Mail className="h-6 w-6 text-primary" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold mb-1">Email</h4>
//                       <a
//                         href="mailto:rubayedprodhan565@gmail.com"
//                         className="text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
//                       >
//                         rubayedprodhan565@gmail.com
//                       </a>
//                     </div>

//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer" onClick={handleWhatsAppClick}>
//                 <CardContent className="p-6">
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
//                       <MessageCircle className="h-6 w-6 text-primary" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold mb-1">WhatsApp</h4>
//                       <p className="text-muted-foreground">Click to message me instantly</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Social Media */}
//             <div>
//               <h4 className="font-semibold mb-4 text-lg">Follow Me</h4>
//               <div className="flex gap-4">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110"
//                     aria-label={social.label}
//                   >
//                     <social.icon className="h-5 w-5" />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <Card className="border-2 shadow-xl">
//             <CardContent className="p-8">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium mb-2">Name</label>
//                   <Input
//                     placeholder="Your Name"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     required
//                     className="text-base"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-2">Email</label>
//                   <Input
//                     type="email"
//                     placeholder="your.email@example.com"
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     required
//                     className="text-base"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-2">WhatsApp Number</label>
//                   <Input
//                     type="tel"
//                     placeholder="+1 234 567 8900"
//                     value={formData.whatsapp}
//                     onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
//                     required
//                     className="text-base"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-2">Message</label>
//                   <Textarea
//                     placeholder="Tell me about your project..."
//                     value={formData.message}
//                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                     required
//                     rows={5}
//                     className="text-base resize-none"
//                   />
//                 </div>

//                 <Button type="submit" className="w-full" size="lg">
//                   Send Message
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import { useState } from "react";
import { Mail, MessageCircle, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: ""
  });

  const { toast } = useToast();

  // EmailJS parameters
 

  const SERVICE_ID = "service_16b4p5d";
  const TEMPLATE_ID = "template_yx19xvk";
  const PUBLIC_KEY = "qVeOH6UUKsaf047O-";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "It will be communicated with the umpire very soon.",
        });
        setFormData({ name: "", email: "", whatsapp: "", message: "" });
      })
      .catch((err) => {
        toast({
          title: "Error",
          description: "Error",
        });
        console.error(err);
      });
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/8801823110915", "_blank");
  };

  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/rubayedprodhan9", label: "Facebook" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/rubayedprodhannr/", label: "LinkedIn" },
    { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
    { icon: Youtube, url: "https://www.youtube.com/@MdRubayedProdhan", label: "YouTube" }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's Work <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Have a project in mind? Get in touch and let's discuss how I can help
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to grow your business? Reach out through any of the channels below, and I'll respond within 24 hours.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a
                        href="mailto:rubayedprodhan565@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                      >
                        rubayedprodhan565@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer" onClick={handleWhatsAppClick}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">WhatsApp</h4>
                      <p className="text-muted-foreground">Click to message me instantly</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-2 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">WhatsApp Number</label>
                  <Input
                    type="tel"
                    placeholder="+880 1234 567890"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    required
                    className="text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="text-base resize-none"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
