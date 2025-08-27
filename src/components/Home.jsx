const Home = ({ darkMode }) => {
  return (
    <div className={`min-h-screen flex-[3] `}>
      <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-5">
        {/* About Me */}
        <div className="space-y-5">
          <h1 className="text-2xl max-sm:text-center md:text-4xl font-bold">
            ABOUT ME
          </h1>
          <p
            className={` text-justify leading-relaxed tracking-wide text-sm duration-500 ${
              darkMode ? "bg-black text-white" : "bg-white text-black"
            } `}
          >
            Hi, I'm Subash M R, a passionate Web Developer(Fresher) with a{" "}
            <span
              className={`font-medium duration-500 ${
                darkMode ? "bg-black text-white" : "bg-white text-gray-800"
              }`}
            >
              Master's Degree in Computer Science from Karpagam Academy of
              Higher Education, Coimbatore.
            </span>
            I specialized in creating responsive and user-friendly websites
            using{" "}
            <span
              className={`font-medium duration-500 ${
                darkMode ? "bg-black text-white" : "bg-white text-gray-800"
              }`}
            >
              HTML , CSS , JavaScript and Tailwind CSS with basics of React.js.
            </span>
            <br />
            I have built projects like a personal portfolio website , Nike
            Landing Page , E-Commerce Website , etc.. . Which helped me
            strengthen my skills in frontend development and design. <br />
            I am eager to contribute my skills to a dynamic team and continue
            learning in the field of web development. <br />
            <span
              className={`font-medium duration-500 ${
                darkMode ? "bg-black text-white" : "bg-white text-gray-800"
              }`}
            >
              Let's connect and create something amazing together!
            </span>
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-2 border-b border-gray-700 pb-2">
          <h1 className="text-2xl font-bold md:text-4xl">PROJECTS</h1>
          <div className="flex  flex-col lg:gap-10 lg:flex-row">
            <ul className="lg:w-1/2">
              <li
                className={`relative flex flex-col gap-2 py-4 pb-6 border-l pl-6 before:absolute before:left-[-6px] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full before:bg-black before:transform ${
                  darkMode
                    ? "before:bg-gray-800 border-gray-800 "
                    : "before:bg-black"
                }`}
              >
                <span className="text-xl font-semibold">
                  Home Services Booking Platform
                </span>
                <span className="font-light text-sm">
                  HTML , CSS , JavaScript and MongoDB
                </span>
                <span className="text-[12px] text-gray-500">
                  Bsc - Final Project
                </span>
                <li className="list-disc text-[15px] text-justify leading-relaxed tracking-wide ml-5">
                  Created a web-based platform connecting with customer with
                  home service providers
                </li>
                <li className="list-disc text-[15px]  text-justify leading-relaxed tracking-wide ml-5">
                  Implemented user registration , service booking and review
                  system
                </li>
              </li>
              <li
                className={`relative flex flex-col gap-2 py-4 pb-6 border-l pl-6 before:absolute before:left-[-6px] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full before:bg-black before:transform ${
                  darkMode
                    ? "before:bg-gray-800 border-gray-800 "
                    : "before:bg-black"
                }`}
              >
                <span className="text-xl font-semibold">Nike Landing Page</span>
                <span className="font-light text-sm">Tailwind CSS , React</span>
                <span className="text-[12px] text-gray-500">
                  Personal Project
                </span>
                <li className="list-disc text-[15px] text-justify leading-relaxed tracking-wide ml-5">
                  Designed a visually appealing layout that highlights branding
                  , product promotions and call-to-action elements
                </li>
                <li className="list-disc text-[15px] text-justify leading-relaxed tracking-wide ml-5">
                  Applied Tailwind's utility-first classes to create a scalable
                  and responsive design across all screen sizes
                </li>
              </li>
            </ul>
            <ul className="lg:w-1/2">
              <li
                className={`relative flex  flex-col gap-2 py-4 border-l pl-6 before:absolute before:left-[-6px] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full before:bg-black  before:transform ${
                  darkMode
                    ? "before:bg-gray-800 border-gray-800 "
                    : "before:bg-black"
                }`}
              >
                <span className="text-xl font-semibold">
                  E - Invoice System
                </span>
                <span className="font-light text-sm">React , MongoDB</span>
                <span className="text-[12px] text-gray-500">
                  Msc - Final Project
                </span>
                <li className="list-disc text-[15px] text-justify leading-relaxed tracking-wide ml-5">
                  Developed a comprehensive electronic invoice generator system
                  for retail stores
                </li>
                <li className="list-disc text-[15px] text-justify leading-relaxed tracking-wide ml-5">
                  Implemented automated invoice generation , customer management
                  and inventory tracking
                </li>
              </li>
              <li
                className={`relative flex flex-col gap-2 py-4 border-l pl-6 before:absolute before:left-[-6px] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full before:bg-black before:transform ${
                  darkMode
                    ? "before:bg-gray-800 border-gray-800 "
                    : "before:bg-black"
                }`}
              >
                <span className="text-xl font-semibold">
                  E - Commerece Website
                </span>
                <span className="font-light text-sm">
                  HTML , CSS , JavaScript
                </span>
                <span className="text-[12px] text-gray-500">
                  Personal Project
                </span>
                <li className="list-disc text-[15px] text-justify  leading-relaxed tracking-wide ml-5">
                  Implemented product listing pages , navigation menus and a
                  shopping cart interface to simulate a real e-commerce
                  ecperience
                </li>
                <li className="list-disc text-[15px] text-justify  leading-relaxed tracking-wide ml-5">
                  Focus on responsive layouts to ensure smooth performance on
                  mobile , tablet and desktop devices
                </li>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-2 pb-2">
          <h1 className="text-2xl font-bold md:text-4xl">CERTIFICATES</h1>
          <div className="flex  flex-col lg:gap-10 lg:flex-row">
            <ul >
              <li
                className={`relative flex flex-col gap-2 py-4 pb-6 border-l pl-6 before:absolute before:left-[-6px] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full before:bg-black before:transform ${
                  darkMode
                    ? "before:bg-gray-800 border-gray-800 "
                    : "before:bg-black"
                }`}
              >
                <span className="text-xl font-semibold">
                  SOLO LEARN
                </span>
                <span className="font-light text-sm">
                  Introduction to HTML
                </span>
                <span className="text-[12px] text-gray-500">
                  Jun 7 - Jun 29 , 2024
                </span>
                <li className="list-disc text-[15px] text-justify leading-relaxed tracking-wide ml-5">
                  Covered HTML structure , elements and attributes to create web pages
                </li>
                <li className="list-disc text-[15px]  text-justify leading-relaxed tracking-wide ml-5">
                  Practiced building simple web pages and forms using HTML tags
                </li>
              </li>
              <li
                className={`relative flex flex-col gap-2 py-4 pb-6 border-l pl-6 before:absolute before:left-[-6px] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full before:bg-black before:transform ${
                  darkMode
                    ? "before:bg-gray-800 border-gray-800 "
                    : "before:bg-black"
                }`}
              >
                <span className="text-xl font-semibold">
                  SOLO LEARN
                </span>
                <span className="font-light text-sm">
                  Introduction to CSS
                </span>
                <span className="text-[12px] text-gray-500">
                  July 3 - July 27 , 2024
                </span>
                <li className="list-disc text-[15px] text-justify leading-relaxed tracking-wide ml-5">
                  Learned CSS syntax , selectors and properties to style web pages
                </li>
                <li className="list-disc text-[15px]  text-justify leading-relaxed tracking-wide ml-5">
                  Practiced applying styles to HTML elements using classes and IDs
                </li>
              </li>
              <li
                className={`relative flex flex-col gap-2 py-4 pb-6 border-l pl-6 before:absolute before:left-[-6px] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full before:bg-black before:transform ${
                  darkMode
                    ? "before:bg-gray-800 border-gray-800 "
                    : "before:bg-black"
                }`}
              >
                <span className="text-xl font-semibold">
                  SOLO LEARN
                </span>
                <span className="font-light text-sm">
                  Web Development
                </span>
                <span className="text-[12px] text-gray-500">
                  Jul 31 - Sep 7 , 2024
                </span>
                <li className="list-disc text-[15px] text-justify leading-relaxed tracking-wide ml-5">
                  Completed a structured course covering front-end development
                  basics
                </li>
                <li className="list-disc text-[15px]  text-justify leading-relaxed tracking-wide ml-5">
                  Built small projects to connect HTML , CSS and JavaScript concepts
                </li>
              </li>
              <li
                className={`relative flex flex-col gap-2 py-4 pb-6 border-l pl-6 before:absolute before:left-[-6px] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full before:bg-black before:transform ${
                  darkMode
                    ? "before:bg-gray-800 border-gray-800 "
                    : "before:bg-black"
                }`}
              >
                <span className="text-xl font-semibold">
                  LET'S UPGRADE
                </span>
                <span className="font-light text-sm">
                  HTML , CSS - Bootcamp
                </span>
                <span className="text-[12px] text-gray-500">
                  Sep 9 - Sep 14 , 2024
                </span>
                <li className="list-disc text-[15px] text-justify leading-relaxed tracking-wide ml-5">
                  Learned core concepts of full stack development , including front-end and back-end basics technologies
                </li>
                <li className="list-disc text-[15px]  text-justify leading-relaxed tracking-wide ml-5">
                  Understood project workflow and industries practices from professional mentors
                </li>
              </li>
              <li
                className={`relative flex flex-col gap-2 py-4 pb-6 border-l pl-6 before:absolute before:left-[-6px] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full before:bg-black before:transform ${
                  darkMode
                    ? "before:bg-gray-800 border-gray-800 "
                    : "before:bg-black"
                }`}
              >
                <span className="text-xl font-semibold">
                  CODE PURPLE
                </span>
                <span className="font-light text-sm">
                  Full Stack Development - Webinar
                </span>
                <span className="text-[12px] text-gray-500">
                  Nov 18 - Dec 28 , 2024
                </span>
                <li className="list-disc text-[15px] text-justify leading-relaxed tracking-wide ml-5">
                  Completed a structured course covering front-end development
                  basics
                </li>
                <li className="list-disc text-[15px]  text-justify leading-relaxed tracking-wide ml-5">
                  Built small projects to connect HTML , CSS and JavaScript concepts
                </li>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
