import HeroSection from "./parts/navbar";
import BenefitSection from "./parts/benefit";
import ServicesSection from "./parts/services";
import StepSection from "./parts/step";
import FaqSection from "./parts/faq";
const App: React.FC = () => {
  return (
    <>
      <HeroSection />
      <div className="bg-[#ECEBEB]">
      <div className="bg-[#ECEBEB] max-w-7xl mx-auto">
        <ServicesSection />
      </div>
      </div>
      <BenefitSection />
      <div className="bg-[#ECEBEB]">
      <div className=" bg-[#ECEBEB]  max-w-7xl mx-auto">
        <h1 className="font-bold text-3xl text-center pt-20">How It Works</h1>
        <StepSection />
      </div></div>
      <div className="bg-white  max-w-7xl mx-auto pb-44">
        <h1 className="font-bold text-3xl mx-9 md:mx-0  md:text-center pt-16 md:pt-20">
          Frequently Asked Question
        </h1>
        <p className="md:text-center mx-9 md:mx-auto pt-3 md:w-1/2 pb-16">
          We offer a compilation of frequently asked questions along with their
          corresponding answers to help clarify information on this website.
        </p>
        <FaqSection />
      </div>
      <footer className="bg-[#ECEBEB]">
        <div className="bg-[#ECEBEB] h-24 flex justify-center md:text-sm text-xs items-center max-w-7xl mx-auto text-black text-center">
        <p>Copyright © 2024 DNCraftCV. All rights reserved.</p></div>
      </footer>
    </>
  );
};

export default App;
