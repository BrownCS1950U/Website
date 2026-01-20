import { Link } from "react-router-dom";
import React from "react";

const Syllabus = () => {
    return (
        <>
            {/* Repeating texture background */}
            <div
                className="fixed inset-0 -z-10"
                style={{
                    backgroundImage: "url('/Website/13.jpg')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "auto",
                    imageRendering: "pixelated",
                }}
            />

            {/* Scrollable content */}
            <div className="relative w-full min-h-screen pt-20 pb-20 flex justify-center">
                {/* Doom-style centered content panel */}
                <div className="w-full max-w-4xl bg-black/60 border border-black p-10 text-white rounded-md backdrop-blur-sm">
                    <h1 className="text-[1.6rem] font-doom text-[#b30000] mb-4">
                        CS1950U Syllabus - Spring 2026
                    </h1>
                    <p className="mt-4">
                      Course Staff Professor: Daniel Ritchie
                    </p>
                    <p className="mt-4">
                      TAs: Faisal Zaghloul & Autumn Tilley
                    </p>
                    <p className="mt-4">
                      Classes are held on Wednesdays from 3:00 PM - 5:30 PM. Slides will be posted online after each class to review. Students are encouraged to attend classes with questions in mind.
                    </p>
                    <p className="mt-4">
                      A "when2meet" link will be shared to help decide times for Office Hours. Students can also schedule individual or group meetings by notifying the staff at least 24 hours in advance.
                    </p>
                    <p className="mt-4">
                      We will be using Slack for communications. The help channel is available for course-related questions, while private messages can be used for confidential inquiries. Staff may share anonymized questions and answers in the help channel if deemed useful for others.
                    </p>

                    <h2 className="mt-10 text-[#b30000] text-3xl font-bold">
                      Course Structure
                    </h2>

                    <p className="mt-4">
                      Class Goals
                      <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li> Build your own 3D game engine from scratch. </li>
                        <li> Develop games using your custom engine. </li>
                        <li> Enhance your software engineering and design skills.</li>
                        <li> Get a sense for developing large-scale software.</li>
                        <li> Exchange experience with others.</li>
                      </ul>
                    </p>

                    <p className="mt-4">
                      Useful Skills
                      <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li> Proficiency in C++. </li>
                        <li> Knowledge of Graphics/OpenGL. </li>
                        <li> Understanding of basic vector math.</li>
                        <li> Experience in software design.</li>
                        <li> Passion for game development.</li>
                      </ul>
                    </p>

                    <p className="mt-4">
                      Assignments
                      <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li> <strong>Warmup Project:</strong> A startup assignment focused on basic engine architecture, graphics, and controls (4 weeks, 3 checkpoints). </li>
                        <li> <strong>Platformer Project:</strong> A 7-week project with 3 checkpoints, covering collisions, rigid body physics, spatial acceleration, and AI/pathfinding. </li>
                      </ul>
                    </p>

                    <p className="mt-4">
                      Short Presentations
                      <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li> Once per semester, each student is expected to present an interesting topic that we won’t cover in class. 
                          Each presentation should be 5 minutes max. Sign up for a presentation slot {" "}  
                          <a
                                href="https://docs.google.com/spreadsheets/d/1-exOZr2oF4vszWfUATd7s3Cu08IRZGBdOgLmm1RADzU/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#00ccff]"
                            >
                                here.
                            </a>
                           </li>
                        <li> Kinds of topics include: </li>
                          <ul className="list-[circle] ml-6 mt-2 space-y-1">
                            <li>Recent production features (Unreal Nanite, Unity VFX graphs).</li>
                            <li>Comprehensive overview of smaller engines.</li>
                            <li>Recent hardware architecture features that are relevant to games.</li>
                            <li>Specialized tools for game development.</li>
                            <li>Anything else you’re excited about!</li>
                          </ul>
                      </ul>
                    </p>

                    <p className="mt-4">
                      Architecture Review:
                      <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li> Deep dive into your engine. The review should cover:</li>
                          <ul className="list-[circle] ml-6 mt-2 space-y-1">
                            <li>Your engine’s overall architecture</li>
                            <li>Design choices</li>
                            <li>Interface to game developers</li>
                            <li>Specialized tools for game development.</li>
                            <li>Playthrough of your most recent game</li>
                          </ul>
                        <li>Done twice during the semester.</li>
                        <li>Other students are encouraged to come up with questions, critique, and insights.</li>
                      </ul>
                    </p>

                    <p className="mt-4">
                      Labs
                      <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li> Throughout the semester, there will be 5 labs aimed to provide tools 
                          and features that are not explicitly covered during class. </li>
                        <li> Although there are suggested deadlines, you are allowed to 
                          finish them up through the last day of class (5/6/26) </li>
                        <li> Labs will be graded by completion. To get credit, please show a 
                          TA your work either during class or office hours.</li>
                      </ul>
                    </p>

                    <p className="mt-4">
                      Final Project:
                      <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li>A 5-week open-ended project.</li>
                        <li>Done in teams of two. 
                          Students should team up immediately after the second architecture review.</li>
                        <li>Emphasis on creative freedom in engine and game features.</li>
                      </ul>
                    </p>

                    <p className="mt-4">
                      Class Roadmap
                      <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li><strong>Weeks 1-2:</strong> Basic engine architecture.</li>
                        <li><strong>Week 3:</strong> Gameworld, ECS, systems.</li>
                        <li><strong>Weeks 4-5:</strong> Collisions (Ellipsoid/Triangle, Sphere/Cylinder, AAB, GJK, EPA).</li>
                        <li><strong>Weeks 6-7:</strong> Engine optimizations (spatial subdivision, frustum culling, texture atlases).</li>
                        <li><strong>Weeks 8-9:</strong> Pathfinding and AI.</li>
                        <li><strong>Weeks 10-14:</strong> Final project development.</li>
                      </ul>
                    </p>

                    {/* <br></br> */}
                    <p className="mt-4">
                      Grading
                      <p>
                      Grades and feedback will be provided during class or office hours.
                      <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li><strong>Checkpoints </strong> (50 points):</li>
                          <ul className="list-[circle] ml-6 mt-2 space-y-1">
                            <li>6 checkpoints, 7 points each, except the setup tutorial (6 points)
                               and collisions checkpoint (12 points).</li>
                            <li>4 required labs, 1% each</li>
                          </ul>
                        <li><strong>Short Presentations </strong> (5 points).</li>
                        <li><strong>Architecture reviews </strong> (10 points).</li>
                        <li><strong>In-Class Participation </strong> (5 points).</li>
                        <li><strong>Final Project </strong> (30 points)</li>
                        <br></br>
                        <li><strong>Total: </strong> 100 points possible, excluding extra credit.</li>
                      </ul>
                      </p>
                    </p>

                    <p className="mt-4">
                      Final Grades
                      <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li>90+ points: A</li>
                        <li>80-89 points: B</li>
                        <li>70-79 points: C</li>
                        <li>Below 70 points: NC.</li>
                      </ul>
                    </p>

                    <p className="mt-4">
                      Late Policy
                      <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li><strong>Late Days: </strong> 2 weeks allowed in total for late submissions</li>
                        <ul className="list-[circle] ml-6 mt-2 space-y-1">
                          <li>No more than one week can be used per assignment</li>
                          <li>Late submissions will incur 50% deduction after that period.</li>
                        </ul>
                        <li>Submit via GitHub commits, with timestamps determining lateness.</li>
                      </ul>
                    </p>

                    <p className="mt-4">
                      Collaboration Policy
                      <p ClassName="mt-4">
                        This is a collaborative class. We are here to learn from each other. 
                        Students are encouraged to discuss lectures, assignments, debug each other’s code, 
                        and playtest each other’s games. While debugging each other’s code is permitted, 
                        plagiarism will be detected and penalized. Copying code or any form of “borrowing” 
                        code from other students is prohibited. You may use third-party software, libraries, data, 
                        or other resources (including large language models such as ChatGPT or Github Copilot), 
                        as long as you properly cite them (i.e. in your assignment README) and clearly state 
                        what work is your own.
                      </p>
                      <p>
                        As a general policy (for this course and for the rest of your academic career): 
                        if you use any idea, text, code, or data from elsewhere, then cite it.
                      </p>
                    </p>

                    <p className="mt-4">
                      GenAI Policy
                      <p ClassName="mt-4">
                        GenAI tools are a great addition to a software-developer’s repertoire. 
                        Recent models do a very good job of reducing the friction that comes from diagnosing issues, 
                        looking up APIs, and adhering to best practices. However, over-reliance on GenAI tools 
                        for code development can adversely affect critical thinking, long-term design coherency, 
                        and the ability to effectively co-develop features with others. 
                        These effects may be detrimental to the learning outcomes.
                      </p>
                      <p>
                        That said, there are no restrictions on the use of GenAI for this course.
                         However, students are expected to fully understand their engine’s code, 
                         and are able to collaborate with others effectively for their final projects. 
                         This is a higher-level course, so students are expected to be mature enough 
                         to be judicious with their GenAI use.
                      </p>
                    </p>

                    <p className="mt-4">
                      Testing and Style
                      <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li>Code must run at 20+ FPS.</li>
                        <li>Use a reasonable coding style based on prior courses, 
                          reputable open-source projects, or personal preference.</li>
                        <li>Little-to-no crashes nor glitches:</li>
                        <ul className="list-[circle] ml-6 mt-2 space-y-1">
                          <li>Prioritize fixing immersion-breaking bugs.</li>
                          <li></li>
                        </ul>
                      </ul>
                    </p>

                    <p className="mt-4">
                      Getting Help
                      <p ClassName="mt-4">
                        If you’re stuck, first review the course slides and Slack discussions. 
                        TA assistance is available during office hours. 
                        However, students should strive to solve problems independently
                        before seeking help.
                      </p>
                      <p>
                        We look forward to seeing the incredible projects you will create in CS1950U!
                      </p>
                    </p>

                    <h2 className="mt-10 text-[#b30000] text-3xl font-bold">
                      General Course Policies
                    </h2>

                    <p className="mt-4">
                      Diversity & Inclusion
                      <p ClassName="mt-4">
                      </p>
                      <p>
                      </p>
                    </p>

                    <p className="mt-4">
                      Academic Integrity
                      <p ClassName="mt-4">
                      </p>
                      <p>
                      </p>
                    </p>

                    <p className="mt-4">
                      Collaboration Policy
                      <p ClassName="mt-4">
                        This is a collaborative class. We are here to learn from each other. 
                        Students are encouraged to discuss problems, ideas, and course material
                        with other students in the class. Debugging each other’s code is also
                        permitted. However, copying code or any form of “borrowing” code from
                        other students is prohibited. You may use third-party software, libraries
                        data, or other resources (including large language models such as ChatGPT
                        or Github Copilot), as long as you properly cite them 
                        (i.e. in your assignment README) and clearly state what work is your own.
                      </p>
                      <p ClassName="mt-4">
                        As a general policy (for this course and for the rest of your academic career): 
                        if you use any idea, text, code, or data from elsewhere, then cite it.
                      </p>
                    </p>

                    <p className="mt-4">
                      Accomodations
                      <p ClassName="mt-4">
                        Brown University is committed to full inclusion of all students. 
                        Please inform the instructor if you have a disability or other condition 
                        that might require accommodations or modification of any of these course procedures. 
                        You may email the instructor, come to his office hours, or speak with him after class, 
                        and your confidentiality will be respected. We will do whatever we can to support accommodations recommended by SAS. 
                        For more information, contact Student Accessibility Services (SAS) at 401-863-9588 or SAS@brown.edu. 
                        Students in need of short-term academic advice or support can contact one of the deans in the Dean of the College office.
                      </p>
                    </p>

                    <p className="mt-4">
                      Mental Health
                      <p ClassName="mt-4">
                        Your well-being matters, not just for your grades or assignments, 
                        but for you as a whole person. Taking care of your mental and physical health 
                        is essential to thriving both in this course and beyond it. We understand that
                        academic life can be demanding, and we want to make sure you feel supported 
                        every step of the way.
                      </p>
                      <p>
                        Support in this course goes beyond academics. 
                        If you're ever feeling overwhelmed, burned out, or simply need someone to talk to, 
                        please know there are many resources available---some formal, some peer-led, all here to support you:
                      </p>
                      <ul className="list-disc ml-6 mt-4 space-y-2">
                        <li>Health & Wellness Student Advocates: Trained peer advocates within the CS department who can help you navigate wellness resources and talk through what kind of support might be most helpful.</li>
                        <li>Student Accessibility Services (SAS): Coordinates accommodations and support for students with disabilities, chronic conditions, or temporary impairments.</li>
                        <li>Counseling and Psychological Services (CAPS): Offers confidential individual counseling, group therapy, crisis support, and well-being workshops.</li>
                        <li>Active Minds: A student-run mental health awareness group that hosts events and spaces for open conversations about wellness</li>
                      </ul>
                    </p>

                    <p className="mt-4">
                      Incomplete Policy
                      <p ClassName="mt-4">
                        We expect everyone to complete the course on time. 
                        However, we certainly understand that there may be factors beyond your control,
                        such as health problems and family crises, that prevent you from finishing
                        the course on time. If you feel you cannot complete the course on time,
                        please discuss with the instructor the possibility of being given a grade
                        of Incomplete for the course and setting a schedule for completing the
                        course in the upcoming year.
                      </p>
                    </p>

                </div>
            </div>
        </>
    );
};

export default Syllabus;