export const Footer = () => {
  return (
    <footer className="w-full bg-bg-primary border-t border-border py-8 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-text-muted text-sm flex items-center justify-center gap-1">
          Designed & Built by{" "}
          <span className="text-text-primary font-medium">Hữu Hoài</span>
          <span className="text-brand mx-1">•</span>© {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
