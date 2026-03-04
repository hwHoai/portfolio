"use client";

import { useState } from "react";
import { Download, Eye, FileText } from "lucide-react";
import Resume, { ResumeType } from "@/constants/Resume";

export default function ResumePage() {
  const [selectedResume, setSelectedResume] = useState<ResumeType>(Resume.FULLSTACK);

  // Helper to get the correct path
  const getResumePath = (filename: string) =>
    `/${encodeURIComponent(filename)}`;

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 animate-fade-in relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-text pb-2">
            My Resumes
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Select a version below to view details.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar / Selector */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <div className="bg-[#0f172a]/80 backdrop-blur-md rounded-2xl p-6 border border-slate-800 shadow-xl">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                Select Version
              </h3>
              <div className="flex flex-col gap-3">
                {Resume.getAllResumes().map((resume) => (
                  <button
                    key={resume.id}
                    onClick={() => setSelectedResume(resume)}
                    className={`group w-full text-left px-4 py-3 rounded-xl transition-all duration-300 border flex items-center justify-between
                      ${
                        selectedResume.id === resume.id
                          ? "bg-blue-600/10 border-blue-500/50 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                          : "bg-slate-800/30 border-slate-700/50 text-slate-400 hover:bg-slate-800 hover:border-slate-600 hover:text-slate-200"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg transition-colors ${selectedResume.id === resume.id ? "bg-blue-500/20 text-blue-400" : "bg-slate-700/50 text-slate-500 group-hover:text-slate-300"}`}
                      >
                        <FileText className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{resume.label}</span>
                    </div>
                    {selectedResume.id === resume.id && (
                      <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#0f172a]/80 backdrop-blur-md rounded-2xl p-6 border border-slate-800 shadow-xl">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-green-500 rounded-full"></span>
                Actions
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <a
                  href={getResumePath(selectedResume.filename)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Eye className="w-5 h-5" />
                  Open in New Tab
                </a>
                <a
                  href={getResumePath(selectedResume.filename)}
                  download
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>

          {/* Main Viewer */}
          <div className="w-full lg:w-2/3">
            <div className="bg-[#0f172a] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-200">
              <div className="bg-slate-900/50 border-b border-slate-800 p-4 flex justify-between items-center backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-4 text-xs text-slate-500 font-mono bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700/50 truncate max-w-50 md:max-w-none">
                    {selectedResume.filename}
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-medium px-2 py-1 rounded bg-slate-800/50">
                  PDF Viewer
                </div>
              </div>

              <div className="grow relative bg-slate-900 w-full h-full group">
                <iframe
                  src={getResumePath(selectedResume.filename)}
                  className="w-full h-full border-none"
                  title={`${selectedResume.label} Resume`}
                />

                {/* Mobile Overlay - Only on very small screens */}
                <div className="lg:hidden absolute inset-0 bg-slate-900/95 flex flex-col items-center justify-center p-8 text-center z-10 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-blue-500/20">
                    <FileText className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Preview Not Available
                  </h3>
                  <p className="text-slate-400 mb-8 max-w-xs mx-auto">
                    For the best experience, please download the resume or view
                    it on a larger screen.
                  </p>
                  <a
                    href={getResumePath(selectedResume.filename)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-semibold shadow-lg shadow-blue-500/20 transition-all active:scale-95"
                  >
                    Open PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
