import React from "react";
import { motion } from "framer-motion";
import { containerVariant, itemVariant } from "../constants";
import profile from "../assets/profile.jpg";

const About = () => {
  const title = ["Elevate ", "Your ", "Ride, ", "Embrace ", "the ", "Future."];
  return (
    <div
      className="bg-[#ebe6e6] h-full w-full flex justify-center overflow-auto p-3"
      id="about"
    >
      <div className="w-full h-full xl:max-w-[1280px] md:p-15 mmd:p-10">
        <div className="relative bg-light-gray lg:p-0 p-5 w-full rounded-lg shadow-lg h-full">
          <div className="flex lg:flex-row flex-col-reverse relative">
            <motion.div
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0, once: true }}
              className="flex w-full absolute left-5 lg:left-10 top-5 md:top-[17px] z-40 "
            >
              <motion.h1
                variants={itemVariant}
                className="text-3xl md:text-6xl font-bold"
              >
                About
                <motion.span
                  variants={itemVariant}
                  className="text3xl md:text-6xl text-[#f60000] italic font-bold"
                >
                  {" "}
                  US
                </motion.span>
              </motion.h1>
            </motion.div>
            <motion.p
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0, once: true }}
              className="absolute top-[55px] sm:top-20 lg:top-[95px] left-5 lg:left-10 
              text-3xl md:text-6xl lg:text-6xl 
              font-bold z-40 lg:text-black  text-white w-[95%]"
            >
              {title.map((word, index) => (
                <>
                  <motion.span variants={itemVariant} key={index}>
                    {word}
                  </motion.span>
                </>
              ))}
            </motion.p>
            <div className="flex flex-col justify-center items-center relative lg:w-[50%]">
              <p className="lg:absolute text-sm md:text-base lg:text-[16px] w-full md:w-[90%] lg:mt-0 mt-10 lg:top-[16rem] lg:left-10">
                Shien Ebike leads the way in transforming urban mobility with
                innovative electric bikes (eBikes). As a dynamic startup, we're
                dedicated to offering practical and sustainable alternatives to
                traditional transportation.
              </p>
              <p className="lg:absolute text-sm md:text-base lg:text-[16px] w-full md:w-[90%] lg:mt-0 mt-5 lg:top-[24rem] lg:left-10">
                Our team is committed to creating sleek, eco-friendly eBikes
                that seamlessly integrate performance, convenience, and
                environmental responsibility. Join us on the exciting journey as
                we drive Shien Ebike to the forefront of the eBike revolution,
                shaping a greener and more sustainable future, one pedal at a
                time.
              </p>
              <div className="w-full flex justify-center items-center lg:justify-start lg:mt-0 m-5">
                <button
                  className="lg:ml-10 lg:absolute lg:top-[35rem]
                uppercase font-Teko font-normal text-white  
                text-center block text-2xl p-3 w-[200px] md:w-[250px] h-auto bg-[#f60000] rounded-xl shadow-lg"
                >
                  Contact US
                </button>
              </div>
            </div>
            <div className="relative flex justify-center items-center z-30 lg:w-[50%]">
              <img
                src={profile}
                alt="profile"
                className="h-[50%] lg:h-[80%] rounded-xl shadow-xl"
              />
            </div>
          </div>

          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0, once: true }}
            className="lg:absolute z-40 text-center font-Teko font-bold bottom-0 right-10 lg:border-t-0 border-t-2 border-black text-white"
          >
            {"SHIEN".split("").map((char, index) => (
              <motion.span
                variants={itemVariant}
                key={index}
                className="text-[100px] lg:text-[150px]"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
