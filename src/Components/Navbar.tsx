import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent px-6 py-5 md:px-10 md:py-6">
      <div className="flex w-full items-start justify-between">
        {/* Logo image */}
        <a href="/" aria-label="Media Noodles Home" className="block shrink-0">
          <img
            src={Logo}
            alt="Media Noodles"
            className="h-auto w-[150px] md:w-[220px] object-contain"
          />
        </a>

        {/* Right links */}
        <div className="flex gap-[10vw] pt-1 md:gap-24">
          <a
            href="https://www.behance.net/media-noodles"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative font-minion text-[3.6vw] font-bold leading-none text-black transition-all duration-300 hover:tracking-[0.06em] md:text-[28px]"
          >
            Work
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="mailto:Info@media-noodles.com"
            className="group relative font-minion text-[3.6vw] font-bold leading-none text-black transition-all duration-300 hover:tracking-[0.06em] md:text-[28px]"
          >
            Contact
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
