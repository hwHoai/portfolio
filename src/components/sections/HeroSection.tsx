import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section id="home" className="relative h-full flex items-baseline bg-bg-primary overflow-hidden py-28">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-150 h-150 rounded-full bg-brand opacity-10 blur-[120px]" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid sm:grid-cols-2 gap-12 items-center py-24 md:py-0">
        {/* ── Left: Text content ── */}
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary leading-tight">
            Hi, I&apos;m <span className="text-brand">Hữu Hoài</span>
          </h1>

          <p className="text-text-secondary text-lg leading-relaxed max-w-md">
            I blend full-stack engineering with data intelligence. From crafting
            seamless web interfaces to designing robust APIs and data pipelines,
            I bring ideas to life through clean code and practical design.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="px-7 py-3 rounded-full bg-brand hover:bg-brand-hover text-text-primary font-medium text-sm transition-colors duration-200"
            >
              Contact me
            </a>
            <Link
              href="/resume"
              className="px-7 py-3 rounded-full border border-border-accent text-text-primary font-medium text-sm hover:bg-brand-muted transition-colors duration-200"
            >
              Download Resume
            </Link>
          </div>
        </div>

        {/* ── Right: Profile photo ── */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full animate-pulse-glow" />
            {/* Avatar circle */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-brand/40 bg-bg-secondary">
              <Image
                src="/profile.jpg"
                alt="Hữu Hoài profile photo"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
