import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BookingButton from "@/components/BookingButton";
import ServiceCard from "@/components/ServiceCard";
import { Sparkles, Award, Heart, Star, Quote, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";
import { motion } from "framer-motion";
import DisplayCards from "@/components/ui/display-cards";

const Home = () => {
  const featuredServices = [{
    title: "Signature Haircuts",
    description: "Expert precision cuts tailored to your unique style and facial features.",
    price: "From $65"
  }, {
    title: "Color & Highlights",
    description: "Luxurious color treatments using premium products for vibrant, long-lasting results.",
    price: "From $120"
  }, {
    title: "Special Occasions",
    description: "Elegant styling for weddings, events, and your most memorable moments.",
    price: "From $95"
  }];

  const reviewCards = [
    {
      icon: <Star className="size-4 text-primary" />,
      title: "Sarah M.",
      description: "Absolutely stunning results! The team at Luxe Touch transformed my look beyond expectations. Worth every penny!",
      date: "2 weeks ago",
      iconClassName: "text-primary",
      titleClassName: "text-primary font-semibold",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 transition-all duration-500",
    },
    {
      icon: <Star className="size-4 text-primary" />,
      title: "Emily R.",
      description: "Best salon experience ever! Professional, attentive, and the ambiance is so relaxing. My go-to place now!",
      date: "1 month ago",
      iconClassName: "text-primary",
      titleClassName: "text-primary font-semibold",
      className:
        "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 transition-all duration-500",
    },
    {
      icon: <Star className="size-4 text-primary" />,
      title: "Jessica L.",
      description: "Premium quality service with attention to every detail. The stylists really know their craft!",
      date: "3 weeks ago",
      iconClassName: "text-primary",
      titleClassName: "text-primary font-semibold",
      className:
        "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10 transition-all duration-500",
    },
  ];

  const historyCards = [
    {
      icon: <Calendar className="size-4 text-primary" />,
      title: "Est. 2015",
      description: "Founded with a vision to bring luxury beauty services to the community with personalized care.",
      date: "Our Beginning",
      iconClassName: "text-primary",
      titleClassName: "text-primary font-semibold",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 transition-all duration-500",
    },
    {
      icon: <Award className="size-4 text-primary" />,
      title: "Award Winning",
      description: "Recognized as Best Luxury Salon 2023 for exceptional service and innovative techniques.",
      date: "2023",
      iconClassName: "text-primary",
      titleClassName: "text-primary font-semibold",
      className:
        "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 transition-all duration-500",
    },
    {
      icon: <Heart className="size-4 text-primary" />,
      title: "10,000+ Happy Clients",
      description: "Building lasting relationships through exceptional beauty services and personalized experiences.",
      date: "Growing Strong",
      iconClassName: "text-primary",
      titleClassName: "text-primary font-semibold",
      className:
        "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10 transition-all duration-500",
    },
  ];

  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroImage})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          {/* Bottom blur gradient for smooth blend */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/60 to-transparent backdrop-blur-sm" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Welcome to Luxe Touch.
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed">
              Nestled in the heart of the city, Luxe Touch is a boutique salon founded by Luke Moretti, a stylist with a passion for precision, detail, and the effortless beauty of simplicity. Our philosophy is rooted in the belief that beauty should be personal, intimate, and transformative. From the moment you step into Luxe Touch, every element.
            </p>
            <BookingButton />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-muted"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Why Choose Luxe Touch
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Discover the perfect blend of expertise, luxury, and personalized care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: "Premium Products", description: "We use only the finest professional-grade products for exceptional results", direction: -100 },
              { icon: Award, title: "Expert Stylists", description: "Our team brings years of experience and continuous training in latest trends", direction: 0 },
              { icon: Heart, title: "Personalized Care", description: "Every service is tailored to your unique needs and preferences", direction: 100 }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: item.direction, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 100 }}
                className="text-center p-8 bg-background rounded-2xl shadow-soft hover:shadow-hover transition-smooth"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Services */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Our Signature Services
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Indulge in our curated selection of premium beauty treatments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => {
              const directions = [{ x: -100, rotate: -5 }, { x: 0, y: 50 }, { x: 100, rotate: 5 }];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, ...directions[index] }}
                  whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 80 }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Client Reviews Section with Stacking Cards */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-muted"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              What Our Clients Say
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Real experiences from our valued clients who trust us with their beauty needs
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <DisplayCards cards={reviewCards} />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Story Section with Stacking Cards */}
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Our Journey
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              A decade of excellence in luxury beauty services
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <DisplayCards cards={historyCards} />
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="py-20 bg-gradient-to-br from-muted to-background"
      >
        <motion.div 
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container mx-auto px-4 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Ready to Experience Luxury?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Book your appointment today and discover why Luxe Touch is the premier choice for discerning clients.
            </p>
            <BookingButton />
          </div>
        </motion.div>
      </motion.section>
    </div>;
};
export default Home;