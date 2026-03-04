"use client";

import { useState } from "react";
import Project from "@/constants/Project";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import Link from "next/link";

/* ── Component ────────────────────────────────────────────────────── */
export const ProjectSection = () => {
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    x: number;
    y: number;
    content: string;
  } | null>(null);

  const showTooltip = (e: React.MouseEvent, content: string) => {
    setTooltip({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      content,
    });
  };

  const hideTooltip = () => {
    setTooltip(null);
  };

  const isValidUrl = (url: string) => url.startsWith("http");

  return (
    <section
      id="projects"
      className="relative bg-bg-secondary py-24 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute left-0 bottom-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-brand opacity-[0.03] blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* ── Section header ── */}
        <div className="mb-16 flex flex-col gap-2 items-center text-center">
          <span className="text-brand text-sm font-semibold tracking-widest uppercase">
            My Work
          </span>
          <h2 className="text-4xl font-bold text-text-primary">
            Featured Projects
          </h2>
          <div className="mt-2 w-12 h-1 rounded-full bg-brand" />
          <p className="mt-4 text-text-secondary max-w-lg">
            A selection of projects that demonstrate my passion for building
            complex web applications and data systems.
          </p>
        </div>

        {/* ── Projects Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Project.data.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-bg-card border border-border rounded-2xl overflow-hidden hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 transition-all duration-300 hover:-translate-y-2 h-full"
            >
              {/* Image Placeholder / Gradient */}
              <div
                className={`h-48 w-full bg-linear-to-br ${project.imageGradient} relative overflow-hidden`}
              >
                {/* Overlay pattern/icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-110 transition-transform duration-500">
                  <FolderGit2 className="w-16 h-16 text-white" />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="flex flex-col grow p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-brand transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.githubUrl &&
                      (isValidUrl(project.githubUrl) ? (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          className="text-text-muted hover:text-text-primary transition-colors"
                          aria-label="View Source Code"
                        >
                          <Github className="w-5 h-5" />
                        </Link>
                      ) : (
                        <div
                          className="text-text-muted/40 cursor-not-allowed flex items-center"
                          onMouseMove={(e) =>
                            showTooltip(e, project.githubUrl!)
                          }
                          onMouseLeave={hideTooltip}
                          aria-label={project.githubUrl}
                        >
                          <Github className="w-5 h-5" />
                        </div>
                      ))}
                    {project.liveUrl &&
                      (isValidUrl(project.liveUrl) ? (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          className="text-text-muted hover:text-brand transition-colors"
                          aria-label="View Live Project"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Link>
                      ) : (
                        <div
                          className="text-text-muted/40 cursor-not-allowed flex items-center"
                          onMouseMove={(e) => showTooltip(e, project.liveUrl!)}
                          onMouseLeave={hideTooltip}
                          aria-label={project.liveUrl}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </div>
                      ))}
                  </div>
                </div>

                <p className="text-text-secondary text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-brand bg-brand/10 px-2.5 py-1 rounded-full border border-brand/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── View All / More ── */}
        <div className="mt-16 flex justify-center">
          <Link
            href="https://github.com/hwHoai"
            target="_blank"
            className="group flex items-center gap-2 px-6 py-3 bg-transparent border border-brand/50 text-brand rounded-full hover:bg-brand hover:text-white transition-all duration-300 font-medium"
          >
            View Full Project Archive
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      {/* Tooltip */}
      {tooltip?.visible && (
        <div
          className="fixed z-50 px-3 py-2 bg-bg-card/90 border border-border/50 text-text-primary text-xs rounded-md shadow-xl backdrop-blur-sm pointer-events-none whitespace-nowrap"
          style={{
            left: tooltip.x + 12,
            top: tooltip.y + 12,
          }}
        >
          {tooltip.content}
        </div>
      )}
    </section>
  );
};
