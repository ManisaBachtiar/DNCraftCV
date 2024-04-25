import React, { HTMLInputTypeAttribute } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ArrowLeft from "@/components/ui/arrow-left"

import { cn } from "@/lib/utils";

import btn_plus from "@/assets/plus.svg";


class FormLayoutBuilder {

    private m_nextButtonHandler: () => void = () => {};
    private m_backButtonHandler: () => void = () => {};

    // callbacks are not rlly needed at the moment
    // private m_inputTextCallback: Map<string, Map<HTMLInputElement, () => void>>;
    private m_inputTextCallback: Map<string, HTMLInputElement>;

    constructor() {
        // this.m_inputTextCallback = new Map<string, Map<HTMLInputElement, () => void>>();
        this.m_inputTextCallback = new Map<string, HTMLInputElement>;

        this.MainLayout = this.MainLayout.bind(this);
        
        this.setNextButtonhandler = this.setNextButtonhandler.bind(this);
        this.setBackButtonHandler = this.setBackButtonHandler.bind(this);
        this.setInputTextCallback = this.setInputTextCallback.bind(this);
    }

    setNextButtonhandler = (handler: () => void): void => {
        this.m_nextButtonHandler = handler;
    }
    
    setBackButtonHandler = (handler: () => void) => {
        this.m_backButtonHandler = handler;
    }

    setInputTextCallback = (elementID: string, inputElement: HTMLInputElement): void => {
        if (!this.m_inputTextCallback.has(elementID))
            this.m_inputTextCallback.set(elementID, inputElement);
    }

    getInputText = (elementID: string): HTMLInputElement | undefined => {
        const inputElement = this.m_inputTextCallback.get(elementID);

        if (!inputElement) {
            console.error("no callback found for input with elementID", elementID);
            return undefined;
        }

        return inputElement;
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
            <div className="mx-9 sm:mx-28 mt-7 sm:ml-[19rem]">
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
            <div className={cn("mx-auto flex flex-col sm:flex-row  sm:ml-64 justify-center ", className)}>
                { children }
            </div>
        )
    }

    FormSection: React.FC<{ wrapperClass?: string; formClass?: string; children: React.ReactNode; }> = ({ wrapperClass, formClass, children }) => {
        return (
            <div className={cn("w-[90%] sm:w-full sm:mt-5 mx-5  sm:mx-9 max-w-md", wrapperClass)}>
                <form className={cn(" rounded px-5 pt-6 pb-2 mb-4", formClass)}>
                    { children }
                </form>
            </div>
        )
    }

    AddInputText: React.FC<React.InputHTMLAttributes<HTMLInputElement> & {
        name?: string;
        labelClass?: string;
        className?: string;
        children: string;
        noInput?: boolean;
    }> = ({ name, placeholder, noInput, className, labelClass, children, ...inputProps }) => {
        
        const inputRef = React.useRef<HTMLInputElement>(null);
        
        React.useEffect(() => {
            if (name && inputRef.current) {
                this.setInputTextCallback(name, inputRef.current);
            }
        }, [name, inputRef.current]);
    
        return (
            <div className={cn("mb-4", className)}>
                <Label htmlFor={name} className={cn("block text-gray-700 text-sm font-bold mb-3", labelClass)}>{ children }</Label>
                {!noInput && (
                    <Input 
                        className={cn("bg-[#ECEBEB] text-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", inputProps.className)}
                        type={inputProps.type}
                        ref={inputRef}
                        id={name}
                        placeholder={placeholder}
                        value={inputProps.value}
                        onChange={inputProps.onChange}
                        {...inputProps}
                    />
                )}
            </div>
        )
    }
}

export default FormLayoutBuilder;