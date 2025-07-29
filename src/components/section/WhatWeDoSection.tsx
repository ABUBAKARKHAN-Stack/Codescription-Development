"use client";

import React, { useRef } from "react";
import ContainerLayout from "../layout/ContainerLayout";
import { SectionHeader } from "../reusabe";
import { whatWeDoSectionHeader } from "@/data/whatwedo.data";
import { WhatWeDoCards } from "../cards";



const WhatWeDoSection = () => {

    const cardsContainerRef = useRef(null);


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
                    ref={cardsContainerRef}
                    className=" mt-10 w-full"
                >
                    <WhatWeDoCards
                        cardsContainerRef={cardsContainerRef}
                    />
                </section>
            </ContainerLayout>
        </main>
    );
};

export default WhatWeDoSection;
