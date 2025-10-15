import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface BookingButtonProps {
  className?: string;
}

const BookingButton = ({ className = "" }: BookingButtonProps) => {
  return (
    <Link to="/contact">
      <Button variant="booking" size="lg" className={className}>
        <Calendar className="h-5 w-5" />
        Book Appointment
      </Button>
    </Link>
  );
};

export default BookingButton;
