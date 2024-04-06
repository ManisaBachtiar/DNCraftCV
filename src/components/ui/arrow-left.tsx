import arrow from "@/assets/arrow-left.svg"
import { Link } from "react-router-dom";
interface ArrowLeftProps {
  className?: string;
}
const ArrowLeft: React.FC<ArrowLeftProps> = ({ className }) => {

    return (
      <Link to={"/template"}>
      <img src={arrow} className={`w-9   pt-6 ml-12 ${className}`} alt="Arrow Left"/>  
      </Link>
    )
}
export default ArrowLeft;