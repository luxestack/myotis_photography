import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-background/80 backdrop-blur-sm">
      <Link to="/" className="text-center">
        <h1 className="text-xl md:text-2xl font-black tracking-[0.15em] uppercase font-display">
          Myotis Photography
        </h1>
        <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-muted-foreground">
          A Collection of Concert Images
        </p>
      </Link>
      <nav className="hidden md:flex gap-8 text-sm tracking-[0.1em] uppercase">
        <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
          Home
        </Link>
        <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
          About
        </Link>
        <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
          Contact Myotis
        </Link>
      </nav>
    </header>
  );
};

export default Header;
