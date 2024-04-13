import arrow from "@/assets/arrow-left.svg"

import { useFormHelper, FormStep } from "@/utils/FormHelperContext";

interface ArrowLeftProps {
  className?: string;
}

const ArrowLeft: React.FC<ArrowLeftProps> = ({ className }) => {

  const { currentStep, setCurrentStep } = useFormHelper();

  return (
    <img src={arrow} 
      onClick={() => {
        if (currentStep === FormStep.HEADING)
        {
          setCurrentStep(FormStep.TEMPLATE);
          return;
        }

        setCurrentStep(currentStep - 1); // hope this right lol
      }} 
      className={`w-9 pt-6 ml-12 ${className}`} alt="Arrow Left"/>
  )
}
export default ArrowLeft;