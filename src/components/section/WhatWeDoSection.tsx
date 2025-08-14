"use client";

import React from "react";
import ContainerLayout from "../layout/ContainerLayout";
import { SectionHeader } from "../reusabe";
import { whatWeDoSectionHeader } from "@/data/whatwedo.data";
import { WhatWeDoCards } from "../cards";



const WhatWeDoSection = () => {

    return (
        <main
            id="what-we-do"
            className="w-full h-full py-16 md:py-24">
            <ContainerLayout>
                <SectionHeader
                    mainHeading={whatWeDoSectionHeader.mainHeading}
                    subText={whatWeDoSectionHeader.subText}
                    animateOnce={true}
                />

                <section
                    className="mt-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <WhatWeDoCards />
                </section>
            </ContainerLayout>
        </main>
    );
};

export default WhatWeDoSection;
