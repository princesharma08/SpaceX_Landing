import React from "react";

const Banner = () => {
    return (
        <>
        <nav className="flex items-center justify-between bg-transparent text-white p-0 rounded-lg shadow-md border border-[#0a101d]">
            <div className="flex items-center space-x-4 md:px-24">
                <img src={"./assets/spacex-logo.jpg"} alt=" " className="h-8 md:h-16" />
            </div>
        </nav>
        
        <div className="pt-16 md:py-16 bg-transparent">
            <div className="container px-32 flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left bg-transparent">
                <h1 className=" md:text-2xl font-bold mb-4 ">
                    Welcome to <span className="text-sky-500 hover:text-red-500">SpaceX Launcher</span>
                </h1>
                <p className=" md:text-5xl font-semibold mb-6 hover:text-red-700">
                    Future is <span className="text-red-400 hover:text-slate-700">Here!</span>
                </p>
                <p className="text-lg md:text-xl mb-8 text-sky-200">
                    SpaceX is the first private company to design, manufacture, and launch advanced rockets and spacecraft; to send a 
                    spacecraft to the International Space Station; and to send astronauts to the International Space Station.
                </p>
                <button className="relative bg-transparent hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg 
                    border border-white transition duration-300 ease-in-out focus:outline-none focus:shadow-outline transform hover:scale-105"
                    href="https://www.spacex.com" target="_blank">
                    Visit Official Site
                </button>
            </div>
        </div>
        </>
    );
};

export default Banner;
