import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  const [contact] = useState([
    { icon: "icon-phone.svg", text: "+201099088412" },
    { icon: "icon-email.svg", text: "mazenelgyoshi31@gmail.com" },
  ]);
  const [links] = useState([
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ]);
  const [soicials] = useState(["facebook", "twitter", "instagram"]);
  return (
    <section className="bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px] text-white">
      <div className="container">
        <a href="/">
          <img
            src="/assets/images/logo.svg"
            alt="logo-img"
            className="w-[175px] h-[66px] object-contain"
          />
        </a>
        <div className="flex justify-between flex-wrap flex-col md:flex-row gap-[30px] mt-[30px]">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full">
            <img
              src="/assets/images/icon-location.svg"
              alt="location-img"
              className="w-[18px] h-[18px] object-contain "
            />
            <p className="font-normal text-sm tracking-[0.8px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              nisi dignissimos unde ipsam modi facilis nam magni, assumenda ad
              fuga.
            </p>
          </div>
          <div>
            {contact.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"
              >
                <img
                  src={`/assets/images/${item.icon}`}
                  alt="icon"
                  className="w-[18px] h-[18] object-contain"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-[#67dbda] transition-colors duration-200 text-base"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-[15px] w-full justify-center md:w-auto">
            {soicials.map((item) => (
              <li key={item}>
                <a className="group">
                  <div className="w-[40px] h-[40px] element-center border border-white rounded-full">
                    {item === "facebook" ? (
                      <FaFacebookF className="group-hover:text-blue-700 transition-all duration-200" />
                    ) : item === "twitter" ? (
                      <FaTwitter className="group-hover:text-blue-400 transition-all duration-200" />
                    ) : (
                      <FaInstagram className="group-hover:text-pink-600 transition-all duration-200" />
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
