import { Link } from "react-router-dom";
import type { Band } from "@/data/bands";

interface BandNavigationProps {
  prev?: Band;
  next?: Band;
}

const BandNavigation = ({ prev, next }: BandNavigationProps) => {
  return (
    <div className="flex items-center justify-between px-6 md:px-12 py-10">
      {prev ? (
        <Link to={`/band/${prev.slug}`} className="flex items-center gap-4 group">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-border group-hover:border-foreground transition-colors">
            <img src={prev.heroImage} alt={prev.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Previous</p>
            <p className="text-sm font-bold font-display">{prev.name}</p>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link to={`/band/${next.slug}`} className="flex items-center gap-4 text-right group">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Next</p>
            <p className="text-sm font-bold font-display">{next.name}</p>
          </div>
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-border group-hover:border-foreground transition-colors">
            <img src={next.heroImage} alt={next.name} className="w-full h-full object-cover" />
          </div>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};

export default BandNavigation;
