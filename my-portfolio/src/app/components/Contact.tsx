import Image from "next/image";
import contact from "../assets/contact.webp";

export default function Home() {
    return (
        <div className="bg-[#170450] flex items-center justify-center px-6 py-8 sm:py-2" id="Contact">
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        src={contact}
                        alt="Yusra"
                        className="w-full sm:w-72 md:w-[600px] mt-0 sm:mt-8 rounded-lg"
                    />
                </div>

                <div className="bg-[#D9D9D9] w-full md:w-[350px] rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm p-10 flex flex-col items-center">
                    <h3 className="text-[#170450] text-3xl font-extrabold mb-6">Contact Me</h3>

                    <input
                        type="text"
                        name="name"
                        placeholder="Name........"
                        className="py-3 px-8 rounded-full mt-4 w-full sm:w-[80%] md:w-full"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email........"
                        className="py-3 px-8 rounded-full mt-4 w-full sm:w-[80%] md:w-full"
                    />
                    <textarea
                        name="message"
                        placeholder="Message........"
                        cols={25}
                        rows={4}
                        className="py-3 px-6 rounded-2xl mt-4 w-full sm:w-[80%] md:w-full"
                    ></textarea>
                    <button className="bg-[#170450] text-center w-full rounded-full text-white py-3 mt-4">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
