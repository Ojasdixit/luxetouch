import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MapPin, Phone, Mail, Clock, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    "Women's Haircut",
    "Men's Haircut",
    "Balayage",
    "Full Color",
    "Highlights",
    "Bridal Styling",
    "Manicure",
    "Pedicure",
    "Facial Treatment",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send to your email via a backend service
    console.log("Booking request:", { ...formData, date });
    
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you shortly to confirm your appointment.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setDate(undefined);
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Get in Touch
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Book your appointment or reach out with any questions. We're here to help you look and feel amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div className="bg-muted rounded-2xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold mb-6 text-primary">Visit Us</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Address</h3>
                    <p className="text-foreground/70">
                      123 Luxury Lane<br />
                      Beauty District, BD 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Phone</h3>
                    <a href="tel:+1234567890" className="text-foreground/70 hover:text-primary transition-smooth">
                      (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Email</h3>
                    <a href="mailto:hello@luxetouch.com" className="text-foreground/70 hover:text-primary transition-smooth">
                      hello@luxetouch.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Opening Hours</h3>
                    <div className="text-foreground/70 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 10:00 AM - 6:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-bold mb-4 text-primary">Prefer to Call?</h3>
              <p className="text-foreground/70 mb-4">
                Our friendly team is available during business hours to answer your questions and help schedule your appointment.
              </p>
              <a href="tel:+1234567890">
                <Button variant="booking" size="lg" className="w-full">
                  <Phone className="h-5 w-5" />
                  Call Us Now
                </Button>
              </a>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-background rounded-2xl p-8 shadow-soft border border-border animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-bold mb-6 text-primary">Book an Appointment</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2"
                  placeholder="Your name"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-2"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <Label htmlFor="service">Service *</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                  required
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-background">
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Preferred Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal mt-2",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-background" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label htmlFor="message">Additional Notes</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-2"
                  placeholder="Any specific requests or preferences..."
                  rows={4}
                />
              </div>

              <Button type="submit" variant="booking" size="lg" className="w-full">
                <CalendarIcon className="h-5 w-5" />
                Request Appointment
              </Button>

              <p className="text-sm text-foreground/70 text-center">
                We'll contact you to confirm your appointment time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
