import React from "react";

import trash from "@/assets/trash.svg";

const DataList: React.FC<
{ 
    title: string; 
    description: string; 
    onDelete: () => void; 
    // onEdit: () => void; 
}>  = ({ title, description, onDelete }) => {
    return (
        <div className="bg-[#ECEBEB] mt-6 justify-center px-3 py-3 rounded ml-[19.2rem] max-w-5xl">
            <div className="flex justify-between">
                <div> 
                    <h1 className="font-bold ml-3 ">{ title }</h1>
                    <p className="ml-3">{ description }</p>
                </div>
            
                <img onClick={onDelete} src={trash} className="w-6 mx-3 cursor-pointer" alt="" />
                {/* <img onClick={onEdit} src={trash} className="w-6 mx-3" alt="" /> */}
            </div>
        </div>
    );
}

export default DataList;