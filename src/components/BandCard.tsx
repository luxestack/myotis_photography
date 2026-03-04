import { Link } from "react-router-dom";
import type { Band } from "@/data/bands";

interface BandCardProps {
  band: Band;
  layout?: "full" | "half";
}

const BandCard = ({ band, layout = "full" }: BandCardProps) => {
  return (
    <Link
      to={`/band/${band.slug}`}
      className={`relative block overflow-hidden group ${
        layout === "full" ? "w-full" : "w-full md:w-1/2"
      }`}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={band.heroImage}
          alt={band.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-500" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-[0.08em] uppercase font-display text-foreground drop-shadow-lg">
            {band.name}
          </h2>
          <p className="mt-2 text-sm md:text-base italic text-foreground/80 font-body drop-shadow-md">
            {band.venue}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BandCard;
