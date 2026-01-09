import React from "react";
import { motion } from "framer-motion";
import { animationProperties } from "../../Constants";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaGlobe,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
function Contact(props) {
  const socials = [
    {
      platform: "Email",
      handle: "me@yabestheo.dev",
      url: "mailto:me@yabestheo.dev",
      icon: <FaEnvelope className="text-amber-500" />,
    },
    {
      platform: "Phone",
      handle: "+62 851-5528-7233",
      url: "tel:+6285155287233",
      icon: <FaPhone className="text-amber-500" />,
    },
    {
      platform: "Website",
      handle: "yabestheo.dev",
      url: "https://yabestheo.dev",
      icon: <FaGlobe className="text-amber-500" />,
    },
    {
      platform: "GitHub",
      handle: "/yabestheodorus",
      url: "https://github.com/yabestheodorus",
      icon: <FaGithub className="text-gray-800" />,
    },
    {
      platform: "LinkedIn",
      handle: "/yabestheodorus",
      url: "https://linkedin.com/in/yabestheodorus",
      icon: <FaLinkedin className="text-blue-600" />,
    },
    {
      platform: "Instagram",
      handle: "@yabestheo.dev",
      url: "https://instagram.com/yabestheodorus",
      icon: <FaInstagram className="text-pink-500" />,
    },
  ];

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={animationProperties.container}
      className="flex flex-col items-start lg:px-0 px-12 pb-36"
    >
      <section className=" flex lg:flex-row flex-col items-center w-full mx-auto  ">
        <div className="w-full lg:w-7/12 flex flex-col justify-center text-center lg:text-start my-12 lg:my-0">
          <motion.h1
            variants={animationProperties.item}
            className="font-bold text-6xl text-slate-800 mb-2 mt-12"
          >
            Contact
          </motion.h1>
          <motion.p
            variants={animationProperties.item}
            className="mt-4 text-2xl text-slate-600 mx-auto max-w-2xl "
          >
            Reach me for collaborations, project inquiries, or just to start a
            conversation. I’m always open to discussing ideas and opportunities.
          </motion.p>
          <motion.div
            variants={animationProperties.item}
            className="w-24 h-0.5 bg-amber-500 mt-6 mx-auto lg:mx-0"
          />
          {/* ✨ Social Media Table */}
          <motion.div
            variants={animationProperties.container}
            className="mt-12 overflow-hidden rounded-box border border-base-content/5 bg-base-100"
          >
            <table className="table w-full border-collapse">
              <thead>
                <motion.tr
                  key={"header"}
                  variants={animationProperties.item}
                  className="border-b border-slate-200 last:border-0 hover:bg-slate-50/50 "
                >
                  <th className="py-3 pl-4"></th>
                  <th className="py-3">Contacts</th>
                  <th className="py-3">Details</th>
                </motion.tr>
              </thead>
              <tbody>
                {socials.map((item, index) => (
                  <motion.tr
                    key={index}
                    variants={animationProperties.item}
                    className="border-b border-slate-200 last:border-0 hover:bg-slate-50/50 "
                  >
                    <td className="py-3 pr-4 w-10">{item.icon}</td>
                    <td className="py-3 font-medium text-slate-700">
                      {item.platform}
                    </td>
                    <td className="py-3 text-slate-600">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primaryPurple transition flex items-center group"
                      >
                        {item.handle}
                        <span className="inline-block ml-1 opacity-0 group-hover:opacity-100 ">
                          →
                        </span>
                      </a>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>

        <motion.div
          className="w-full lg:w-5/12 order-first lg:order-last flex justify-center"
          initial={{ opacity: 0, scale: 0.95, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 600, damping: 20 }}
        >
          <img
            className={`relative w-1/2  mx-auto lg:w-full h-auto duration-1000 block`}
            src="/images/header_contact.png"
          />
        </motion.div>
      </section>
    </motion.section>
  );
}

export default Contact;
