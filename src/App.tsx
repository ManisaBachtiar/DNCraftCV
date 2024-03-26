import HeroSection from "./parts/navbar";
import CustomCard from "./components/ui/card";
import cv_image from "./assets/CV.svg";
import ai_image from "./assets/AI.svg";
import cl_image from "./assets/CL.svg";
import CardMedium from "./components/ui/medium-card";
const App: React.FC = () => {
  return (
    <>
      <HeroSection />
      {/* <button>Hello Test</button> */}
      {/* <h1 className=" font-bold">test</h1> */}
      <div
        className={`max-w-5xl flex flex-col sm:flex-row  mx-auto  lg:px-0 mt-9 justify-center items-center `}
      >
        <CustomCard
          img={cv_image}
          title="Create CV"
          content="With our amazing templates, you have the opportunity to effortlessly craft a professional CV at absolutely no cost."
        />

        <CustomCard
          img={cl_image}
          title="Create Cover Letter"
          content="You also can easily craft a compelling cover letter for free using our excellent selection of templates it will enhance your opportunities"
        />

        <CustomCard
          img={ai_image}
          title="AI Assistant"
          content="With our AI-powered assistance, you can effortlessly refine and rephrase sentences for both your CV and cover letter."
        />
      </div>
      <div className="max-w-7xl mx-auto bg-white mt-9">
        <h1 className="pt-16 mx-12 font-bold text-3xl">The Benefits We Offer</h1>
        <p className="font-medium mx-12 w-2/3 text-lg mt-5 ">We provide you with a CV and cover letter maker that offers several benefits, making the creation process easier and enhancing the elegance of your CV.</p>
    
      <div className="max-w-7xl mt-12  mx-auto flex justify-center w-full ">
        <CardMedium title="Free to Use" description="This website is completely free to use, with no hidden costs that could strain your wallet."/>
        <CardMedium title="We Offer an AI helper" description="We provide an AI assistant to aid you, enabling you to effortlessly employ impactful language."/>
      </div> 
      <div className="max-w-7xl mt-5  mx-auto flex justify-center w-full ">
        <CardMedium title="Efficiently Empowering You" description="This is highly efficient with just three simple steps to complete everything, making it easy for you to generate numerous cover letters."/>
        <CardMedium title="Provide a lot of templates" description="We also offer pre-selected templates for ATS-friendly CVs and cover letters."/>
      </div>   
      </div>
    </>
  );
};

export default App;
