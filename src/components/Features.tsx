import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { CardContents, itemVariant, containerVariant } from "../constants";
import bike1 from "../assets/bike-details-1.jpg";
import bike2 from "../assets/bike-details-2.jpg";
import ScatterChart from "./ScatterChart";

const Features = () => {
  const leftFeatureImages: JSX.Element = (
      <>
        <motion.img
          variants={itemVariant}
          src={bike1}
          className="absolute h-[80%] 
    top-0 left-[30px] sssm:left-[50px] z-10 rounded-lg shadow-2xl"
        />
        <motion.img
          variants={itemVariant}
          src={bike2}
          className="absolute h-[80%] top-[30px] right-[30px] sssm:right-[50px] z-20 rounded-lg shadow-2xl"
        />
      </>
    )

  return (
    <div
      className="
      bg-black 
      w-full h-full xl:h-screen
      flex justify-center items-center"
      id="feature"
    >
      <div className="xl:max-w-[1280px] w-full md:p-15 mmd:p-10 p-5">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0, once: true }}
          className="float-right w-full"
        >
          <motion.p
            variants={itemVariant}
            className="text-6xl text-[#f60000] font-Playfair italic font-bold text-right"
          >
            Key
          </motion.p>
          <motion.p
            variants={itemVariant}
            className="text-6xl font-Teko text-white tracking-wide text-right"
          >
            Features
          </motion.p>
        </motion.div>
        <div className="flex flex-col llg:flex-row w-full h-full">
          <div className="flex-1 flex justify-center items-center">
            <Card 
            backgroundImg="bg-blurry-haikei" 
            cardIamge={leftFeatureImages} 
            cardContent={CardContents[0]}/>
          </div>
          <div className="flex-1 flex justify-center items-center mt-5 llg:mt-0">
            <Card 
            backgroundImg="bg-blurry-haikei-2" 
            cardIamge={<ScatterChart />} 
            cardContent={CardContents[1]}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
