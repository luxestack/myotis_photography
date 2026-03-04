import Header from "@/components/Header";
import BandCard from "@/components/BandCard";
import SiteFooter from "@/components/SiteFooter";
import { bands } from "@/data/bands";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* First band: full width */}
        {bands[0] && <BandCard band={bands[0]} layout="full" />}

        {/* Remaining bands in pairs */}
        <div className="flex flex-wrap">
          {bands.slice(1).map((band) => (
            <BandCard key={band.slug} band={band} layout="half" />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
