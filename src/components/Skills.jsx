import React from "react";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/javascript.png";
import node from "../assets/skills/node.png";
import react from "../assets/skills/react.png";
import mongo from "../assets/skills/mongo.png";
import tailwind from "../assets/skills/tailwind.png";
import github from "../assets/skills/github.png";
import fireBase from "../assets/skills/firebase.png";

const Skills = () => {
    return (
        <div name="skills" className="w-full  bg-[#0a192f] text-gray-300">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full py-20">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
                        Skills
                    </p>
                    <p className="py-4">
                        These are the technologies I've worked with
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={html}
                            alt="HTML icon"
                        />
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={css}
                            alt="HTML icon"
                        />
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={javascript}
                            alt="HTML icon"
                        />
                        <p className="my-4">JAVASCRIPT</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={react}
                            alt="HTML icon"
                        />
                        <p className="my-4">REACT</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={github}
                            alt="HTML icon"
                        />
                        <p className="my-4">GITHUB</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={node}
                            alt="HTML icon"
                        />
                        <p className="my-4">NODE JS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={mongo}
                            alt="HTML icon"
                        />
                        <p className="my-4">MONGO DB</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={tailwind}
                            alt="HTML icon"
                        />
                        <p className="my-4">TAILWIND</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img
                            className="w-20 mx-auto"
                            src={fireBase}
                            alt="HTML icon"
                        />
                        <p className="my-4">FIREBASE</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
