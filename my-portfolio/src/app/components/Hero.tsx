import Image from "next/image";
import hero from "../assets/girlglass.jpeg";

export default function Home() {
  return (
    <div className="overflow-hidden" id="Home">
      <div className="bg-[#170450] lg:flex items-center justify-between md:px-28 px-12 py-20">
        <div className="max-w-2xl">
          <h1 className="sm:text-7xl text-2xl font-bold text-white mb-4">
            Hi, I am Yusra
          </h1>
          <h2 className="md:text-6xl text-xl font-semibold text-[#83DAFF] mb-6">
            I am a Web Developer
          </h2>
          <p className="text-lg text-white sm:w-[550] ">
            Hello, my name is Yusra Ateeq. I am 18 years old. I am a professional
            Web Developer with more than 1 year of experience. I love to try
            something new for my projects.
          </p>
          <a href="#Contact"><button className=" bg-white rounded-full py-2 px-10 font-bold mt-8">Contact me</button></a>
        </div>

        <div>
          <Image
            src={hero}
            alt="Yusra"
            className="w-[500] sm:w-72  sm:mt-8 mt-10"
          />
        </div>
      </div>
    </div>
  );
}