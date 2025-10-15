interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image?: string;
}
const ServiceCard = ({
  title,
  description,
  price
}: ServiceCardProps) => {
  return <div className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-hover transition-smooth border border-border hover:border-primary/30 animate-fade-in">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-primary group-hover:text-primary/80 transition-smooth">
          {title}
        </h3>
        <p className="text-sm text-foreground/70 leading-relaxed">
          {description}
        </p>
        <div className="pt-2 border-t border-border">
          <p className="text-lg text-primary font-semibold">
            {price}
          </p>
        </div>
      </div>
    </div>;
};
export default ServiceCard;