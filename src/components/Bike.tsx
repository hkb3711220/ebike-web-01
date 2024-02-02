import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { bikeInfo } from "../constants";
import CountUp from "react-countup";

function splitCamelCaseToString(s: string): string {
  return s.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
}

function splitNumberandUnit(s: string) {
  let words = s.split(" ");
  return (
    <p className="text-2xl lg:text-4xl font-Teko font-bold italic text-left">
      <CountUp
        start={0}
        end={parseFloat(words[0])}
        delay={0.5}
        decimals={1}
        enableScrollSpy={true}
      />{" "}
      {words[1]}
    </p>
  );
}

const bikeVariants: Variants = {
  hidden: {
    opacity: 0.4,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 2 },
  },
};

interface BikeDetails {
  batteryRange: string;
  chargeTime: string;
  assistSpeed: string;
  weight: string;
}

const Bike = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { name, price, img, details } = bikeInfo[currentIndex];
  const detailWithTitle: BikeDetails = {
    batteryRange: details.batteryRange,
    chargeTime: details.chargeTime,
    assistSpeed: details.assistSpeed,
    weight: details.weight,
  };

  return (
    <section
      className="w-full 
                bg-bike bg-center bg-cover bg-no-repeat 
                flex justify-center overflow-auto
                h-screen md:h-full"
      id="bike"
    >
      <div className="w-full h-full xl:max-w-[1280px] text-center md:p-15 mmd:p-10">
        <motion.div
          className="flex flex-col w-full justify-center items-center h-full"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1 },
          }}
          viewport={{ amount: 0, once: false }}
        >
          <motion.div className="w-full md:w-[90%] flex flex-col justify-center items-center leading-10 relative">
            <p>
              <span className="text-3xl xl:text-[3em] xmd:text-[3em] md:text-[2em] sm:text-[2em] font-Teko text-center h-full">
                $
              </span>
              <span className="text-6xl xl:text-[6em] xmd:text-[5em] md:text-[4em] sm:text-[3em] font-Teko font-semibold">
                {price}
              </span>
            </p>
            <p
              className=" absolute top-[15%] left-[50%] z-40
              leading-sung
              text-6xl xl:text-[8em] xmd:text-[7em] md:text-[6em] sm:text-[5em] font-Teko italic font-bold text-dark-gray uppercase
              text-center 
              w-full"
              style={{ transform: "translate(-50%, -15%)" }}
            >
              {name}
            </p>
            <motion.img
              key={name}
              src={img}
              alt="bike"
              className="h-auto z-50 max-h-[600px]"
              variants={bikeVariants}
              initial="hidden"
              animate="show"
            />
            <div className=" grid md:grid-cols-4 gap-x-12 grid-cols-2 gap-y-3 my-5">
              {Object.keys(detailWithTitle).map((key) => (
                <div key={key}>
                  <p className="uppercase font-Teko text-xl tracking-wide text-left text-gray-600">
                    {splitCamelCaseToString(key)}
                  </p>
                  {splitNumberandUnit(
                    detailWithTitle[key as keyof BikeDetails]
                  )}
                </div>
              ))}
            </div>
            <div className="w-full h-[50px] flex justify-center items-center">
              {bikeInfo.map((bike, index) => (
                <motion.div
                  className={`${
                    currentIndex === index
                      ? "bg-black"
                      : "bg-slate-400"
                  } h-[20px] w-[20px] mx-1 rounded-full p-2`}
                  whileHover={{
                    scale: 1.2,
                    transition: { delay: 0.3, duration: 0.5 },
                  }}
                  key={bike.name}
                  onClick={() => setCurrentIndex(index)}
                ></motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bike;
