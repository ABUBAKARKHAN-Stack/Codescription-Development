import React, { useState } from 'react'
import ContainerLayout from '../layout/ContainerLayout'
import { SectionHeader } from '../reusabe'
import {
    techStackSectionHeader,
    techStackData
} from '@/data/techstack.data'
import { TechStackTabs } from '@/types/main.types'
import { Button } from '../ui/button'

const TechStackSection = () => {
    const [activeTab, setActiveTab] = useState<TechStackTabs>(TechStackTabs.FRONTEND);
    const frontendTechs = techStackData.filter(({ label }) => label === TechStackTabs.FRONTEND);
    const backendTechs = techStackData.filter(({ label }) => label === TechStackTabs.BACKEND);
    const databasesTech = techStackData.filter(({ label }) => label === TechStackTabs.DATABASES);
    const mobileTech = techStackData.filter(({ label }) => label === TechStackTabs.MOBILE);
    const devopsandtoolsTechs = techStackData.filter(({ label }) => label === TechStackTabs.DEVOPSANDTOOLS);



    return (
        <main className="h-full w-full py-16 md:py-24  bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900">
            <ContainerLayout>
                <SectionHeader
                    mainHeading={techStackSectionHeader.mainHeading}
                    animateOnce={true}
                />
                <section className="mt-10 w-full">

                    {/* Tech Stacks Tabs */}
                    <div className="flex gap-x-4 justify-center items-center">
                        {
                            techStackData.map(({
                                category,
                                label
                            }) => (
                                <Button
                                    variant={label === activeTab ? "default" : "secondary"}
                                    size={label === activeTab ? "lg" : "default"}
                                    className='rounded-full cursor-pointer'
                                    onClick={() => setActiveTab(label)}
                                >
                                    {category}
                                </Button>
                            ))
                        }
                    </div>

                </section>
            </ContainerLayout>
        </main>
    )
}

export default TechStackSection