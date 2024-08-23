import React from 'react';
import Timer from '../components/Timer'; 
import videoSrc from '../images/home page.mp4'; 
import audioSrc from '../images/Jack Sparrow - Bgm.mp3'; 
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import AudioPlayer from '../components/AudioPlayer';
import intelista from '../images/Intelista.png';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col">
<div className="flex items-center justify-center p-2 dark:bg-violet-600 dark:text-gray-50">
  <img
    src={intelista}
    alt="Intelista"
    style={{
      width:'1000px',
    }}
    className="h-[150px] md:h-[200px] lg:h-[200px]"
  />
</div>

      {/* Background music player */}
      <AudioPlayer src={audioSrc} autoPlay loop />

      <div className="flex-grow">
        <div className="p-5 mx-auto sm:p-10 md:p-16 flex-grow">
          <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            {/* Video player */}
            <video 
              src={videoSrc} 
              className="w-full h-auto object-cover bg-gray-500 dark:bg-gray-500" 
              autoPlay 
              loop 
              muted
            ></video>

            <div className="p-6 pb-12 m-4 mx-auto -mt-15 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900 bg-opacity-70 dark:bg-gray-50 dark:bg-opacity-50">
              <div className="space-y-2">
                <span className="inline-block text-2xl font-semibold text-white sm:text-3xl">
                  Time's Ticking - Are You Ready Buddys?
                </span>
              </div>
              <div className="timer text-gray-100 dark:text-gray-800">
                <Timer />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 mt-8">
            {/* Navigation buttons */}
            <button
              type="button"
              onClick={() => navigate('/event')}
              className="px-8 py-3 font-semibold rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200"
            >
              Explore Events
            </button>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfMQcQkRg3zTcEdklQJ3LgZ2YQMCfKadP2LxDfQGU6qJedfCw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 font-semibold rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200"
            >
              Register
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
