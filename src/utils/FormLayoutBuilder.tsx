import React, { HTMLInputTypeAttribute } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ArrowLeft from "@/components/ui/arrow-left"

import { cn } from "@/lib/utils";

import btn_plus from "@/assets/plus.svg";


class FormComponent {

    // member variables
    private m_nextButtonHandler: () => void = () => {};
    private m_backButtonHandler: () => void = () => {};

    constructor() {
        this.MainLayout = this.MainLayout.bind(this);
        
        this.setNextButtonhandler = this.setNextButtonhandler.bind(this);
        this.setBackButtonHandler = this.setBackButtonHandler.bind(this);
    }

    // utilities function
    setNextButtonhandler(handler: () => void) {
        this.m_nextButtonHandler = handler;
    }
    
    setBackButtonHandler(handler: () => void) {
        this.m_backButtonHandler = handler;
    }
    
    MainLayout: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
        return (
            <div className="max-w-7xl mx-auto">
                { children }

                <Button className="sm:ml-[90%] font-bold mt-20 mb-9" onClick={this.m_nextButtonHandler}>Next</Button>
            </div>
        )
    }

    TopLayout: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
        return (
            <div className="mx-28 mt-7 ml-[19rem]">
                { children }
            </div>
        )
    }

    BackButton: React.FC = () => {
        return (
            <ArrowLeft onClick={this.m_backButtonHandler} className="ml-72 cursor-pointer" />
        );
    }

    Title: React.FC<{ children: string; }> = ({ children }) => {
        return (
            <h1 className="font-bold text-3xl">
                { children }
            </h1>
        )
    }
    
    Description: React.FC<{ children: string; }> = ({ children }) => {
        return (
            <p className="mt-2 w-[80%]">
                { children }
            </p>
        );
    }

    addListButton: React.FC<{ onClick?: () => void; children: string; }> = ({ onClick, children }) => {
        return (
            <div onClick={ onClick } className="flex py-2 ml-[19rem] mt-5 border-2 border-black rounded-xl px-2 w-44 cursor-pointer hover:bg-black hover:text-white transition-colors">
                <img src={ btn_plus } className="mr-4" alt="" />
                <p>{ children }</p>
            </div>
        )
    }

    BottomLayout: React.FC<{ className?: string; children: React.ReactNode; }> = ({ className, children }) => {
        return (
            <div className={cn("mx-auto flex ml-64 justify-center ", className)}>
                { children }
            </div>
        )
    }

    FormSection: React.FC<{ wrapperClass?: string; formClass?: string; children: React.ReactNode; }> = ({ wrapperClass, formClass, children }) => {
        return (
            <div className={cn("w-full mt-5 mx-9 max-w-md", wrapperClass)}>
                <form className={cn("rounded px-5 pt-6 pb-2 mb-4", formClass)}>
                    { children }
                </form>
            </div>
        )
    }

    AddInputText: React.FC<{ 
        name?: string; 
        placeholder?: string; 
        labelClass?: string; 
        inputClass?: string; 
        className?: string;
        children: string; 
        type?: HTMLInputTypeAttribute; 
        value?: string; 
    }> = ({ name, placeholder, className, labelClass, inputClass, children, type, value }) => {
        return (
            <div className={cn("mb-4", className)}>
                <Label htmlFor={name} className={cn("block text-gray-700 text-sm font-bold mb-3", labelClass)}>{ children }</Label>
                <Input 
                    className={cn("bg-[#ECEBEB] text-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", inputClass)}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                />
            </div>
        )
    }
}

export default FormComponent;