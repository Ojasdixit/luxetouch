import BookingButton from "@/components/BookingButton";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Women's Haircut",
      description: "Precision cuts tailored to your face shape and lifestyle, including wash, cut, and blow dry.",
      price: "$65 - $85",
    },
    {
      title: "Men's Haircut",
      description: "Classic and modern cuts with attention to detail, including wash, cut, and styling.",
      price: "$45 - $60",
    },
    {
      title: "Balayage",
      description: "Natural-looking highlights painted by hand for a sun-kissed, dimensional effect.",
      price: "$180 - $250",
    },
    {
      title: "Full Color",
      description: "Complete color transformation using premium products for vibrant, long-lasting results.",
      price: "$120 - $180",
    },
    {
      title: "Highlights",
      description: "Classic foil highlights to brighten and add dimension to your hair.",
      price: "$140 - $200",
    },
    {
      title: "Color Correction",
      description: "Expert correction for previous color mishaps, customized to achieve your desired look.",
      price: "From $250",
    },
    {
      title: "Deep Conditioning Treatment",
      description: "Intensive hydration treatment to restore moisture, shine, and manageability.",
      price: "$45 - $75",
    },
    {
      title: "Keratin Treatment",
      description: "Smoothing treatment that reduces frizz and adds incredible shine for up to 3 months.",
      price: "$250 - $350",
    },
    {
      title: "Bridal Styling",
      description: "Complete bridal hair package including trial session and day-of styling.",
      price: "From $200",
    },
    {
      title: "Special Event Styling",
      description: "Elegant updos and styling for any special occasion, perfect for weddings and galas.",
      price: "$95 - $150",
    },
    {
      title: "Classic Manicure",
      description: "Complete nail care including shaping, cuticle care, and polish application.",
      price: "$35 - $45",
    },
    {
      title: "Gel Manicure",
      description: "Long-lasting gel polish that stays perfect for up to 3 weeks.",
      price: "$55 - $70",
    },
    {
      title: "Luxury Pedicure",
      description: "Relaxing foot treatment with exfoliation, massage, and polish.",
      price: "$65 - $85",
    },
    {
      title: "Facial Treatment",
      description: "Customized facial treatment to cleanse, exfoliate, and rejuvenate your skin.",
      price: "$95 - $140",
    },
    {
      title: "Makeup Application",
      description: "Professional makeup for any occasion using premium cosmetics.",
      price: "$75 - $120",
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
