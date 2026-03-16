const Navbar = () => {
  return (
    <nav className="flex justify-between items-start w-full px-4 py-4 md:px-10 md:py-5 bg-transparent">
      <div className="flex flex-col leading-[0.8]">
        <span className="font-minion font-bold text-[4.5vw] md:text-[32px] tracking-wide text-black">
          MEDIA NOODLES
        </span>
        <span className="font-minion font-bold text-[3.0vw] md:text-[20px] tracking-wide mt-1 text-black uppercase">
          CREATIVE AGENCY
        </span>
      </div>
      <div className="flex gap-[5vw] md:gap-10">
        {/* Link to Behance */}
        <a
          href="https://www.behance.net/media-noodles"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative font-minion font-bold text-[3.8vw] md:text-[15px] uppercase transition-all duration-300 hover:tracking-widest"        >
          Work

          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
        </a>
        {/* Link to Email */}
        <a
          href="mailto:Info@media-noodles.com"
          className="group relative font-minion font-bold text-[3.8vw] md:text-[15px] uppercase transition-all duration-300 hover:tracking-widest"
        >
          Contact

          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
