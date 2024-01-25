import ecoBike from "../assets/powerpedal.png";
import powerBike from "../assets/ecovoltevo.png";
import ubranBike from '../assets/urbanflow.png'
import { Variants } from "framer-motion";

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "bike", title: "Bike" },
  { id: "feature", title: "Features" },
  { id: "about", title: "About" },
];

export const bikeInfo = [
  {
    name: "PowerPedal Pro",
    img: powerBike,
    price: 1999,
    details: {
      batteryRange: "70 Km",
      chargeTime: "3.5 Hours",
      assistSpeed: "25 Kmph",
      weight: "16.9 Kg"
    }
    
  },
  {
    name: "EcoVolt Evo",
    img: ecoBike,
    price: 4999,
    details: {
      batteryRange: "70 Km",
      chargeTime: "3.5 Hours",
      assistSpeed: "25 Kmph",
      weight: "16.9 Kg"
    }
  },
  {
    name: "UrbanFlow X1",
    img: ubranBike,
    price: 3049,
    details: {
      batteryRange: "50 Km",
      chargeTime: "3.5 Hours",
      assistSpeed: "15 Kmph",
      weight: "10.2 Kg"
    }
  },
];

export const CardContents: {
  title: string;
  content: string;
  href: string;
}[] = [
  {
    title: "High-Quality Details",
    content: "High-quality bicycle with precision-engineered components, ensuring a smmoth and reliable ride for cycling enthusiasts of all levels.",
    href: "/"
  },
  {
    title: "Long Battery Life",
    content: "Enjoy extended rides on this bicycle with its exceptional battery life, ensuring you can go the distance without interruption.",
    href: "/"
  }
]

export const containerVariant: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const itemVariant: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.0,
    },
  },
};
