import React, { useState } from "react";
import { Text } from "../containers/Language";

import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import "./logo-style.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { Link } from "react-scroll";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div className="text-xl">
                Laura Vongsy
                <span class="blink"> |</span>
            </div>

            {/* menu */}

            <ul className="hidden md:flex">
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        <Text tid="navbarHome" />
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        <Text tid="navbarAbout" />
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        <Text tid="navbarSkills" />
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                        <Text tid="navbarWork" />
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <LanguageSelector />
            <ul
                className={
                    !nav
                        ? "hidden"
                        : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
                }
            >
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleClick}
                        to="home"
                        smooth={true}
                        duration={500}
                    >
                        <Text tid="navbarHome" />
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link
                        onClick={handleClick}
                        to="about"
                        smooth={true}
                        duration={500}
                    >
                        <Text tid="navbarAbout" />
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link
                        onClick={handleClick}
                        to="skills"
                        smooth={true}
                        duration={500}
                    >
                        <Text tid="navbarSkills" />
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link
                        onClick={handleClick}
                        to="work"
                        smooth={true}
                        duration={500}
                    >
                        <Text tid="navbarWork" />
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link
                        onClick={handleClick}
                        to="contact"
                        smooth={true}
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://www.linkedin.com/in/laura-vongsy-dev-web/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://github.com/LauraVongsy"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="mailto:vongsy.laura.pro@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://drive.google.com/file/d/12nHcM9ouW1E3WfQu6rC5XIegQc4yWsv_/view?usp=share_link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Text tid="navbarResume" />{" "}
                            <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
            {/* Social icons mobile */}
            {nav && (
                <div className="block md:hidden fixed bottom-0 right-0 left-0">
                    <ul className="flex flex-row">
                        <li className=" h-[60px] flex justify-between items-center bg-blue-600">
                            <a
                                className="flex justify-between items-center w-full text-gray-300"
                                href="https://www.linkedin.com/in/laura-vongsy-dev-web/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedin size={30} />
                            </a>
                        </li>
                        <li className=" h-[60px] flex justify-between items-center bg-[#333333]">
                            <a
                                className="flex justify-between items-center w-full text-gray-300"
                                href="https://github.com/LauraVongsy"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub size={30} />
                            </a>
                        </li>
                        <li className=" h-[60px] flex justify-between items-center bg-[#6fc2b0]">
                            <a
                                className="flex justify-between items-center w-full text-gray-300"
                                href="mailto:vongsy.laura.pro@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <HiOutlineMail size={30} />
                            </a>
                        </li>
                        <li className=" h-[60px] flex justify-between items-center bg-[#565f69]">
                            <a
                                className="flex justify-between items-center w-full text-gray-300"
                                href="https://drive.google.com/file/d/12nHcM9ouW1E3WfQu6rC5XIegQc4yWsv_/view?usp=share_link"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsFillPersonLinesFill size={30} />
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
