import arrow from "@/assets/arrow-left.svg"

interface ArrowLeftProps {
  className?: string;
}
const ArrowLeft: React.FC<ArrowLeftProps> = ({ className }) => {

    return (
      <img src={arrow} className={`w-9   pt-6 ml-12 ${className}`} alt="Arrow Left"/>  
    )
}
export default ArrowLeft;