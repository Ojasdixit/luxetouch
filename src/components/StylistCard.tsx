interface StylistCardProps {
  name: string;
  specialty: string;
  bio: string;
  image: string;
}

const StylistCard = ({ name, specialty, bio, image }: StylistCardProps) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-smooth border border-border hover:border-primary/30 animate-fade-in">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />
      </div>
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-semibold text-primary">{name}</h3>
        <p className="text-sm font-medium text-primary/70">{specialty}</p>
        <p className="text-sm text-foreground/70 leading-relaxed">{bio}</p>
      </div>
    </div>
  );
};

export default StylistCard;
