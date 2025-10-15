import BookingButton from "@/components/BookingButton";
import { Heart, Sparkles, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            About Luxe Touch
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Where elegance meets expertise in the heart of beauty
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-muted rounded-3xl p-8 md:p-12 shadow-soft animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Our Story</h2>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                Founded with a vision to create a sanctuary where beauty and luxury converge, Luxe Touch has become 
                a premier destination for discerning clients seeking exceptional salon services.
              </p>
              <p>
                Our journey began with a simple belief: that everyone deserves to feel beautiful, confident, and pampered. 
                We've cultivated an environment where cutting-edge techniques meet timeless elegance, where every visit 
                is an experience in indulgence and transformation.
              </p>
              <p>
                What sets us apart is our unwavering commitment to excellence. From the moment you step through our doors, 
                you'll be enveloped in an atmosphere of sophistication and warmth. Our team of expert stylists stays at 
                the forefront of beauty trends through continuous education, ensuring you receive the most innovative and 
                personalized services available.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Our Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-background rounded-2xl shadow-soft hover:shadow-hover transition-smooth animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Personalized Care</h3>
              <p className="text-foreground/70">
                We believe every client is unique. Our consultations ensure your service is tailored to your individual 
                style, preferences, and lifestyle.
              </p>
            </div>

            <div className="text-center p-8 bg-background rounded-2xl shadow-soft hover:shadow-hover transition-smooth animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Premium Quality</h3>
              <p className="text-foreground/70">
                We use only the finest professional-grade products and techniques to deliver results that exceed expectations 
                every time.
              </p>
            </div>

            <div className="text-center p-8 bg-background rounded-2xl shadow-soft hover:shadow-hover transition-smooth animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Expert Excellence</h3>
              <p className="text-foreground/70">
                Our team's dedication to mastering their craft ensures you're in the hands of true professionals who are 
                passionate about beauty.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-12 bg-gradient-to-br from-muted to-background rounded-3xl shadow-soft">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
            Experience the Luxe Touch Difference
          </h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join our community of clients who trust us with their beauty needs. We can't wait to welcome you.
          </p>
          <BookingButton />
        </div>
      </div>
    </div>
  );
};

export default About;
