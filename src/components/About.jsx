import { React, useContext } from "react";
import { Text, LanguageContext } from "../containers/Language";

const About = () => {
    const { dictionary } = useContext(LanguageContext);
    return (
        <div
            name="about"
            className="w-full h-screen bg-[#0a192f] text-gray-300"
        >
            <div className="flex flex-col justify-center items-center w-full py-20">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                            <Text tid="aboutTitle" />
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>
                            <Text tid="aboutIntro1" />
                            <br></br>
                            <Text tid="aboutIntro2" />
                        </p>
                    </div>
                    <div>
                        <div>
                            <Text tid="aboutText1" />
                            <br></br>
                            <Text tid="aboutText2" />
                            <br></br>
                            <Text tid="aboutText3" />
                            <br></br>
                            <Text tid="aboutText4" />
                            <br></br>
                            <Text tid="aboutText5" />
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
