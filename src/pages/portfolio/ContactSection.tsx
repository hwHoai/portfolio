"use client";
import PersonalInformation from "@/constants/PersonalInfomation";
import { Send, Terminal } from "lucide-react";
import { useState } from "react";

/* ── Component ────────────────────────────────────────────────────── */
export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contact submission from portfolio");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    window.location.href = `mailto:${PersonalInformation.email.text}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative bg-bg-primary py-24 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 w-full h-px bg-linear-to-r from-transparent via-brand/20 to-transparent" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-4">
          <span className="text-brand text-sm font-semibold tracking-widest uppercase">
            Contact
          </span>
          <h2 className="text-4xl font-bold text-text-primary">Get In Touch</h2>
          <div className="mt-2 w-12 h-1 rounded-full bg-brand" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* ── Left Column: Contact Info ── */}
          <div className="flex flex-col gap-8">
            <p className="text-text-secondary leading-relaxed text-lg">
              I’m currently looking for new opportunities as a{" "}
              <span className="text-brand font-medium">
                Full Stack Developer
              </span>{" "}
              or <span className="text-brand font-medium">AI Engineer</span>.
              Whether you have a question, a project idea, or just want to say
              hi, feel free to reach out!
            </p>

            <div className="flex flex-col gap-6 mt-4">
              {/* Detailed Contact Cards */}
              <a
                href={PersonalInformation.email.href}
                className="group flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-border hover:border-brand/50 transition-all duration-300 hover:translate-x-1"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                  {PersonalInformation.email.icon}
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider font-semibold">
                    Email Me
                  </p>
                  <p className="text-text-primary font-medium group-hover:text-brand transition-colors">
                    {PersonalInformation.email.text}
                  </p>
                </div>
              </a>

              <a
                href={PersonalInformation.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-border hover:border-brand/50 transition-all duration-300 hover:translate-x-1"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                  {PersonalInformation.linkedin.icon}
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider font-semibold">
                    Connect on LinkedIn
                  </p>
                  <p className="text-text-primary font-medium group-hover:text-brand transition-colors">
                    linkedin.com/in/dhhoai
                  </p>
                </div>
              </a>

              <a
                href={PersonalInformation.github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-border hover:border-brand/50 transition-all duration-300 hover:translate-x-1"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                  {PersonalInformation.github.icon}
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider font-semibold">
                    Check my code
                  </p>
                  <p className="text-text-primary font-medium group-hover:text-brand transition-colors">
                    github.com/hwHoai
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* ── Right Column: Terminal / Message mockup ── */}
          <div className="relative">
            <div className="bg-[#1e1e1e] rounded-xl border border-border shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="ml-4 flex items-center gap-2 text-xs text-gray-400 font-mono">
                  <Terminal className="w-3 h-3" />
                  <span>bash — contact.sh</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm overflow-hidden min-h-100 flex flex-col">
                <div className="text-green-400 mb-4">
                  $ ./send-message.sh --to=&quot;daohuuhoai2655@gmail.com&quot;
                </div>

                {/* Form fields styled as terminal inputs */}
                <form
                  className="flex flex-col gap-4 grow"
                  onSubmit={handleSubmit}
                >
                  <div className="space-y-1">
                    <label className="text-blue-400 text-xs">name:</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name || ""}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-transparent border-b border-gray-700 focus:border-green-500 text-gray-300 py-1 px-0 outline-none placeholder:text-gray-700 transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-blue-400 text-xs">email:</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email || ""}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-transparent border-b border-gray-700 focus:border-green-500 text-gray-300 py-1 px-0 outline-none placeholder:text-gray-700 transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-1 grow flex flex-col">
                    <label className="text-blue-400 text-xs">message:</label>
                    <textarea
                      name="message"
                      value={formData.message || ""}
                      onChange={handleChange}
                      placeholder="> Type your message here..."
                      className="w-full grow bg-transparent border-b border-gray-700 focus:border-green-500 text-gray-300 py-1 px-0 outline-none resize-none placeholder:text-gray-700 transition-colors min-h-30"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="mt-4 flex items-center gap-2 bg-green-600/20 text-green-400 px-4 py-2 border border-green-600/50 hover:bg-green-600/30 transition-colors w-fit rounded self-end"
                  >
                    <span>[ Submit ]</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              </div>
            </div>

            {/* Decorative elements behind terminal */}
            <div className="absolute -z-10 -right-4 -bottom-4 w-full h-full border border-border/50 rounded-xl bg-bg-card/50" />
          </div>
        </div>
      </div>
    </section>
  );
};
