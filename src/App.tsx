import HeroSection from "./parts/navbar";
import BenefitSection from "./parts/benefit";
import ServicesSection from "./parts/services";
import StepSection from "./parts/step";
import FaqSection from "./parts/faq";
const App: React.FC = () => {
  return (
    <>
      <HeroSection />
      <div className="bg-[#ECEBEB] max-w-7xl mx-auto">
        <ServicesSection />
      </div>
      <BenefitSection />
      <div className=" bg-[#ECEBEB]  max-w-7xl mx-auto">
        <h1 className="font-bold text-3xl text-center py-12">How It Works</h1>
        <StepSection />
      </div>
      <div className="bg-white  max-w-7xl mx-auto pb-44">
        <h1 className="font-bold text-3xl text-center pt-12">
          Frequently Asked Question
        </h1>
        <p className="text-center mx-auto pt-3 w-1/2 pb-16">
          We offer a compilation of frequently asked questions along with their
          corresponding answers to help clarify information on this website.
        </p>
        <FaqSection />
      </div>
      <footer className="bg-[#ECEBEB] h-24 flex justify-center items-center max-w-7xl mx-auto text-black text-center">
        <p>Copyright © 2024 DNCraftCV. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;
