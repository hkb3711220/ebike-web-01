import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navLinks } from "../constants";
import { motion, Variants } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <div className="xl:max-w-[1280px] w-full flex justify-between px-5 py-3 items-center text-center">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            className="h-[50px] w-[50px] bg-white invert"
          />
        </a>
        <ul className="flex gap-8 items-center font-medium">
          {navLinks.map((link) => (
            <li
              className="text-white relative h-[30px] text-xl after:content-[''] after:absolute after:bottom-[3px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full after:duration-500 md:flex hidden uppercase"
              key={link.id}
            >
              <Link
                smooth
                to={`#${link.id}`}
                scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <motion.div
          className="md:hidden items-center justify-center flex"
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <button onClick={() => setIsOpen(!isOpen)} className="z-50">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              className={ isOpen ? "" : "bg-white invert"}
            >
              <Path
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
              />
              <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
              />
              <Path
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
              />
            </svg>
          </button>
          <motion.div
            className={`${
              isOpen ? "flex" : "hidden"
            } bg-white absolute top-0 left-0 h-screen w-screen items-center justify-center z-40`}
          >
            <motion.ul
              variants={{
                open: {
                  clipPath: "inset(0% 0% 0% 0% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.5,
                    staggerChildren: 0.2,
                  },
                },
                closed: {
                  clipPath: "inset(10% 50% 90% 50% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3,
                  },
                },
              }}
              className="flex flex-col gap-5"
              style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
              {navLinks.map((link) => (
                <motion.li
                  variants={itemVariants}
                  className="font-medium text-2xl text-black uppercase"
                  key={link.id}
                >
                  {link.title}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
