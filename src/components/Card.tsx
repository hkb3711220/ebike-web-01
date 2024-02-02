import React from "react";
import { motion } from "framer-motion";
import { containerVariant, itemVariant } from "../constants";

type CardContent = { title: string; content: string; href: string; }

const FormatedCardImage = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="relative h-[60%] w-full ssm:max-w-[450px]"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0, once: false }}
    >
      {children}
    </motion.div>
  );
};

const FormatedCardContent: React.FC<{ cardContent: CardContent }> = ({ cardContent }) => {
  const { title, content, href } = cardContent
  return (
    <motion.div
      className="max-w-[450px] flex flex-col gap-3 h-[200px] relative"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0, once: false }}
    >
      <motion.p
        variants={itemVariant}
        className=" uppercase text-left font-Teko font-bold text-2xl ssm:text-4xl"
      >
        {title}
      </motion.p>
      <motion.p
        variants={itemVariant}
        className=" font-Teko text-xl ssm:text-[23px] text-left tracking-normal"
      >
        {content}
      </motion.p>
      <motion.a
        href={href}
        variants={itemVariant}
        className="absolute bottom-[5px] w-full font-Teko text-lg ssm:text-xl 
        p-3 border-2 border-black tracking-wide"
      >
        Explore More
      </motion.a>
    </motion.div>
  );
};


const Card: React.FC<{ backgroundImg: string, cardIamge: JSX.Element, cardContent: CardContent }> = ({ backgroundImg, cardIamge, cardContent }) => {
  const cardContainerStyles =
    "bg-center bg-cover h-[500px] w-full ssm:h-[600px] ssm:w-[500px] rounded-xl";

  return (
    <div className={`${cardContainerStyles} ${backgroundImg}`}>
      <div className="h-full flex flex-col justify-center items-center p-3">
        <FormatedCardImage>
          {cardIamge}
        </FormatedCardImage>
        <FormatedCardContent cardContent={cardContent} />
      </div>
    </div>
  );
};

export default Card;
