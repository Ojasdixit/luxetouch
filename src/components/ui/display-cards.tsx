import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Card {
  icon?: ReactNode;
  title: string;
  description: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
  className?: string;
}

interface DisplayCardsProps {
  cards: Card[];
  containerClassName?: string;
}

const DisplayCards = ({ cards, containerClassName }: DisplayCardsProps) => {
  return (
    <div
      className={cn(
        "grid w-full [grid-template-areas:'stack']",
        containerClassName
      )}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          className={cn(
            "relative flex flex-col gap-2 rounded-xl border border-border bg-card p-6 shadow-soft transition-all duration-500",
            card.className
          )}
        >
          {card.icon && (
            <div className={cn("mb-2", card.iconClassName)}>{card.icon}</div>
          )}
          <h3
            className={cn(
              "text-lg font-semibold text-foreground",
              card.titleClassName
            )}
          >
            {card.title}
          </h3>
          <p className="text-sm text-foreground/70">{card.description}</p>
          {card.date && (
            <p className="text-xs text-muted-foreground mt-auto">{card.date}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default DisplayCards;
