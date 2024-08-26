import React from "react";
import { useNavigate } from "react-router-dom";

const SectionContent = ({ id, title, rules, description, extraContent }) => {

    return (
        <div id={id} className="container px-4 py-16 mx-auto space-y-8 lg:max-w-3xl shadow-lg border-4 border-rose-500 bg-black text-white rounded-lg bg-opacity-80">
            <h2 className="text-2xl font-bold md:text-4xl">{title}</h2>
            {description && <p className="text-md md:text-lg">{description}</p>}
            {extraContent && <div className="space-y-4 text-md md:text-lg">{extraContent}</div>}
            <h3 className="mb-3 text-lg font-bold md:text-xl"><strong>RULES</strong></h3>
            <ul className="space-y-4">
                {rules.map((item, index) => (
                    <li key={index} className="space-y-1">
                        <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-default-400 dark:text-default-600">
                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                            </svg>
                            <h4 className="font-medium">{item.text}</h4>
                        </div>
                        {item.description && (
                            <p className="ml-7 text-gray-400 dark:text-gray-600">{item.description}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default function CardTech() {
    const navigate = useNavigate(); // Move this hook inside the functional component

    const rulesSection1 = [
        { text: "The topic of the presentation can be chosen on your own. It's advisable to choose a domain related to AI, ML, DL, CV, NLP, etc..." },
        { text: "Participants are expected to be present 15 minutes before their scheduled time." },
        { text: "Participants must submit their papers by the deadline." },
        { text: "Participants should maintain professionalism and respect towards judges and fellow participants." },
        { text: "Prizes will be awarded to the top two presentations based on the judges' scores." },
    ];

    const rulesSection2 = [
        { text: "In these languages you can flex in the upcoming coding Showdown: Python, Java, C, C++ ." },
        { text: "We'll start with easy-peasy questions and then ramp up the difficulty." },
        { text: "We’ll provide coding environments and paper for notes." },
    ];

    const rulesSection3 = [
        { text: "The design must be created from scratch on the spot." },
        { text: "When checking the template, the component must be navigated to the concerned page." },
        { text: "Designers can use any browser for reference images." },
        { text: "Any copy-pasting found during the design process or validation will result in disqualification." },
        { text: "Designers must bring their own laptop and other design hardware tools." },
    ];

    const rulesSection4 = [
        { text: "The quiz will consist of multiple-choice questions." },
        { text: "Each question will have four options, with only one correct answer." },
        { text: "Contestants will have 1 minute to answer each question." },
        { text: "No electronic devices or notes will be allowed during the quiz." },
        { text: "The contestant with the most correct answers at the end of the quiz will be declared the winner." },
        { text: "There is no tiebreaker question." },
    ];

    const bioscopeRules = [
        { text: "Contestants should use a buzzer website or app for answering." },
        { text: "The host will ask a question, and contestants must press the buzzer to answer." },
        { text: "The first contestant to press the buzzer gets to answer the question." },
        { text: "If the contestant answers correctly, they earn a point." },
        { text: "If they answer incorrectly, the next contestant to press the buzzer gets a chance to answer." },
        { text: "The contestant with the most points at the end of the round wins." },
        { text: "If two or more members have equal points, the winner will be chosen based on the timer." },
    ];

    return (
        <div>
            {/* Section Contents */}
            <section className="space-y-8">
                <SectionContent 
                    id="idea-blitz"
                    title="PAPER PRESENTATION" 
                    description={
                        <>
                            <p><strong>TEAM MEMBERS:</strong> Maximum 2 members per team.</p>
                        </>
                    }
                    rules={rulesSection1} 
                    extraContent={
                        <p><strong>DEADLINE:</strong> 9:00 AM (13-09-2024)</p>
                    }
                />
                <SectionContent 
                    id="coding-sensei"
                    title="PROGRAMMING" 
                    description={
                        <>
                            <p><strong>OVERVIEW:</strong> Get ready to flex your coding skills in a lit two-round competition!</p>
                        </>
                    }
                    extraContent={
                        <>
                            <p><strong>INSTRUCTIONS:</strong></p>
                            <p><strong>MODE:</strong> Solo.</p>
                            <p><strong>TIME:</strong> Programming (40 min)</p>
                        </>
                    }
                    rules={rulesSection2} 
                />
                <SectionContent 
                    id="web-design"
                    title="WEB DESIGN" 
                    description={
                        <>
                            <p><strong>TOPIC:</strong> On-the-spot topic will be given.</p>
                            <p><strong>TOOLS:</strong> Figma, Adobe XD, Sketch, InVision, etc.</p>
                            <p><strong>TEAM MEMBERS:</strong> Maximum of 2.</p>
                            <p><strong>TIME:</strong> Minimum 30 minutes - 40 minutes (5 minutes separately allocated for observation & analysis).</p>
                        </>
                    }
                    rules={rulesSection3} 
                    extraContent={
                        <p><strong>HINT:</strong> Attractive and high-quality functional design will lead the team to success.</p>
                    }
                />
                <SectionContent 
                    id="technical-quiz"
                    title="TECHNICAL QUIZ" 
                    description={
                        <>
                            <p><strong>QUESTIONS:</strong> Department oriented.</p>
                            <p><strong>MEMBERS:</strong> Maximum of 2.</p>
                            <p><strong>ROUNDS:</strong> 2.</p>
                            <p><strong>Round 1:</strong> Quiz (30 questions, 1 min each).</p>
                            <p><strong>Round 2:</strong> Technical Bioscope (15 questions, 1 min each).</p>
                        </>
                    }
                    rules={rulesSection4} 
                    extraContent={
                        <>
                            <h3 className="mb-3 text-lg font-bold md:text-xl"><strong>TECHNICAL BIOSCOPE RULES</strong></h3>
                            <ul className="space-y-4">
                                {bioscopeRules.map((item, index) => (
                                    <li key={index} className="space-y-1">
                                        <div className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-default-400 dark:text-default-600">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <h4 className="font-medium">{item.text}</h4>
                                        </div>
                                        {item.description && (
                                            <p className="ml-7 text-gray-400 dark:text-gray-600">{item.description}</p>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </>
                    }
                />
            </section>
            <div className="flex justify-center mt-8">
               
             <button
                type="button"
                className="undo-button"
                onClick={() => navigate("/tech")}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z"/></svg>
                
                </button>
            </div>
        </div>
    );
}
