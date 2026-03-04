const SiteFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="text-center py-12 border-t border-border">
      <p className="text-sm text-muted-foreground mb-4">
        © 2026 Myotis Photography – All Rights Reserved
      </p>
      <button
        onClick={scrollToTop}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wider uppercase"
      >
        Back to top ↑
      </button>
    </footer>
  );
};

export default SiteFooter;
