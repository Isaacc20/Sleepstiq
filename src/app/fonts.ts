import { Inter, Poppins, Open_Sans } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const poppinsRegular = Poppins({
    weight: "400",
    subsets: ['latin']
});

export const poppinsItalic = Poppins({
    weight: "400",
    style: "italic",
    subsets: ['latin']
});

export const poppinsBold = Poppins({
    weight: "700",
    subsets: ['latin']
});

export const poppinsSemiBold = Poppins({
    weight: "600",
    subsets: ['latin']
});

export const open_sans = Open_Sans({
    weight: "600",
    subsets: ['latin']
})