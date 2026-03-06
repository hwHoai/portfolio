import PersonalInformation from "@/constants/PersonalInfomation";
import SkillGroup from "@/constants/SkillGroup";

/* ── Component ────────────────────────────────────────────────────── */
export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-bg-secondary py-16 lg:rounded-4xl lg:mx-[10%] overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* ── Section header ── */}
        <div className="mb-14 flex flex-col gap-2 items-center">
          <span className="text-brand text-sm font-semibold animate-pulse-slow tracking-widest uppercase">
            About me
          </span>
          <h2 className="text-4xl font-bold text-text-primary relative">
            Who I Am ?
          </h2>
          <div className="mt-1 w-12 h-1 rounded-full bg-brand animate-pulse-slow" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* ── Left column ── */}
          <div className="flex flex-col gap-8">
            {/* Bio */}
            <div className="flex flex-col gap-4 text-text-secondary leading-relaxed">
              <p>
                I&apos;m{" "}
                <span className="text-text-primary font-semibold">
                  Đào Hữu Hoài
                </span>
                , a Computer Science student and Full Stack Developer based in
                Ho Chi Minh City, Vietnam. I love building end-to-end products —
                from responsive, user-friendly interfaces to robust APIs and
                automated data pipelines.
              </p>
              <p>
                My work lives at the crossroads of{" "}
                <span className="text-brand">web engineering</span> and{" "}
                <span className="text-brand">AI/Data processing</span>. Whether
                it&apos;s crafting seamless experiences with React &amp;
                Next.js, architecting secure backends with Java Spring Boot, or
                extracting cognitive metrics from complex EEG signals using
                Python, I bring the same dedication to practical
                problem-solving.
              </p>
              <p>
                I&apos;m passionate about clean code, scalable system design,
                and creating applications that bridge the gap between complex
                data and everyday users.
              </p>
            </div>

            {/* Personal info */}
            <div className="flex flex-col gap-3">
              {PersonalInformation.getAllInfo().map(({ icon, text, href }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 text-sm text-text-secondary"
                >
                  <span className="text-brand">{icon}</span>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand transition-colors duration-200"
                    >
                      {text}
                    </a>
                  ) : (
                    <span>{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column: skills ── */}
          <div className="flex flex-col gap-6">
            {SkillGroup.getAllGroups().map(({ icon, label, skills }) => (
              <div
                key={label}
                className="bg-bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-border-accent transition-colors duration-300"
              >
                <div className="flex items-center gap-2 text-brand font-semibold text-sm">
                  {icon}
                  <span>{label}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-brand-muted border border-border-accent text-text-secondary text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
