import Image from "next/image";
import profilePic from "../assets/girlglass.jpeg";
import icon1 from "../assets/icons8-laptop-30.png";
import icon2 from "../assets/icons8-website-50.png";
import icon3 from "../assets/icons8-user-30.png";
import icon4 from "../assets/tick.png";

export default function AboutMe() {
  return (
    <section className="bg-[#0D0D2B] text-white px-6 sm:px-28 h-auto py-28" id="About">
      <div className="max-w-7xl mx-auto gap-20 flex flex-col lg:flex-row">
        <div className="flex-shrink-0 mb-8 lg:mb-0">
          <Image
            src={profilePic}
            alt="Profile Picture"
            className="rounded-lg shadow-lg"
            width={300}
            height={300}
          />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#83DAFF] mb-4">About Me</h2>
          <p className="text-lg sm:text-xl mb-6 mt-6">
            In my +1 years career, I took part in 2 companies and helped them
            grow. Being a professional Web Developer is my dream, so I enjoy
            finishing designs and trying something new for my projects.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            <div className="flex items-center space-x-3">
              <div className="text-[#83DAFF] text-2xl">
                <Image src={icon1} alt="" width={30} />
              </div>
              <p>Web developer skilled in Next.js, React, and Tailwind CSS.</p>
            </div>

            <div className="flex items-center space-x-3">
              <div className="text-[#83DAFF] text-2xl">
                <Image src={icon2} alt="" width={30} />
              </div>
              <p>Creating websites that work smoothly on all devices.</p>
            </div>

            <div className="flex items-center space-x-3">
              <div className="text-[#83DAFF] text-2xl">
                <Image src={icon3} alt="" width={30} />
              </div>
              <p>Crafting intuitive and engaging user interfaces.</p>
            </div>

            <div className="flex items-center space-x-3">
              <div className="text-[#83DAFF] text-2xl">
                <Image src={icon4} alt="" width={30} />
              </div>
              <p>Improving website speed for a faster user experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
