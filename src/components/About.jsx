import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-[#0a192f] text-gray-300"
        >
            <div className="flex flex-col justify-center items-center w-full py-20">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>
                            Hi. I'm Laura Vongsy, nice to meet you. Please take
                            a look around.
                        </p>
                    </div>
                    <div>
                        <div>
                            I had been working as a nurse for a few years before
                            I felt the urge to ask myself questions about what I
                            really wanted to do for the rest of my life.
                            <br></br> I began to make researches to find the job
                            that would suit me the best, and this is how I got
                            interested in Web Development. <br></br> I
                            discovered a whole new world, full of challenges and
                            full of opportunities, and I was hooked!<br></br>
                            Soon after, I subscribed to an online Web
                            Development class with Openclassrooms, and 6 months
                            later I graduated!<br></br>I rapidly acquired skills
                            in HTML, CSS, Sass and Javascript. I then worked on
                            APIs and I learned to code with, Node Js, Express
                            and I learned to use MongoDb and Firebase.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
