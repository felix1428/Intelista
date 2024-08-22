import React from "react";
import { useNavigate } from "react-router-dom";

const SectionContent = ({ id, title, rules, description, extraContent }) => (
    <div
        id={id}
        className="container px-4 py-16 mx-auto space-y-8 lg:max-w-3xl shadow-lg border-4 border-rose-500 bg-black text-white rounded-lg bg-opacity-80 transition transform hover:-translate-y-1 hover:scale-105 duration-300 animate-fade-in-up"
    >
        <h2 className="text-2xl font-bold md:text-4xl">{title}</h2>
        {description && <p className="text-md md:text-lg">{description}</p>}
        {extraContent && <div className="space-y-4 text-md md:text-lg">{extraContent}</div>}
        <h3 className="mb-3 text-lg font-bold md:text-xl">
            <strong>RULES</strong>
        </h3>
        <ul className="space-y-4">
            {rules.map((item, index) => (
                <li key={index} className="space-y-1">
                    <div className="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-4 h-4 fill-current text-default-400 dark:text-default-600"
                        >
                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <h4 className="font-medium">{item.text}</h4>
                    </div>
                    {item.description && (
                        <p className="ml-7 text-gray-400 dark:text-gray-600">
                            {item.description}
                        </p>
                    )}
                </li>
            ))}
        </ul>
    </div>
);

export default function CardNonTech() {
    const navigate = useNavigate(); // Use useNavigate from react-router-dom

    const piratesVisionRules = [
        {
            text: "Round 1: Movie Title Search",
            description:
                "The first team to press the buzzer gets the opportunity to answer the question. If the first team answers correctly, they earn points. If the first team answers incorrectly, the question is passed to the next team that pressed the buzzer after them. The team with the highest number of points will advance to the second round.",
        },
        {
            text: "Round 2: Song Line Identification",
            description:
                "Find the missing word in the song. Each team will be given three questions. If a person sings the song with the missing words correctly, they will be awarded points. If they are wrong, no points will be awarded. The team with the highest number of points will advance to the final round.",
        },
        {
            text: "Round 3: Single Frame, Multiple Images",
            description:
                "Multiple images will be displayed within a single frame. You will have 10 seconds to answer questions related to these images. The first team to press the buzzer gets the opportunity to answer the question. The team with the highest number of points will be declared the winner.",
        },
    ];

    const bounceblitzRules = [
        {
            text: "Round 1: Pyramid Stack and Balloon Tap",
            description:
                "Build a pyramid using 10 paper cups while continuously tapping a balloon to keep it in the air. If the balloon touches the ground, then the player must start their pyramid over. Time: 1 min",
        },
        {
            text: "Round 2: Blow the Ball Over Water",
            description:
                "Players blow small balls across 4 cups of water aiming to land them into an empty 5th cup within 45 seconds. Players use their breath to blow the balls, without touching the ball. Time: 45 sec",
        },
        {
            text: "Round 3: Flip the Ball",
            description:
                "Players must flip small balls into 6 empty cups using only their hands within 30 seconds to complete the round. The player with the most successful flips into the cup after the rounds wins. The player gets only one attempt per round.",
        },
    ];

    const chessSparrowRules = [
        { text: "The tournament will follow a knockout format (single elimination)." },
        { text: "Players must use the touch-move rule: If a piece is touched, it must be moved (if legally possible)." },
        { text: "Players must use the same hand to both make their move and press the timer." },
        { text: "No external assistance or advice is allowed during the game." },
        { text: "Only one illegal move is allowed per player; a second illegal move will be declared as a loss." },
        { text: "If a player runs out of time, they lose the game unless the opponent does not have sufficient material to checkmate, in which case it’s a draw." },
        { text: "The arbitrator's decision will be final." }
    ];

    const treasureHuntRules = [
        { text: "It is a QR code-based treasure hunt. Scanning the QR code will provide a hint for the next stage." },
        { text: "The initial QR code is only provided in the starting room and contains a hint for further moves." },
        { text: "Each team contains 3 to 5 members." },
        { text: "Registered teammates are the only ones permitted to play." },
        { text: "Only 1 mobile device is permitted per team." },
        { text: "There will be only one winning team." }
    ];

    return (
        <div>
            {/* Navigation Menu */}
            <nav className="sticky top-0 bg-gray-800 text-white shadow-lg">
                <ul className="flex justify-center space-x-4 p-4">
                    <li>
                        <a href="#pirates-vision" className="hover:underline">
                            Pirates Vision
                        </a>
                    </li>
                    <li>
                        <a href="#bounceblitz" className="hover:underline">
                            Bounceblitz
                        </a>
                    </li>
                    <li>
                        <a href="#chess-sparrow" className="hover:underline">
                            Chess Sparrow
                        </a>
                    </li>
                    <li>
                        <a href="#treasure-hunt" className="hover:underline">
                            Hunt for the Black Pearl
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Section Contents */}
            <section className="space-y-8">
                <SectionContent
                    id="pirates-vision"
                    title="Pirates Vision (Bioscope)"
                    description="An exciting three-round quiz event involving movies, songs, and image identification."
                    rules={piratesVisionRules}
                />
                <SectionContent
                    id="bounceblitz"
                    title="Bounceblitz (TAPFLECTRA)"
                    description="A fun-filled game event featuring three rounds of skill-based challenges."
                    rules={bounceblitzRules}
                />
                <SectionContent
                    id="chess-sparrow"
                    title="Chess Sparrow (Chess)"
                    description="A knockout chess tournament that promotes strategic thinking and sportsmanship."
                    rules={chessSparrowRules}
                />
                <SectionContent
                    id="treasure-hunt"
                    title="Hunt for the Black Pearl (Treasure Hunt)"
                    description="A thrilling QR code-based treasure hunt with a single winning team."
                    rules={treasureHuntRules}
                />
            </section>
            <div className="flex justify-center mt-8">
               
               <button
                  type="button"
                  className="undo-button"
                  onClick={() => navigate("/nontech")}
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z"/></svg>
                  </button>
              </div>
        </div>
    );
}
