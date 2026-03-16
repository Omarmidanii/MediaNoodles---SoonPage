import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }} className="w-full bg-[#5D45FF] text-white px-3 py-4 md:px-6 md:py-1 mt-auto">
      <div className="flex flex-col w-full max-w-[1400px] mx-auto">
        <div>
          <h2 className="font-Lifta font-black text-[20px] md:text-[30px] uppercase ">
            MEDIA NOODLES
          </h2>
        </div>
        <div className="flex justify-between items-end w-full">
          <p className="font-somar text-[9px] md:text-[11px] opacity-90 tracking-wide">
            ©2023 All rights reserved.
          </p>

          <div className="flex items-center gap-4 md:gap-5">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 hover:-translate-y-[2px] hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={18} strokeWidth={1.5} />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 hover:-translate-y-[2px] hover:scale-110 transition-all duration-300"
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>

            <a
              href="https://www.behance.net/media-noodles"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 hover:-translate-y-[2px] hover:scale-110 transition-all duration-300"
            >
              <span className="font-sans font-bold text-lg md:text-xl leading-none">
                Bē
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
