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
      name: "Sophia Martinez",
      specialty: "Master Stylist & Colorist",
      bio: "With over 12 years of experience, Sophia specializes in dimensional color and precision cuts. Her passion for the latest trends ensures every client leaves feeling confident.",
      image: stylist1,
    },
    {
      name: "James Chen",
      specialty: "Senior Stylist",
      bio: "James brings a modern edge to classic styles. His expertise in men's cuts and contemporary styling has earned him a loyal following of fashion-forward clients.",
      image: stylist2,
    },
    {
      name: "Isabella Rose",
      specialty: "Makeup Artist & Esthetician",
      bio: "Isabella's artistic eye and gentle touch create stunning makeup looks and rejuvenating facial treatments. She's the go-to expert for bridal beauty and special occasions.",
      image: stylist3,
    },
    {
      name: "Emma Laurent",
      specialty: "Nail Technician",
      bio: "Emma's meticulous attention to detail and creative flair make every manicure a work of art. She stays ahead of nail trends and loves creating custom designs.",
      image: stylist4,
    },
    {
      name: "Olivia Stone",
      specialty: "Spa Specialist",
      bio: "Olivia's calming presence and expertise in skincare create a truly relaxing spa experience. Her customized facial treatments address each client's unique skin concerns.",
      image: stylist5,
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Meet Our Expert Team
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            Our passionate team of beauty professionals is dedicated to making you look and feel your absolute best. Each stylist brings unique expertise and a commitment to excellence.
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
