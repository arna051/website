import { HomePageView } from "@/sections/home";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "هیپوگریف | توسعه نرم‌افزار و سخت‌افزار",
    description:
        "هیپوگریف تیمی از مهندسان نرم‌افزار و سخت‌افزار است. ما سیستم‌های سفارشی، اپلیکیشن‌های فول‌استک، سامانه‌های نهفته، و دستگاه‌های هوشمند را طراحی، توسعه و یکپارچه می‌کنیم.",
    applicationName: "هیپوگریف",
    generator: "Next.js",
    keywords: [
        "هیپوگریف",
        "توسعه نرم‌افزار",
        "توسعه سخت‌افزار",
        "Node.js",
        "سیستم نهفته",
        "Electron",
        "React Native",
        "MongoDB",
        "سامانه حسابداری",
        "طراحی برد",
        "توسعه اپلیکیشن",
        "پروژه سفارشی",
        "طراحی وب سایت",
        "طراحی اپلیکیشن",
        "طراحی سامانه",
        "وب سایت فروشگاهی",
        "ربات تلگرام",
        "طراحی ربات تلگرام",
        "پروژه های هوش مصنوعی"
    ],
    authors: [
        { name: "مهندس نظرنژاد", url: "tel:+989038719255" },
        { name: "مهندس رجائیان", url: "tel:+989157694535" }
    ],
    creator: "هیپوگریف",
    publisher: "هیپوگریف",
    metadataBase: new URL("https://hippogriff.ir"), // update if you have your domain
    alternates: {
        canonical: "https://hippogriff.ir/",
        languages: {
            fa: "https://hippogriff.ir/"
        }
    },
    openGraph: {
        type: "website",
        locale: "fa_IR",
        url: "https://hippogriff.ir",
        siteName: "هیپوگریف",
        title: "هیپوگریف | توسعه نرم‌افزار و سخت‌افزار",
        description:
            "ما در هیپوگریف، سیستم‌های نرم‌افزاری و سخت‌افزاری سفارشی را از صفر تا صد طراحی و پیاده‌سازی می‌کنیم.",
        images: [
            {
                url: "https://hippogriff.ir/og.jpg", // You can upload a custom OG image
                width: 1200,
                height: 630,
                alt: "هیپوگریف - توسعه نرم‌افزار و سخت‌افزار"
            }
        ]
    },
    category: "Technology"
};


export default function HomePage() {
    return <HomePageView />
}