import React from "react";
import { styles } from "../styles";
import { sections } from "../constants/resources";

const Resources = ({onChange, onSky, onHome}) => {
  onChange(true);
  onSky(true);
  onHome(false);

  return (
    <div
    className={`absolute top-0 left-0 h-screen w-screenno-scrollbar transition-transform duration-400`}
  >

      <div className=" mx-[20%] relative overflow-y-auto no-scrollbar h-full">
      <section className="mt-[10%] mb-[10%]">
      <section id="resources">
      <div>
        <h2 className={styles.titleHeadText}>Resources</h2>
      </div>
      <div className="flex flex-wrap gap-4">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="mt-5 text-2xl ease-out duration-500 neon-text-blue font-normal">{section.title}</h3>
            <hr className="mb-2 border-slate-600" />
            <div className="flex flex-col gap-1">
              {section.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  className="w-fit mr-10 text-lg"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
      <h3 className="mt-5 text-2xl font-display ease-out duration-500 neon-text-blue font-normal">Previous Projects</h3>
      <hr className="mb-2 border-slate-600" />
      <iframe width="100%" height="600" src="//www.youtube.com/embed/34tPeh4s24E" frameborder="0" allowfullscreen=""></iframe>

      </div>
      </section>
      </section>
      </div>
    </div>
  );
};

export default Resources;
