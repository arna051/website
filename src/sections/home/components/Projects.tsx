"use client";

import { Section } from "@/components/Section";
import Swap from "@/components/Swap";
import { Box, Button, Card, CardActions, CardContent, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";

const projects = [
    {
        title: "دستگاه تمام اتومات قهوه‌ساز",
        type: "پروژه‌ی سخت‌افزاری / رباتیک",
        url: "",
        image: "/projects/coffee.png"
    },
    {
        title: "سامانه مودیان الیاتی",
        type: "نرم‌افزار حسابداری (ویندوز)",
        url: "https://github.com/arna051/side/releases/download/v1.1.7/Side-Setup-1.1.7.exe",
        image: "/projects/tax.png"
    },
    {
        title: "پالس لاواژ",
        type: "دستگاه مخصوص اتاق عمل",
        url: "",
        image: "/projects/pulse.png"
    },
    {
        title: "ربات ترید کریپتو",
        type: "ربات ترید در فیچرز با وین ریت 76.5٪",
        url: "",
        image: "/projects/bot.png"
    },
    {
        title: "امگاطب",
        type: "فروشگاه اینترنتی تجهیزات پزشکی",
        url: "https://omegateb.com/home/",
        image: "/projects/omegateb.webp"
    },
    {
        title: "قبل دوم",
        type: "فروشگاه اینترنتی کفش",
        url: "https://ghlbedovom.com/home/",
        image: "/projects/shoe.jpg"
    },
    {
        title: "جوانان احمد الحسن",
        type: "آکادمی و سامانه‌ی داده‌محور",
        url: "https://ahmedalhasan.com",
        image: "/projects/youth.jpg"
    },
    {
        title: "طب احمدی",
        type: "فروشگاه اینترنتی تجهیزات پزشکی",
        url: "https://ahmdi.ir/",
        image: "/projects/teb.png"
    },
    {
        title: "اتوماسیون خانه",
        type: "اتوماسیون خانه/ دفتر/ اداره با بکار گیری سیستم های نهفته و اینترنت اشیاء",
        url: "",
        image: "/projects/auto.png"
    },
];


export function HomeProjects() {
    const MotionCard = useMemo(() => motion(Card), []);

    return (
        <Section sx={{ position: 'relative' }}>
            <Box component="div" id="projects" />
            <Box
                component="img"
                src="/hippo-white.png"
                alt="بنر هیپوگریف"
                sx={{
                    position: "absolute",
                    inset: 0,
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    opacity: 0.25,
                }}
            />
            <Stack justifyContent="center" alignItems="center" sx={{ height: '100%', maxWidth: '99vw', overflow: 'hidden' }}>

                <Stack direction={{ xs: 'column', md: 'row' }} gap={2} sx={{ mb: { xs: 0, md: 6 }, p: 4 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} viewBox="0 0 32 32"><path fill="#1e88e5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path><path fill="#bbdefb" d="M27.354 20.871L32 25.343l-2.74 2.624l-4.613-4.471v-.737l1.947-1.888zm.751-2.023l-.8-.768l-3.953 3.839v1.577L18.706 28L16 25.343l4.612-4.472h1.626l.644-.624l-3.17-3.08h-1.071l-2.32-2.271l2.162-2.096l2.311 2.24v1.048l3.21 3.072l2.194-2.128l-.791-.808l1.072-1.049h-2.196l-.536-.52L26.48 12l.545.527v2.129l1.081-1.057l2.707 2.625a2.22 2.22 0 0 1 0 3.184l-1.627-1.609Z"></path></svg>
                    <Stack gap={2}>
                        {/* Background image */}

                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            mb={2}
                        >
                            پروژه‌های ما
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            maxWidth="md"
                            mx="auto"
                        >
                            برخی از پروژه‌های نرم‌افزاری و سخت‌افزاری که با افتخار توسعه داده‌ایم — از فروشگاه‌های اینترنتی گرفته تا سامانه‌های حسابداری و دستگاه‌های هوشمند.
                        </Typography>
                    </Stack>
                </Stack>



                <Box>
                    <Swap>
                        {projects.map((cap, index) => (
                            <MotionCard
                                key={index}
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 30 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                sx={{
                                    minWidth: 250,
                                    height: 250,
                                    p: 2,
                                    boxShadow: 3,
                                    position: 'relative',
                                    zIndex: -1
                                }}
                            >
                                <Box
                                    component="img"
                                    src={cap.image}
                                    alt={cap.title}
                                    sx={{
                                        position: "absolute",
                                        inset: 0,
                                        objectFit: "cover",
                                        width: "100%",
                                        height: "100%",
                                        opacity: 0.35,
                                        zIndex: -1
                                    }}
                                />
                                <CardContent sx={{ zIndex: 1 }}>
                                    <Stack gap={.5}>
                                        <Typography variant="h6" fontWeight="bold">
                                            {cap.title}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary">
                                            {cap.type}
                                        </Typography>
                                    </Stack>
                                </CardContent>
                                <CardActions
                                    sx={{
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        m: 'auto',
                                        py: 2,
                                        zIndex: 20
                                    }}
                                >
                                    {
                                        cap.url && <Button
                                            variant="outlined"
                                            color="primary"
                                            LinkComponent={Link}
                                            href={cap.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            بازدید
                                        </Button>
                                    }
                                </CardActions>
                            </MotionCard>
                        ))}
                    </Swap>
                </Box>
            </Stack>
        </Section>
    );
}
