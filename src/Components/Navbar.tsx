const Navbar = () => {
  return (
    <nav className="flex justify-between items-start w-full px-4 py-4 md:px-10 md:py-5 bg-transparent">
      <div className="flex flex-col leading-[0.8]">
        <span className="font-minion font-bold text-[4.5vw] md:text-[32px] tracking-tight text-black">
          MEDIA NOODLES
        </span>
        <span className="font-minion font-bold text-[3.0vw] md:text-[20px] tracking-tight mt-1 text-black uppercase">
          CREATIVE AGENCY
        </span>
      </div>
      <div className="flex gap-[5vw] md:gap-10">
        <a
          href="#"
          className="font-minion font-bold text-[3.8vw] md:text-[15px] uppercase hover:opacity-60 transition-opacity"
        >
          Work
        </a>
        <a
          href="#"
          className="font-minion font-bold text-[3.8vw] md:text-[15px] uppercase hover:opacity-60 transition-opacity"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
