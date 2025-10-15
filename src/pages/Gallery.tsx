import { useState } from "react";
import BookingButton from "@/components/BookingButton";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: gallery1, alt: "Beautiful rose gold hair color" },
    { src: gallery2, alt: "Elegant bridal updo" },
    { src: gallery3, alt: "Professional manicure" },
    { src: gallery4, alt: "Relaxing facial treatment" },
    { src: gallery5, alt: "Modern haircut styling" },
    { src: gallery6, alt: "Balayage hair coloring" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Our Work
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            Explore our portfolio of stunning transformations and be inspired for your next visit.
          </p>
          <BookingButton />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-soft hover:shadow-hover transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center p-12 bg-muted rounded-3xl shadow-soft">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
            Ready for Your Transformation?
          </h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Let our expert team create a beautiful look that's uniquely you.
          </p>
          <BookingButton />
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-smooth"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="h-6 w-6 text-primary" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-glow"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
