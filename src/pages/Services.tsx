import BookingButton from "@/components/BookingButton";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Signature Hair Design",
      description: "Tailored haircuts and precision styling crafted to complement your individuality. Every session begins with a personalized consultation to ensure a flawless finish that suits your lifestyle and personality.",
      price: "Contact for pricing",
    },
    {
      title: "Advanced Coloring & Highlights",
      description: "From subtle balayage to bold transformations, our color experts use ammonia-free, nourishing products to achieve depth, tone, and dimension while preserving the health of your hair.",
      price: "Contact for pricing",
    },
    {
      title: "Luxury Hair Treatments",
      description: "Rejuvenate and repair with our exclusive in-salon rituals using botanical extracts, keratin, and silk proteins. Ideal for restoring strength, shine, and smoothness.",
      price: "Contact for pricing",
    },
    {
      title: "Skin & Facial Spa",
      description: "Indulge in deep-cleansing, hydrating, and anti-aging treatments designed to restore balance and radiance to your skin. Each session is customized to your skin type and concerns.",
      price: "Contact for pricing",
    },
    {
      title: "Nail & Hand Care",
      description: "Classic manicures, gel polish applications, and luxury spa pedicures performed with precision and care. A complete rejuvenation for your hands and feet.",
      price: "Contact for pricing",
    },
    {
      title: "Occasion Styling & Makeup",
      description: "Bridal, editorial, and event makeup services by our expert artists — enhancing your natural features with luxury-grade cosmetics and attention to detail.",
      price: "Contact for pricing",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Our Services
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            Discover our comprehensive range of premium beauty services, each designed to enhance your natural beauty and leave you feeling absolutely radiant.
          </p>
          <BookingButton />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} style={{ animationDelay: `${index * 0.05}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center p-12 bg-muted rounded-3xl shadow-soft">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Our expert stylists are happy to provide personalized consultations to help you choose the perfect treatments.
          </p>
          <BookingButton />
        </div>
      </div>
    </div>
  );
};

export default Services;
