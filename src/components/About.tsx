import aboutImage from "@/assets/rubayed.png";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>

          <div className="grid md:grid-cols-[300px,1fr] gap-12 items-center">
            {/* Circular Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-40"></div>
                <img
                  src={aboutImage}
                  alt="Rubayed Prodhan"
                  className="relative w-64 h-64 rounded-full object-cover border-4 border-background shadow-xl"
                />
              </div>
            </div>

            {/* Bio Text */}
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                I'm <span className="font-semibold text-primary">Rubayed Prodhan</span>, a passionate digital marketer who helps brands increase visibility, optimize campaigns, and convert clicks into customers.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                My goal is to combine creativity with data for smarter growth. With expertise in Facebook Marketing, Google Ads, Analytics, and comprehensive funnel strategies, I deliver measurable results that drive real business impact.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Whether you're looking to scale your digital presence, optimize your ad spend, or build automated marketing systems, I bring the strategic insight and technical know-how to make it happen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
