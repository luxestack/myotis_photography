import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import BandNavigation from "@/components/BandNavigation";
import SiteFooter from "@/components/SiteFooter";
import { getBandBySlug, getAdjacentBands } from "@/data/bands";
import { useEffect } from "react";

const BandPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const band = getBandBySlug(slug || "");
  const { prev, next } = getAdjacentBands(slug || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!band) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Band not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero banner with faded overlay */}
      <div className="relative w-full aspect-[21/9] overflow-hidden">
        <img
          src={band.heroImage}
          alt={band.name}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-6xl font-black tracking-[0.08em] uppercase font-display drop-shadow-lg">
            {band.name}
          </h1>
          <p className="mt-2 text-base md:text-lg italic text-muted-foreground font-body">
            {band.venue}
          </p>
          <span className="mt-4 text-2xl animate-bounce">↓</span>
        </div>
      </div>

      {/* Photo collage grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-1 p-1">
        {band.galleryImages.map((img, i) => (
          <div
            key={i}
            className={`overflow-hidden ${
              i === 0 ? "col-span-2 row-span-2" : ""
            }`}
          >
            <img
              src={img}
              alt={`${band.name} photo ${i + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </section>

      {/* Prev / Next navigation */}
      <BandNavigation prev={prev} next={next} />

      <SiteFooter />
    </div>
  );
};

export default BandPage;
