import React from "react";
import { Link } from "react-router-dom";

const Table = ({ data, lectures = false, projects = false, labs = false }) => {
  const commonClasses =
    "pb-3 text-[#00CCFF] font-display ease-out duration-500 neon-text-red font-bold";

  return (
    <table className="w-full mx-auto">
      <thead style={{ borderBottom: "2px solid", color: "#FFFFFF" }}>
        <tr className="table-header">
          {projects ? (
            <>
              <th className={`text-left ${commonClasses}`}>Project</th>
              <th className={`px-5 text-left ${commonClasses}`}>Checkpoint</th>
              <th className={`text-right ${commonClasses}`}>Due Date</th>
              <th className={`text-right ${commonClasses}`}>Link</th>
            </>
          ) : labs ? (
            <>
              <th className={`text-left ${commonClasses}`}>Topic</th>
              <th className={`px-5 text-right ${commonClasses}`}>Due Date</th>
              <th className={`text-right ${commonClasses}`}>Handout</th>
            </>
          ) : (
            <>
              <th className={`text-left ${commonClasses}`}>Topic</th>
              <th className={`px-5 text-right ${commonClasses}`}>Date</th>
              <th className={`text-right ${commonClasses}`}>Google Slides</th>
              <th className={`text-right ${commonClasses}`}>Zoom Recordings</th>
            </>
          )}
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {projects ? (
              <>
                <td className="py-3 text-left">{item.project}</td>
                <td className="px-5 text-left">{item.checkpoint}</td>
                <td className="px-5 text-right">{item.dateDue}</td>

                <td className="text-right">
                  {item.link ? (
                    <Link
  to={`/${item.link.replace(/^\//, "")}`}
  className="hover-glow focus:underline"
  style={{ color: "#b30000", fontWeight: "bold" }}
>
  Handout
</Link>


                  ) : (
                    "-"
                  )}
                </td>
              </>
            ) : labs ? (
              <>
                <td className="py-3 text-left">{item.topic}</td>
                <td className="px-5 text-right">{item.date}</td>
                <td className="text-right">
                  {item.slides ? (
                    <a
                      className="hover-glow focus:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.slides}
                      style={{ color: "#b30000", fontWeight: "bold" }}
                    >
                      Handout
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
              </>
            ) : (
              <>
                <td className="py-3 text-left">{item.topic}</td>
                <td className="px-5 text-right">{item.date}</td>

                <td className="text-right">
                  {item.googleSlides ? (
                    <a
                      className="hover-glow focus:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.googleSlides}
                      style={{ color: "#b30000", fontWeight: "bold" }}
                    >
                      Slides
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="text-right">
                  {item.zoomRecording ? (
                    <a
                      className="hover-glow focus:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.zoomRecording}
                      style={{ color: "#b30000", fontWeight: "bold" }}
                    >
                      Recording
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
                {!lectures && (
                  <td className="text-right">
                    {item.worksheets ? (
                      <a
                        className="hover-glow focus:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.worksheets}
                        style={{ color: "#b30000", fontWeight: "bold" }}
                      >
                        Worksheet
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                )}
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
