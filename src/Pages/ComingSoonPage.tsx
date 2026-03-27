import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const lineAnimation: Variants = {
  hidden: {
    opacity: 0,
    x: -70,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const paragraphAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.25,
      ease: "easeOut",
    },
  },
};

const imageAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.35,
      ease: "easeOut",
    },
  },
};

const navbarAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const StarIcon = () => (
  <motion.img
    src="/shape element.png"
    alt="star"
    className="mx-2 inline-block h-[1.0em] w-auto animate-spin-slow align-[-0.25em] mb-2"
  />
);

const Dash = () => (
  <span className="ml-4 inline-block h-[10px] w-[108px] translate-y-[-0.08em] align-middle bg-black" />
);

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F8] text-black overflow-hidden">
      <motion.div variants={navbarAnimation} initial="hidden" animate="show">
        <Navbar />
      </motion.div>

      <main className="flex-grow flex flex-col items-center justify-start pt-6 pb-0">
        {/* 1. TOP SECTION: HEADINGS */}
        <div className="w-full max-w-[1400px] flex flex-col items-center">
          {/* DESKTOP */}

          <motion.div
            className="hidden md:flex flex-col w-fit px-3"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={lineAnimation}
              className="whitespace-nowrap font-somar text-[45px] font-bold uppercase leading-[0.6] tracking-[-0.04em] lg:text-[67px]"
            >
              WE ARE COOKING UP
              <StarIcon />
              SOMETHING
              <Dash />
            </motion.h1>

            <motion.h1
              variants={lineAnimation}
              className="self-end whitespace-nowrap font-somar text-[45px] font-bold uppercase leading-[0.6] tracking-[-0.04em] lg:text-[67px] pr-6"
            >
              SPECIAL FOR YOU
              <StarIcon />
              STAY TUNED
            </motion.h1>

            {/* desktop paragraph only */}
            <motion.div
              variants={paragraphAnimation}
              initial="hidden"
              animate="show"
              className="mt-10 md:w-[310px] font-somar text-[23px] font-bold leading-[1.1]"
            >
              <p className="text-justify [text-align-last:justify]">
                In the meantime, you can check out our work on{" "}
                <a
                  href="https://www.behance.net/media-noodles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black transition-colors duration-300 hover:text-[#573DEE]"
                >
                  Behance
                </a>{" "}
                and contact us via
              </p>

              <p className="text-left">
                <a
                  href="mailto:Info@media-noodles.com"
                  className="text-black transition-colors duration-300 hover:text-[#573DEE]"
                >
                  Email.
                </a>
              </p>
            </motion.div>
          </motion.div>

          {/* MOBILE */}
          <motion.div
            className="flex w-full flex-col items-start px-2 md:hidden"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={lineAnimation}
              className="whitespace-nowrap font-somar text-[9vw] font-bold uppercase leading-[0.92] tracking-[-0.03em]"
            >
              WE ARE COOKING
            </motion.h1>

            <motion.h1
              variants={lineAnimation}
              className="whitespace-nowrap font-somar text-[9vw] font-bold uppercase leading-[0.92] tracking-[-0.03em]"
            >
              UP
              <StarIcon />
              SOMETHING
            </motion.h1>

            <motion.h1
              variants={lineAnimation}
              className="whitespace-nowrap font-somar text-[9vw] font-bold uppercase leading-[0.92] tracking-[-0.03em]"
            >
              SPECIAL FOR YOU
            </motion.h1>

            <motion.h1
              variants={lineAnimation}
              className="whitespace-nowrap font-somar text-[9vw] font-bold uppercase leading-[0.92] tracking-[-0.03em]"
            >
              <StarIcon />
              STAY TUNED
            </motion.h1>
          </motion.div>

          {/* MOBILE PARAGRAPH */}
          <div className="w-full flex md:hidden flex-col items-end px-8 mt-4">
            <motion.p
              variants={paragraphAnimation}
              initial="hidden"
              animate="show"
              className="font-somar text-[3.8vw] max-w-[62vw] text-left leading-[1.3] mb-12"
            >
              In the meantime, you can check out our work on{" "}
              <a
                href="https://www.behance.net/media-noodles"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black transition-colors duration-300 hover:text-[#573DEE]"
              >
                Behance
              </a>{" "}
              and contact us via{" "}
              <a
                href="mailto:Info@media-noodles.com"
                className="text-black transition-colors duration-300 hover:text-[#573DEE]"
              >
                Email.
              </a>
            </motion.p>
          </div>

          {/* BOTTOM IMAGE */}
          <motion.div
            variants={imageAnimation}
            initial="hidden"
            animate="show"
            className="w-full flex flex-col items-center mt-auto -mb-[5px] md:-mb-[10px]"
          >
            <motion.img
              src="/MediaWeb.png"
              alt="Media Noodles Arabic Desktop"
              className="hidden md:block w-full max-w-none h-auto object-contain"
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.img
              src="/MediaMob.png"
              alt="Media Noodles Arabic Mobile"
              className="block md:hidden w-full max-w-none h-auto object-contain"
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoonPage;
