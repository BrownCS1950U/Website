import React from "react";
import { styles } from "../styles";
import { sections } from "../constants/resources";

const Resources = () => {
  return (
    <div className="relative w-full min-h-screen">

      {/* PAGE BACKGROUND */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/Website/11.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          imageRendering: "pixelated",
        }}
      />

      {/* SCROLLABLE CONTENT WRAPPER */}
      <div className="mx-4 md:mx-[20%] relative min-h-screen no-scrollbar min-h-screen py-10 md:py-[10%] z-10">

        <section className="flex flex-col gap-10 no-scrollbar z-20">

          <div
            className="bg-black/60 shadow-[inset_0_0_12px_#000] p-8 rounded-md backdrop-blur-sm"
            style={{ imageRendering: "pixelated" }}
          >
            <section id="resources">

              <h2 className={styles.titleHeadText}>Resources</h2>

              <div className="flex flex-wrap gap-4 mt-4">
                {sections.map((section, index) => (
                  <div key={index}>
                    <h3 className="mt-5 text-2xl neon-text-red font-normal ease-out duration-500">
                      {section.title}
                    </h3>
                    <hr className="mb-2 border-slate-600" />

                    <div className="flex flex-col gap-1">
                      {section.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          className="w-fit mr-10 text-lg hover-glow"
                          href={link.href}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="text-2xl neon-text-red font-normal ease-out duration-500">
                  Previous Projects
                </h3>
                <hr className="mb-2 border-slate-600" />

                <iframe
                  width="100%"
                  height="600"
                  src="//www.youtube.com/embed/YJKThAiUeXo?si=6RT0bX7RhBRfaYWY"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>

                <br />

                <iframe
                  width="100%"
                  height="600"
                  src="//www.youtube.com/embed/34tPeh4s24E"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

            </section>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Resources;
