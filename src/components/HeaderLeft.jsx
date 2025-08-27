import {
  BiSun,
  BiMoon,
  BiEnvelope,
  BiCurrentLocation,
  BiPhone,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoInstagram,
} from "react-icons/bi";
import profilePhoto from "../assets/profilePhoto.jpg";

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="min-h-screen flex-1 relative px-3 pt-6 sm:border-r border-gray-700 ">
      <div className="flex flex-col gap-5">
        {/* image div */}
        <div className="flex flex-col items-center justify-center gap-5">
          <img
            src={profilePhoto}
            alt="profile_picture"
            className="w-34 border-[1.5px] border-gray-700 p-1 rounded-full"
          />

          <div className="text-center tracking-wide space-y-1 ">
            <h1 className="md:text-4xl text-[26px] font-semibold">
              Subash M R
            </h1>
            <h3 className="md:text-[18px] text-[15px] font-medium">
              Web Developer
            </h3>
          </div>

          <button className="absolute right-10 top-10" onClick={toggleDarkMode}>
            {darkMode ? (
              <BiSun className="text-4xl bg-white rounded-full p-2 text-amber-400" />
            ) : (
              <BiMoon className="text-4xl bg-black rounded-full text-white p-2" />
            )}
          </button>
        </div>
        {/* information div */}
        <div className="flex flex-col items-start gap-6 borbder-b px-5 pb-5 tracking-wider border-b border-gray-700">
          <ul>
            <li className="flex pb-1.5 items-center text-[15px]  text-justify leading-relaxed gap-2 dark:text-white ">
              <BiCurrentLocation className="text-[22px]" />
              <span className="">Thekkalur , TN - 641654</span>
            </li>
            <li className="flex pb-2 items-center text-[15px]  text-justify leading-relaxed gap-2 dark:text-white">
              <BiEnvelope className="text-[22px]" />
              <span className="">mrsubash1615@gmail.com</span>
            </li>
            <li className="flex items-center gap-2 text-[15px]  text-justify leading-relaxed dark:text-white">
              <BiPhone className="text-[22px]" />
              <span className="">7708540879</span>
            </li>
          </ul>
        </div>
        {/* social div */}
        <div className="flex flex-col items-start justify-start gap-5 border-b px-5 pb-5 border-gray-700">
          <h1 className="text-lg font-semibold md:text-2xl">SOCIAL</h1>
          <ul>
            <li className="flex pb-1.5 items-center text-[15px] font-medium text-justify leading-relaxed gap-2 dark:text-white">
              <BiLogoGithub className="text-[24px]" />
              <a
                href="https://github.com/M-R-Subash"
                target="_blank"
                className="underline"
              >
                GitHub
              </a>
            </li>
            <li className="flex pb-1.5 items-center gap-2 text-[15px] font-medium text-justify leading-relaxed dark:text-white">
              <BiLogoLinkedin className="text-[24px]" />
              <a
                href="https://www.linkedin.com/in/subash-m-r-161529-z/"
                target="_blank"
                className="underline"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex  items-center gap-2 text-[15px] font-medium text-justify leading-relaxed dark:text-white">
              <BiLogoInstagram className="text-[24px]" />
              <a
                href="https://www.instagram.com/hatred_world/"
                target="_blank"
                className="underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        {/* education div */}
        <div className="flex flex-col items-start justify-start px-5 pb-5 tracking-wider border-b border-gray-700">
          <h1 className="text-lg max-sm:text-center font-semibold pb-6 md:text-2xl">
            EDUCATION
          </h1>
          <ul className="tracking-wide text-justify">
            <li
              className={`relative flex flex-col gap-1 border-l border-black pb-6 pl-6 before:absolute before:left-[-6px] before:top-1/2 before:-translate-y-1/2  before:w-3 before:h-3 before:rounded-full before:bg-black before:transform ${
                darkMode
                  ? "before:bg-gray-800 border-gray-800 "
                  : "before:bg-black"
              }`}
            >
              <span className="font-semibold text-[16px]">
                Msc - Computer Science - 72%
              </span>
              <span className="font-medium text-[15px]">
                Karpagam Academy of Higher Education
              </span>
              <span className="text-[12px] text-gray-500 dark:text-gray-300">
                2023 - 2025
              </span>
            </li>

            <li
              className={`relative flex flex-col gap-1 pb-6 border-l border-black pl-6 before:absolute before:left-[-6px] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full before:bg-black  before:transform ${
                darkMode
                  ? "before:bg-gray-800 border-gray-800"
                  : "before:bg-black"
              } `}
            >
              <span className="font-semibold text-[16px]">
                Bsc - Computer Science - 71%
              </span>
              <span className="font-medium text-[15px]">
                PTA Government Arts and Science College
              </span>
              <span className="text-[12px] text-gray-500 dark:text-gray-300">
                2020 - 2023
              </span>
            </li>

            <li
              className={`relative flex flex-col gap-1 pb-6 border-l border-black pl-6 before:absolute before:left-[-6px] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full before:bg-black before:transform ${
                darkMode
                  ? "before:bg-gray-800 border-gray-800 "
                  : "before:bg-black"
              } `}
            >
              <span className="font-semibold text-[16px]">
                12th - Maths Computer{" "} - 65%
              </span>
              <span className="font-medium text-[15px]">
                Veveaham Boys Higher Secondary School
              </span>
              <span className="text-[12px] text-gray-500 dark:text-gray-300">
                2019 - 2020
              </span>
            </li>

            <li
              className={`relative flex flex-col gap-1 border-l border-black pl-6 before:absolute before:left-[-6px] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full before:bg-black before:transform ${
                darkMode
                  ? "before:bg-gray-800 border-gray-800 "
                  : "before:bg-black"
              }`}
            >
              <span className="font-semibold text-[16px]">10th - SSLC - 73%</span>
              <span className="font-medium text-[15px]">
                NCP Municipal Boys Higher Secondary School
              </span>
              <span className="text-[12px] text-gray-500 dark:text-gray-300">
                2017 - 2018
              </span>
            </li>
          </ul>
        </div>
        {/* skills div */}
        <div className="flex flex-col items-start justify-start gap-5 borber-b pb-5 px-5 border-b border-gray-700">
          <h1 className="font-semibold text-lg md:text-2xl">SKILLS</h1>
          <div className="flex flex-warp gap-3 font-medium">
            <span
              className={`rounded-xl p-3 text-[15px] tracking-wide text-center ${
                darkMode ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              HTML
            </span>
            <span
              className={`rounded-xl p-3 text-[15px] tracking-wide text-center  ${
                darkMode ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              CSS
            </span>
            <span
              className={`rounded-xl p-3 text-[15px] tracking-wide text-center ${
                darkMode ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              Tailwind
            </span>
          </div>
          <div className="flex flex-warp gap-3 font-medium">
            <span
              className={`rounded-xl p-3 text-[15px] tracking-wide text-center  ${
                darkMode ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              Javascript
            </span>
            <span
              className={`rounded-xl p-3 text-[15px] tracking-wide text-center  ${
                darkMode ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              React
            </span>
            <span
              className={`rounded-xl p-3 text-[15px] tracking-wide text-center  ${
                darkMode ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              GitHub
            </span>
          </div>
        </div>
        {/* Hobbies */}
        <div className="flex flex-col items-start justify-start gap-3 border-b pl-5 pb-5 border-gray-700 max-sm:hidden">
          <h1 className="text-lg font-semibold md:text-2xl">HOBBIES</h1>
          <div className="flex flex-warp gap-7 ">
            <ul className="list-disc ml-3 text-justify leading-relaxed tracking-wide text-[15px] dark:text-white">
              <li>Reading</li>
              <li>Gaming</li>
              <li>Watching Anime</li>
            </ul>
            <ul className="list-disc text-justify leading-relaxed tracking-wide text-[15px] dark:text-white">
              <li>Music</li>
              <li>Exploring Tech</li>
            </ul>
          </div>
        </div>
        {/* Languages */}
        <div className="flex flex-col items-start justify-start gap-3 border-b pl-5 pb-5 border-gray-700 max-sm:hidden">
          <h1 className="text-lg font-semibold md:text-2xl">LANGUAGES</h1>
            <ul className="list-disc ml-3 text-justify leading-relaxed tracking-wide text-[15px] dark:text-white">
              <li>Tamil</li>
              <li>English</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
