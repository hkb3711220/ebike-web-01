import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion, Variants } from "framer-motion";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const headerVariants: Variants = {
  offscreen: {
    x: -100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.0,
    },
  },
};

const linkVariants: Variants = {
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0 },
  },
  offscreen: {
    opacity: 0,
    y: 100,
    transition: { duration: 1.0 },
  },
};

function FormatedSocialIcon({
  children,
  href,
}: {
  children?: React.ReactNode;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      variants={linkVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8, borderRadius: "100%" }}
    >
      {children}
    </motion.a>
  );
}

const Home = () => {
  return (
    <div className="w-full flex justify-center p-3">
      <div
        className="relative w-full h-screen overflow-auto flex-col flex mmd:flex-row xl:max-w-[1280px]"
        id="home"
      >
        <div className="w-full h-[75%] mmd:h-full mmd:w-[85%] flex flex-col gap-5 p-5 text-left justify-center z-10">
          <motion.h2
            variants={headerVariants}
            className="text-4xl md:text-6xl font-bold font-Teko text-dark-gray uppercase"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
          >
            Shien Ebike
          </motion.h2>
          <motion.h1
            variants={headerVariants}
            className="text-dark-gray font-bold text-6xl xl:text-[120px] md:text-[80px] font-Playfair italic"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
          >
            Electrify Your Ride
          </motion.h1>
          <Link
            smooth
            to="#bike"
            scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
          >
            <motion.button
              variants={headerVariants}
              className="mt-5 uppercase font-Teko font-normal text-white text-center block text-2xl p-3 w-[200px] md:w-[250px] h-auto bg-[#f60000] rounded-sm"
              initial="offscreen"
              whileInView="onscreen"
              whileHover={{
                scale: 1.1,
              }}
              viewport={{ once: true, amount: 0 }}
            >
              Get Bikes
            </motion.button>
          </Link>
        </div>
        <div className="text-white w-full mmd:w-[15%] mmd:h-full flex mmd:flex-col p-5 gap-5 justify-center items-center text-3xl">
          <FormatedSocialIcon href="/">
            <BsFacebook />
          </FormatedSocialIcon>
          <FormatedSocialIcon href="/">
            <FaXTwitter />
          </FormatedSocialIcon>
          <FormatedSocialIcon href="/">
            <BsInstagram />
          </FormatedSocialIcon>
        </div>
      </div>
    </div>
  );
};

export default Home;
