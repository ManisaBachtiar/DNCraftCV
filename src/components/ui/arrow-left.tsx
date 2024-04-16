import arrow from "@/assets/arrow-left.svg"

import { useFormHelper, FormStep } from "@/utils/FormHelperContext";

interface ArrowLeftProps {
  className?: string;
  onClick?: () => void;
}

const ArrowLeft: React.FC<ArrowLeftProps> = ({ className, onClick }) => {

  const { currentStep, setCurrentStep } = useFormHelper();

  return (
    <img src={arrow} 
      onClick={onClick}
      className={`w-9 pt-6 ml-12 ${className}`} alt="Arrow Left"/>
  )
}
export default ArrowLeft;