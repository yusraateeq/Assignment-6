import htmlIcon from "../assets/image.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/js.png";
import wordpressIcon from "../assets/wordpress.jpeg";
import nextjsIcon from "../assets/nextjs.png";
import tailwindIcon from "../assets/tailwind.png";
import Image from "next/image";

export default function MySkills() {
  return (
    <section className="bg-[#170450] text-white py-16 px-6" id="Skills">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-6xl font-bold text-white mb-14">My Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Image
              src={htmlIcon}
              alt="HTML Icon"
              className="w-20 h-20 mb-4"
            />
            <p className="text-center w-72">
              Expertise in creating structured, semantic, and accessible HTML.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={cssIcon}
              alt="CSS Icon"
              className="w-20 h-20 mb-4"
            />
            <p className="text-center w-72">
              Skilled in creating responsive designs using Flexbox and Grid.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={jsIcon}
              alt="JavaScript Icon"
              className="w-20 h-20 mb-4 "
            />
            <p className="text-center w-72">
              Experienced in DOM manipulation and creating dynamic, interactive
              web pages.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={wordpressIcon}
              alt="WordPress Icon"
              className="w-24 h-24 "
            />
            <p className="text-center w-72">
              Skilled in creating and customizing WordPress themes and plugins.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={nextjsIcon}
              alt="Next.js Icon"
              className="w-20 h-20 mb-4"
            />
            <p className="text-center w-72">
              Proficient in building SEO-friendly, server-rendered React
              applications.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={tailwindIcon}
              alt="Tailwind Icon"
              className="w-20 h-20 mb-4"
            />
            <p className="text-center w-72">
              Expertise in designing modern, responsive UI using Tailwinds
              utility-first classes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
