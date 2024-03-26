import HeroSection from "./parts/navbar";
import BenefitSection from "./parts/benefit";
import ServicesSection from "./parts/services";
import StepSection from "./parts/step";
const App: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection/>
      <BenefitSection/>
      <StepSection/>
      
    </>
  );
};

export default App;
