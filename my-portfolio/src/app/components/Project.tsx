import Image from "next/image";
import wordpressIcon1 from "../assets/my-coffee.png";
import wordpressIcon2 from "../assets/my-wood.png";
import wordpressIcon3 from "../assets/my-beauty.png";

export default function MyProjects() {
    return (
        <section className="bg-[#0D0D2B] text-white py-20 px-6" id="Projects">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl sm:text-6xl font-bold text-white mb-14">My Projects</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-[#D9D9D9] rounded-lg shadow-lg p-6">
                        <Image
                            src={wordpressIcon1}
                            alt="Project 1"
                            className="rounded-md mb-4"
                            width={400}
                            height={200}
                        />
                        <p className="text-lg my-8 text-black font-bold">
                            Indulge in the rich flavors of our freshly brewed coffee. Sourced from the finest beans, every cup promises a moment of pure satisfaction.
                        </p>
                        <div className="flex justify-center gap-6 sm:gap-12">
                            <a
                                href="https://github.com/yusraateeq/kafe.git"
                                className="bg-[#170450] text-white px-8 sm:px-12 py-2 hover:bg-blue-950 rounded-full" target="_blank"
                            >
                                Github
                            </a>
                            <a
                                href="https://kafe-alpha.vercel.app/"
                                className="bg-[#170450] text-white px-8 sm:px-12 py-2 rounded-full hover:bg-blue-950" target="_blank"
                            >
                                Live
                            </a>
                        </div>
                    </div>

                    <div className="bg-[#D9D9D9] rounded-lg shadow-lg p-6">
                        <Image
                            src={wordpressIcon2}
                            alt="Project 2"
                            className="rounded-md mb-4"
                            width={400}
                            height={200}
                        />
                        <p className="text-lg my-8 text-black font-bold">
                            Discover premium sofas that blend comfort and style. Choose from recliners, and more, with customizable fabrics and free delivery.
                        </p>
                        <div className="flex justify-center gap-6 sm:gap-12">
                            <a
                                href="https://github.com/yusraateeq/my-Figma.git"
                                className="bg-[#170450] text-white px-8 sm:px-12 py-2 hover:bg-blue-950 rounded-full" target="_blank"
                            >
                                Github
                            </a>
                            <a
                                href="https://woodcrafted.vercel.app/"
                                className="bg-[#170450] text-white px-8 sm:px-12 py-2 rounded-full hover:bg-blue-950" target="_blank"
                            >
                                Live
                            </a>
                        </div>
                    </div>

                    <div className="bg-[#D9D9D9] rounded-lg shadow-lg p-6">
                        <Image
                            src={wordpressIcon3}
                            alt="Project 3"
                            className="rounded-md mb-4"
                            width={400}
                            height={200}
                        />
                        <p className="text-lg my-8 text-black font-bold">
                            Shop skincare, makeup, and haircare essentials designed to enhance your beauty. Cruelty-free, eco-friendly, and perfect for all skin types.
                        </p>
                        <div className="flex justify-center gap-6 sm:gap-12">
                            <a
                                href="https://github.com/yusraateeq/SnapBuy.git"
                                className="bg-[#170450] text-white px-8 sm:px-12 py-2 hover:bg-blue-950 rounded-full" target="_blank"
                            >
                                Github
                            </a>
                            <a
                                href="https://snapbuy-inky.vercel.app/"
                                className="bg-[#170450] text-white px-8 sm:px-12 py-2 rounded-full hover:bg-blue-950" target="_blank"
                            >
                                Live
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
