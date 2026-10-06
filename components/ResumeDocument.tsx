import { profile, skills, experience, projects, education, keyAchievements } from "@/data/portfolio";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

interface ResumeDocumentProps {
  mode?: "ats" | "modern";
  layout?: "single" | "detailed";
  fontFamily?: string;
}

export default function ResumeDocument({ mode = "ats", layout = "single", fontFamily = "Inter" }: ResumeDocumentProps) {
  const isSingle = layout === "single";
  const isModern = mode === "modern";

  // For single page, select the top marquee items with compact high-impact bullets
  const singlePageExperience = [
    {
      ...experience[0], // SPODS Technologies
      bullets: [
        "Developing and maintaining the Pick A Pro marketplace ecosystem across web platform, React Native mobile apps, admin dashboard, and Partner app.",
        "Built cross-platform architecture with React, Next.js, and React Native using Redux Toolkit (RTK) and secure role-based access control (RBAC).",
        "Integrated REST APIs, Google Maps geolocation, and Firebase push notifications; optimized rendering performance across web and mobile."
      ]
    },
    {
      ...experience[1], // NOYT INDIA
      bullets: [
        "Managed independent project modules end-to-end; integrated third-party APIs to significantly elevate functionality and user experience."
      ]
    },
    {
      ...experience[2], // 3FITECH
      bullets: [
        "Collaborated with cross-functional teams to engineer scalable, maintainable code ensuring high software reliability and uptime."
      ]
    },
    {
      ...experience[3], // EDUMITRAM
      bullets: [
        "Developed user-friendly web interfaces for enterprise clients including Educomp Solutions Limited, EbixCash, and Hem Aunty Publications."
      ]
    },
    {
      ...experience[4], // SLOG Solutions
      bullets: [
        "Reduced defects by 20% through systematic debugging in Angular/React apps; trained students in Python and modern web development."
      ]
    }
  ];

  const singlePageProjects = projects.slice(0, 3); // Pick A Pro, UPBScan, Hem Aunty Publications
  const displayExp = isSingle ? singlePageExperience : experience;
  const displayProj = isSingle ? singlePageProjects : projects;
  const displayEdu = isSingle ? education.slice(0, 1) : education;

  const fontUrl = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/ /g, "+")}:wght@400;500;600;700;800&display=swap`;

  // Function to highlight key technologies in text
  const highlightTech = (text: string) => {
    return text.replace(
      /(React\.js|Next\.js|React Native|Node\.js|Express\.js|REST API|REST APIs|Firebase|Google Maps|Redux Toolkit|HTML5|CSS3|JavaScript)/gi,
      "<strong>$1</strong>"
    );
  };

  return (
    <>
      {fontFamily !== "Inter" && (
        <style dangerouslySetInnerHTML={{ __html: `@import url('${fontUrl}');` }} />
      )}
      
      {/* Dynamic Bullets & Print Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-bullets { list-style: none; padding-left: 0; display: flex; flex-direction: column; gap: ${isSingle ? "1.5px" : "2px"}; margin-top: 1px; }
        .custom-bullets li { font-size: ${isSingle ? "10.5px" : "11px"}; color: ${isModern ? "#cbd5e1" : "#334155"}; padding-left: 14px; position: relative; line-height: ${isSingle ? "1.36" : "1.42"}; }
        .custom-bullets li::before { content: '•'; position: absolute; left: 2px; top: -1px; color: ${isModern ? "#a78bfa" : "#1d4ed8"}; font-size: 13px; }
        .custom-bullets li strong { color: ${isModern ? "#ffffff" : "#0f172a"}; font-weight: 600; }
      ` }} />

      <article
        style={{ fontFamily: `'${fontFamily}', -apple-system, BlinkMacSystemFont, sans-serif` }}
        className={`resume-paper ${
          isModern
            ? "dark-modern-mode bg-[#0d0e12] text-zinc-300 border-zinc-800 shadow-2xl shadow-violet-950/20"
            : "bg-white text-slate-800 border-slate-200 shadow-lg"
        } mx-auto w-full ${
          isSingle
            ? "single-page-resume max-w-[820px] px-6 sm:px-8 pt-4 pb-4 text-[10.8px] leading-[1.38]"
            : "detailed-resume max-w-[820px] px-7 sm:px-10 pt-6 pb-5 sm:pt-8 sm:pb-7 text-[11.5px] leading-[1.45]"
        } rounded-md border`}
        aria-label={`Sonu Kumar ${isSingle ? "1-Page" : "Detailed"} Professional Resume`}
      >
        {/* HEADER SECTION */}
        <header className={`border-b-[2px] ${isModern ? "border-violet-500/30" : "border-slate-900"} ${isSingle ? "pb-1.5 mb-2" : "pb-2 mb-2.5"} flex justify-between items-end flex-wrap gap-3`}>
          <div>
            <h1 className={`${isSingle ? "text-[23px]" : "text-[26px]"} font-extrabold ${isModern ? "text-white" : "text-slate-900"} tracking-[-0.5px] leading-[1.1] uppercase`}>
              {profile.name}
            </h1>
            <div className="flex items-center gap-2 mt-[3px]">
              <span className={`text-[13px] font-bold ${isModern ? "text-violet-400" : "text-blue-700"}`}>{profile.role}</span>
              <span className={`${isModern ? "bg-violet-950/50 text-violet-300 border-violet-800/60" : "bg-blue-50 text-blue-700 border-blue-200"} border text-[10.5px] font-bold px-1.5 py-[1px] rounded`}>
                4+ Years Experience
              </span>
            </div>
          </div>
          
          <div className="flex flex-col gap-[2.5px] text-[10.5px] items-end">
            <span className={`inline-flex items-center gap-1.5 ${isModern ? "text-zinc-300" : "text-slate-800"}`}>
              <MapPin className={`w-3 h-3 ${isModern ? "text-violet-400" : "text-blue-700"} shrink-0`} />
              {profile.location}
            </span>
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className={`inline-flex items-center gap-1.5 ${isModern ? "text-zinc-300 hover:text-violet-400" : "text-slate-800 hover:text-blue-700"} hover:underline`}>
              <Phone className={`w-3 h-3 ${isModern ? "text-violet-400" : "text-blue-700"} shrink-0`} />
              {profile.phone}
            </a>
            <a href={`mailto:${profile.email}`} className={`inline-flex items-center gap-1.5 ${isModern ? "text-zinc-300 hover:text-violet-400" : "text-slate-800 hover:text-blue-700"} hover:underline`}>
              <Mail className={`w-3 h-3 ${isModern ? "text-violet-400" : "text-blue-700"} shrink-0`} />
              {profile.email}
            </a>
            <a href={`https://linkedin.com/in/${profile.social.linkedin}`} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-1.5 ${isModern ? "text-zinc-300 hover:text-violet-400" : "text-slate-800 hover:text-blue-700"} hover:underline`}>
              <Linkedin className={`w-3 h-3 ${isModern ? "text-violet-400" : "text-blue-700"} shrink-0`} />
              linkedin.com/in/{profile.social.linkedin}
            </a>
            <a href={`https://github.com/${profile.social.github}`} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-1.5 ${isModern ? "text-zinc-300 hover:text-violet-400" : "text-slate-800 hover:text-blue-700"} hover:underline`}>
              <Github className={`w-3 h-3 ${isModern ? "text-violet-400" : "text-blue-700"} shrink-0`} />
              github.com/{profile.social.github}
            </a>
          </div>
        </header>

        {/* PROFILE SUMMARY */}
        <section className={isSingle ? "mb-1.5" : "mb-2.5"}>
          <h2 className={`${isSingle ? "text-[11.5px] pb-[1px] mb-1" : "text-[12px] pb-[2px] mb-1.5"} font-extrabold uppercase tracking-[1.1px] ${isModern ? "text-zinc-100 border-zinc-800" : "text-slate-900 border-slate-200"} border-b-[1.5px]`}>
            Profile Summary
          </h2>
          <p 
            className={`text-[10.8px] ${isModern ? "text-zinc-300" : "text-slate-700"} text-justify leading-[1.42]`}
            dangerouslySetInnerHTML={{ __html: highlightTech(profile.summary) }}
          />
        </section>

        {/* TECHNICAL SKILLS */}
        <section className={isSingle ? "mb-1.5" : "mb-2.5"}>
          <h2 className={`${isSingle ? "text-[11.5px] pb-[1px] mb-1" : "text-[12px] pb-[2px] mb-1.5"} font-extrabold uppercase tracking-[1.1px] ${isModern ? "text-zinc-100 border-zinc-800" : "text-slate-900 border-slate-200"} border-b-[1.5px]`}>
            Technical Skills
          </h2>
          <div className="flex flex-col gap-1">
            <div className="flex text-[10.8px] items-baseline gap-2">
              <span className={`w-[130px] shrink-0 font-bold ${isModern ? "text-zinc-200" : "text-slate-900"}`}>Frontend & Core:</span>
              <div className={`flex-1 ${isModern ? "text-zinc-300" : "text-slate-700"}`}>
                {skills.languages.concat(skills.frontend).map(s => {
                  const isHighlight = ['React.js', 'Next.js', 'React Native', 'Redux Toolkit'].includes(s);
                  return (
                    <span
                      key={s}
                      className={`px-[5px] py-0 rounded-[3px] text-[10.5px] font-medium whitespace-nowrap inline-block my-[1px] mx-[2px] border ${
                        isHighlight
                          ? isModern
                            ? "bg-violet-950/50 border-violet-800/60 text-violet-300 font-semibold"
                            : "bg-blue-50 border-blue-200 text-blue-700 font-semibold"
                          : isModern
                            ? "bg-white/[0.04] border-zinc-800 text-zinc-300"
                            : "bg-slate-50 border-slate-200 text-slate-700"
                      }`}
                    >
                      {s}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="flex text-[10.8px] items-baseline gap-2">
              <span className={`w-[130px] shrink-0 font-bold ${isModern ? "text-zinc-200" : "text-slate-900"}`}>Backend & APIs:</span>
              <div className={`flex-1 ${isModern ? "text-zinc-300" : "text-slate-700"}`}>
                {skills.backend.map(s => {
                  const isHighlight = ['Node.js', 'Express.js', 'RESTful APIs'].includes(s);
                  return (
                    <span
                      key={s}
                      className={`px-[5px] py-0 rounded-[3px] text-[10.5px] font-medium whitespace-nowrap inline-block my-[1px] mx-[2px] border ${
                        isHighlight
                          ? isModern
                            ? "bg-violet-950/50 border-violet-800/60 text-violet-300 font-semibold"
                            : "bg-blue-50 border-blue-200 text-blue-700 font-semibold"
                          : isModern
                            ? "bg-white/[0.04] border-zinc-800 text-zinc-300"
                            : "bg-slate-50 border-slate-200 text-slate-700"
                      }`}
                    >
                      {s}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="flex text-[10.8px] items-baseline gap-2">
              <span className={`w-[130px] shrink-0 font-bold ${isModern ? "text-zinc-200" : "text-slate-900"}`}>Game & 3D (Unity):</span>
              <div className={`flex-1 ${isModern ? "text-zinc-300" : "text-slate-700"}`}>
                {(skills.gameAnd3d || []).map(s => {
                  const isHighlight = ['Unity 3D / 2D', 'C# Scripting'].includes(s);
                  return (
                    <span
                      key={s}
                      className={`px-[5px] py-0 rounded-[3px] text-[10.5px] font-medium whitespace-nowrap inline-block my-[1px] mx-[2px] border ${
                        isHighlight
                          ? isModern
                            ? "bg-amber-950/40 border-amber-800/60 text-amber-300 font-semibold"
                            : "bg-amber-50 border-amber-200 text-amber-700 font-semibold"
                          : isModern
                            ? "bg-white/[0.04] border-zinc-800 text-zinc-300"
                            : "bg-slate-50 border-slate-200 text-slate-700"
                      }`}
                    >
                      {s}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="flex text-[10.8px] items-baseline gap-2">
              <span className={`w-[130px] shrink-0 font-bold ${isModern ? "text-zinc-200" : "text-slate-900"}`}>Databases & Other:</span>
              <div className={`flex-1 ${isModern ? "text-zinc-300" : "text-slate-700"}`}>
                {skills.databases.concat(skills.other).concat(skills.toolsAndConcepts).map(s => (
                  <span
                    key={s}
                    className={`px-[5px] py-0 rounded-[3px] text-[10.5px] font-medium whitespace-nowrap inline-block my-[1px] mx-[2px] border ${
                      isModern
                        ? "bg-white/[0.04] border-zinc-800 text-zinc-300"
                        : "bg-slate-50 border-slate-200 text-slate-700"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section className={isSingle ? "mb-1.5" : "mb-2.5"}>
          <h2 className={`${isSingle ? "text-[11.5px] pb-[1px] mb-1" : "text-[12px] pb-[2px] mb-1.5"} font-extrabold uppercase tracking-[1.1px] ${isModern ? "text-zinc-100 border-zinc-800" : "text-slate-900 border-slate-200"} border-b-[1.5px]`}>
            Work Experience
          </h2>
          <div className={`flex flex-col ${isSingle ? "gap-1.5" : "gap-2"}`}>
            {displayExp.map((item, idx) => {
              const isCurrent = item.period.toLowerCase().includes('present');
              return (
                <div key={idx} className="break-inside-avoid">
                  <div className="flex justify-between items-baseline mb-[2px] flex-wrap gap-1">
                    <div className="flex items-baseline gap-1.5 flex-wrap">
                      <span className={`text-[12.8px] font-bold ${isModern ? "text-white" : "text-slate-900"}`}>{item.company}</span>
                      <span className={`text-[12px] font-semibold ${isModern ? "text-violet-400" : "text-blue-700"}`}>• {item.role}</span>
                    </div>
                    <span className={`text-[10.5px] font-semibold whitespace-nowrap px-1.5 py-[1px] rounded border ${
                      isCurrent
                        ? isModern
                          ? "bg-emerald-950/50 text-emerald-300 border-emerald-800/60"
                          : "bg-emerald-50 text-emerald-800 border-emerald-200"
                        : isModern
                          ? "bg-white/[0.04] text-zinc-400 border-zinc-800"
                          : "bg-slate-50 text-slate-500 border-slate-200"
                    }`}>
                      {item.period}
                    </span>
                  </div>
                  <ul className="custom-bullets">
                    {item.bullets.map((b, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: highlightTech(b) }} />
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* KEY PROJECTS */}
        <section className={isSingle ? "mb-1.5" : "mb-2.5"}>
          <h2 className={`${isSingle ? "text-[11.5px] pb-[1px] mb-1" : "text-[12px] pb-[2px] mb-1.5"} font-extrabold uppercase tracking-[1.1px] ${isModern ? "text-zinc-100 border-zinc-800" : "text-slate-900 border-slate-200"} border-b-[1.5px]`}>
            Key Projects
          </h2>
          <div className={`flex flex-col ${isSingle ? "gap-1.5" : "gap-2"}`}>
            {displayProj.map((proj, idx) => (
              <div key={idx} className="break-inside-avoid">
                <div className="flex justify-between items-baseline mb-[2px] flex-wrap gap-1">
                  <span className={`text-[12.8px] font-bold ${isModern ? "text-white" : "text-slate-900"}`}>
                    {proj.url ? (
                      <a href={proj.url} target="_blank" rel="noreferrer" className="hover:underline inline-flex items-center gap-1">
                        {proj.title}
                        <span className={`text-[10px] font-semibold ${isModern ? "text-violet-400" : "text-blue-700"}`}>[Live ↗]</span>
                      </a>
                    ) : (
                      proj.title
                    )} <span className={`${isModern ? "text-zinc-400" : "text-slate-500"} font-normal`}>– {proj.result}</span>
                  </span>
                </div>
                <div className={`font-mono text-[9.8px] ${isModern ? "bg-sky-950/40 text-sky-300 border-sky-800/50" : "bg-sky-50 text-sky-700 border-sky-200"} border px-1.5 py-[1px] rounded-[3px] inline-block mb-[2px]`}>
                  {proj.stack.join(" · ")}
                </div>
                <ul className="custom-bullets">
                  {isSingle ? (
                    <li>{proj.resumeDesc || proj.description}</li>
                  ) : (
                    proj.bullets && proj.bullets.length > 0 ? (
                      proj.bullets.map((b, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: highlightTech(b) }} />
                      ))
                    ) : (
                      <li>{proj.description}</li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className={isSingle ? "mb-1" : "mb-2.5"}>
          <h2 className={`${isSingle ? "text-[11.5px] pb-[1px] mb-1" : "text-[12px] pb-[2px] mb-1.5"} font-extrabold uppercase tracking-[1.1px] ${isModern ? "text-zinc-100 border-zinc-800" : "text-slate-900 border-slate-200"} border-b-[1.5px]`}>
            Education
          </h2>
          <div className="flex flex-col gap-1">
            {displayEdu.map((edu, idx) => (
              <div key={idx} className="flex justify-between items-baseline flex-wrap gap-1 text-[11px] break-inside-avoid">
                <div>
                  <span className={`text-[12.8px] font-bold ${isModern ? "text-white" : "text-slate-900"}`}>{edu.institution}</span>
                  <span className={`text-[12px] font-semibold ${isModern ? "text-violet-400" : "text-blue-700"}`}> • {edu.degree}</span>
                  <span className={`text-[10.5px] ${isModern ? "text-zinc-400" : "text-slate-500"}`}> — {edu.location}</span>
                </div>
                <span className={`text-[10.5px] font-semibold ${isModern ? "text-zinc-400" : "text-slate-500"}`}>{edu.year}</span>
              </div>
            ))}
            {isSingle && (
              <div className="flex justify-between items-baseline flex-wrap gap-1 text-[11px] break-inside-avoid">
                 <div>
                  <span className={`text-[12.8px] font-bold ${isModern ? "text-white" : "text-slate-900"}`}>T P Verma College / High School Harinagar</span>
                  <span className={`text-[12px] font-semibold ${isModern ? "text-violet-400" : "text-blue-700"}`}> • Intermediate / Matric</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* KEY ACHIEVEMENTS */}
        {!isSingle && (
          <section className="mb-0">
            <h2 className={`${isSingle ? "text-[11.5px] pb-[1px] mb-1" : "text-[12px] pb-[2px] mb-1.5"} font-extrabold uppercase tracking-[1.1px] ${isModern ? "text-zinc-100 border-zinc-800" : "text-slate-900 border-slate-200"} border-b-[1.5px]`}>
              Key Achievements
            </h2>
            <ul className="custom-bullets">
              {keyAchievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          </section>
        )}

      </article>
    </>
  );
}
