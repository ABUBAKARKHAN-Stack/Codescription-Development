import ContainerLayout from "./ContainerLayout";
import {
    FooterCopyRight,
    FooterSocial,
    FooterTop,
} from "@/components/section/footer";

import React from 'react'
import { Separator } from "../ui/separator";

const Footer = () => {
    return (
        <footer>
            <ContainerLayout>

                {/* === Main Footer Section === */}
                <FooterTop />

                {/* === Social Media Section === */}
                <FooterSocial />

                {/* === Separator === */}
                <Separator />


                {/* === Copyright Section === */}
                <FooterCopyRight />
                
            </ContainerLayout>
        </footer>
    )
}

export default Footer