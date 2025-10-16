import BookingButton from "@/components/BookingButton";
import StylistCard from "@/components/StylistCard";
import stylist1 from "@/assets/stylist-1.jpg";
import stylist2 from "@/assets/stylist-2.jpg";
import stylist3 from "@/assets/stylist-3.jpg";
import stylist4 from "@/assets/stylist-4.jpg";
import stylist5 from "@/assets/stylist-5.jpg";

const Team = () => {
  const stylists = [
    {
      name: "Luke Moretti",
      specialty: "Founder & Creative Director",
      bio: "A visionary stylist with over 15 years of experience in luxury hair design. Luke’s philosophy combines contemporary precision with the calm artistry of high-end salon craft.",
      image: stylist1,
    },
    {
      name: "Clara Voss",
      specialty: "Senior Colorist",
      bio: "Specialist in multidimensional tones and natural balayage. Known for achieving seamless transitions and glossy finishes with a soft, elegant aesthetic.",
      image: stylist2,
    },
    {
      name: "Renee Delaine",
      specialty: "Facial & Skincare Expert",
      bio: "Certified aesthetician with a focus on European techniques and organic skincare. Her facials are restorative, soothing, and tailored to each client’s complexion.",
      image: stylist3,
    },
    {
      name: "Ella Rhodes",
      specialty: "Lead Makeup Artist",
      bio: "Renowned for her modern bridal and editorial work. Ella’s approach blends subtle glamour with a clean, dewy finish.",
      image: stylist4,
    },
    {
      name: "Sophia Hayes",
      specialty: "Nail Art Specialist",
      bio: "Precision nail designer specializing in minimal, elegant styles — from neutral palettes to soft chrome and marble finishes.",
      image: stylist5,
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Our Team
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            Luxe Touch is home to a collective of seasoned professionals, each bringing their expertise and creative energy to every appointment.
          </p>
          <BookingButton />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stylists.map((stylist, index) => (
            <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <StylistCard {...stylist} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center p-12 bg-gradient-to-br from-muted to-background rounded-3xl shadow-soft">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
            Book with Your Favorite Stylist
          </h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Request your preferred team member when booking your appointment. We'll do our best to accommodate your schedule.
          </p>
          <BookingButton />
        </div>
      </div>
    </div>
  );
};

export default Team;
