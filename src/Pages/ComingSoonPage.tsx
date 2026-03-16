import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const StarIcon = () => (
  <img
    src="/shape element.png"
    alt="star"
    className="inline-block h-[1.1em] w-auto align-middle animate-spin-slow"
  />
);

const Dash = () => (
  <span className="inline-block w-16 md:w-24 h-[4px] md:h-[8px] bg-black align-middle ml-4 mb-1 md:mb-2" />
);

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F8] text-black overflow-x-hidden">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-start py-6">
        <div className="w-full max-w-[1400px] flex flex-col items-center">
          <div className="hidden md:flex flex-col w-fit px-3">
            <h1 className="font-somar text-[45px] lg:text-[60px] font-bold leading-[0.6] tracking-normal uppercase whitespace-nowrap">
              We are cooking up
              <StarIcon />
              something <Dash />
            </h1>
            <h1 className="font-somar text-[45px] lg:text-[60px] font-bold leading-[0.6] tracking-normal uppercase whitespace-nowrap self-end">
              special for you
              <StarIcon />
              stay tuned
            </h1>
          </div>
          <div className="w-full flex flex-col md:hidden items-start text-left space-y-0 px-6">
            <h1 className="font-somar text-[10.5vw] font-bold leading-[0.9] tracking-tight uppercase whitespace-nowrap">
              We are cooking
            </h1>
            <h1 className="font-somar text-[10.5vw] font-bold leading-[0.9] tracking-tight uppercase whitespace-nowrap">
              up
              <StarIcon />
              something
            </h1>
            <h1 className="font-somar text-[10.5vw] font-bold leading-[0.9] tracking-tight uppercase whitespace-nowrap">
              special for you
            </h1>
            <h1 className="font-somar text-[10.5vw] font-bold leading-[0.9] tracking-tight uppercase whitespace-nowrap">
              <StarIcon />
              stay tuned
            </h1>
          </div>

          <div className="w-full mt-2 md:mt-8 flex flex-col items-end md:items-start px-8">
            <p className="font-somar text-[3.8vw] max-w-[62vw] text-left leading-[1.3] mb-12 md:text-[23px] md:font-bold md:leading-[1.1] md:max-w-none md:mb-6 md:tracking-tight">
              in the meantime, you can <br className="hidden md:block" />
              check out our work on <br className="hidden md:block" />
              Behance and contact us via <br className="hidden md:block" />
              <span className="md:hidden">Email.</span>
              <span className="hidden md:inline">Whatsapp or Email.</span>
            </p>

            <div className="w-full flex justify-center">
              <img
                src="/MediaWeb.png"
                alt="Media Noodles Arabic Desktop"
                className="hidden md:block w-full max-w-6xl h-auto object-contain"
              />

              <img
                src="/MediaMob.png"
                alt="Media Noodles Arabic Mobile"
                className="block md:hidden w-[100vw] max-w-[550px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoonPage;
