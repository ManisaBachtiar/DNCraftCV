import React from "react";

import { cn } from "../lib/utils";

import HeroSection from "@/parts/HeroSection"
import ServicesSection from "@/parts/ServicesSection";
import BenefitSection from "@/parts/BenefitSection";
import StepSection from "@/parts/StepSection";
import FAQSection from "@/parts/FAQSection";

const Wrapper = {
    Background: ({ children, className }: {children?: React.ReactNode; className?: string}) => {
        return (
            <div className={cn("bg-secondary", className)}>
                { children }
            </div>
        );
    },

    Content: ({ children, className }: {children?: React.ReactNode; className?: string}) => {
        return (
            <div className={cn("max-w-7xl mx-auto", className)}>
                { children }
            </div>
        );
    }
}

const Home: React.FC = () => {
    return (
    <>
        <HeroSection />

        <Wrapper.Background>
        <Wrapper.Content>
            <ServicesSection />
        </Wrapper.Content>
        </Wrapper.Background>

        <BenefitSection />

        <Wrapper.Background>
        <Wrapper.Content>
            <h1 className="font-bold text-3xl text-center pt-20">How It Works</h1>
            <StepSection />
        </Wrapper.Content>
        </Wrapper.Background>

        <Wrapper.Background className="bg-white">
        <Wrapper.Content className="pb-44">
            <h1 className="font-bold text-3xl mx-9 md:mx-0  md:text-center pt-16 md:pt-20">
            Frequently Asked Question
            </h1>
            <p className="md:text-center mx-9 md:mx-auto text-lg pt-3 md:w-1/2 pb-16">
            We offer a compilation of frequently asked questions along with their
            corresponding answers to help clarify information on this website.
            </p>
            <FAQSection />
        </Wrapper.Content>
        </Wrapper.Background>

        <footer className="bg-[#ECEBEB]">
            <div className="bg-[#ECEBEB] h-24 flex justify-center md:text-sm text-xs items-center max-w-7xl mx-auto text-black text-center">
            <p>Copyright © 2024 DNCraftCV. All rights reserved.</p></div>
        </footer>
    </>
    );
}

export default Home;