import { toastBaseStyling } from "@/constants/constants";
import { toast } from "sonner";



const successToast = (message: string) => {
    toast.success(message, {
        style: {
            backgroundColor: "#BBF7D0",
            color: "#065F46",
            border: "1px solid #16A34A",
            ...toastBaseStyling
        }
    });
};

const errorToast = (message: string) => {
    toast.error(message, {
        style: {
            backgroundColor: "#FFF5F5",
            color: "#F9504E",
            border: "1px solid #FEDAD9",
            ...toastBaseStyling

        },
    });
};

const infoToast = (message: string) => {
    toast.info(message, {
        style: {
            background: "var(--color-purple-500)",
            color: "var(--color-purple-100)",
            border: "1px solid var(--color-purple-600)",
            ...toastBaseStyling
        },
    });
};

export {
    successToast,
    errorToast,
    infoToast
};
