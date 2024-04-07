import { Button } from "@/components/ui/button";
import Img from "../assets/templateImg.jpg";
import Github from "../assets/github.svg";
import Coffee from  "../assets/coffee.svg";
import { Link } from "react-router-dom";
const Export = () => {
  return (
    <>
      <div className="text-center mt-24">
        <h1 className="font-bold text-3xl">
          Your CV has finally been completed.
        </h1>
        <p className="mt-1">
          Feel free to download your CV from the link below.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="bg-white my-8 border-2 border-slate-300 w-96 h-96">
          <div className="flex justify-center items-center flex-col mx-12 mt-28">
            <Link to ="/template1">
            <Button className="px-12 my-1">Download DOC</Button>
            </Link>
            <Button className="px-12 my-1">Download PDF</Button>
          </div>
          <div className="flex justify-center items-center mt-4">
          <div className="flex mx-2">
            <img src={Github} className="w-5 " alt="" />
            <p className="ml-2 text-sm">Give a star</p>
          </div>
          <div className="flex mx-2">
            <img src={Coffee} className="w-5 " alt="" />
            <p className="ml-2 text-sm">Buy us a coffee</p>
          </div></div>
        </div>
        <div className="bg-[#D9D9D9] my-8 py-9  w-96 h-96 justify-center items-center flex">
          <img src={Img} className="w-3/5   " alt="" />
        </div>
      </div>
    </>
  );
};
export default Export;
