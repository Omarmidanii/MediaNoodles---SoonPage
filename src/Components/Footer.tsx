import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/";
const INSTAGRAM_URL = "https://www.instagram.com/media_noodles";
const BEHANCE_URL = "https://www.behance.net/media-noodles";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      className="mt-0 w-full bg-[#5D45FF] px-4 pt-2 pb-4 text-white md:px-10 md:pt-2 md:pb-5"
    >
      <div className="w-full">
        <h2 className="font-minion text-[22px] font-bold uppercase leading-none md:text-[32px]">
          MEDIA NOODLES
        </h2>

        <div className="mt-2 flex w-full items-end justify-between">
          <p className="font-somar text-[10px] font-bold tracking-[0.02em] opacity-90 md:text-[12px]">
            ©2026 All rights reserved.
          </p>

          <div className="flex items-center gap-4 md:gap-5">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-all duration-300 hover:-translate-y-[2px] hover:scale-110 hover:opacity-80"
            >
              <Linkedin size={18} strokeWidth={1.6} />
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-all duration-300 hover:-translate-y-[2px] hover:scale-110 hover:opacity-80"
            >
              <Instagram size={18} strokeWidth={1.6} />
            </a>

            <a
              href={BEHANCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
              className="transition-all duration-300 hover:-translate-y-[2px] hover:scale-110 hover:opacity-80"
            >
              <span className="font-sans text-lg font-bold leading-none md:text-xl">
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
