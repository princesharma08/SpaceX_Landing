/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
        <footer className=" text-black relative bg-transparent">
            <div className="container mx-auto py-16 px-20 flex flex-col md:flex-row md:justify-between">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-semibold  text-black hover:text-sky-400 mb-2">Contact Us</h2>
                    <p className="mb-2">Email: prince@spacex.com</p>
                    <p className="mb-2">Phone: +91 9876543210</p>
                    <p className="mb-0">Address: H.no.219 Samalkha, Panipat</p>
                    <p className="px-16"> Haryana, India</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <h1 className="text-xl font-semibold mb-2  text-black hover:text-sky-400">Subscribe</h1>
                    <p className="mb-2">Subscribe to our News for updates.</p>
                    <div className="flex mt-2 ">
                        <input
                        type="email"
                        placeholder="Your Email"
                        className="bg-gray-600 rounded-l px-2 py-1 outline-none text-white"
                        />
                        <button className="bg-blue-500 text-white px-4 py-1 rounded-r shadow hover:shadow-2xl hover:bg-blue-500 border border-sky-700">
                        Subscribe
                        </button>
                    </div>
                </div>
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-semibold mb-2 text-black hover:text-sky-400 ">Follow Us</h2>
                    <div className="flex space-x-4 mb-2">
                        <a href="#" className="hover:text-blue-800 ">
                        <FaFacebook className='icon h-16 w-16 mb-4'/>
                        </a>
                        <a href="#" className="hover:text-blue-800">
                        <FaTwitter className='icon h-16 w-16 mb-4'/>
                        </a>
                        <a href="#" className="hover:text-pink-400">
                        <FaInstagram className='icon h-16 w-16 mb-4'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto text-center">
                <p className="text-sm md:text-base">
                © {new Date().getFullYear()} Your Company. All rights reserved by princesharma08
                </p>
            </div>
        </footer>
        </>
    );
};

export default Footer;
