import Experience from "@/constants/Experience";
import { Calendar } from "lucide-react";

/* ── Component ────────────────────────────────────────────────────── */
const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative bg-bg-primary py-24 overflow-hidden"
    >
      {/* Background accent glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand opacity-[0.05] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* ── Section header ── */}
        <div className="mb-14 flex flex-col gap-2">
          <span className="text-brand text-sm font-semibold tracking-widest uppercase">
            My Journey
          </span>
          <h2 className="text-4xl font-bold text-text-primary">
            Work &amp; Education
          </h2>
          <div className="mt-2 w-12 h-1 rounded-full bg-brand" />
        </div>

        {/* ── Timeline ── */}
        <div className="flex flex-col gap-12 relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {Experience.data.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex grow md:flex-row md:gap-0 items-start group ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Company and Period */}
              <div
                className={`flex flex-row md:w-1/2 pl-4 md:pl-0 ${
                  index % 2 != 0 ? "md:pr-4 flex-row-reverse" : "md:pl-4"
                }`}
              >
                <div
                  className={`hidden md:flex flex-col md:flex-row items-center gap-2 text-sm max-lg:text-[10px] text-text-muted bg-bg-primary/50 px-3 py-1.5 ${
                    index % 2 != 0
                      ? "max-md:rounded-full sm:rounded-l-full"
                      : "max-md:rounded-full sm:rounded-r-full"
                  } w-fit border border-border-accent  `}
                >
                  <span>{item.company}</span>
                  <span>|</span>
                  <Calendar className="w-4 h-4" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 flex items-center justify-center w-12 h-12 rounded-full border border-border bg-bg-secondary group-hover:border-brand/50 transition-colors z-10 shadow-[0_0_0_4px_var(--color-bg-primary)]">
                <div className="text-brand group-hover:text-brand-hover transition-colors">
                  {item.icon}
                </div>
              </div>

              {/* Content Card Wrapper */}
              <div
                className={`w-full md:w-1/2 pl-10 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                }`}
              >
                <div className="bg-bg-card border border-border rounded-2xl p-4 md:px-6 md:py-4 hover:border-border-accent transition-all duration-300 shadow-sm hover:shadow-md group-hover:-translate-y-1">
                  <div className="flex flex-col mb-2">
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-brand transition-colors">
                      {item.role}
                    </h3>
                    <span className=" px-3 py-1.5 rounded-full text-[0.8rem] text-text-muted w-fit mt-1">
                      {item.company}
                    </span>
                  </div>

                  <ul className="flex flex-col text-sm text-text-secondary leading-relaxed list-disc list-inside marker:text-brand">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="pl-2 -indent-4 ml-4">
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div
                    className={`flex md:w-1/2 pl-4 md:pl-0 flex-row-reverse items-center mt-2`}
                  >
                    <div
                      className={`hidden max-md:flex flex-col items-center gap-2 text-sm text-text-muted
                      w-fit`}
                    >
                      <div className="flex items-center gap-1 border border-border-accent bg-bg-primary/50 px-3 py-1.5 rounded-full">
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
