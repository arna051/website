"use client";

import { Section } from "@/components/Section";
import Swap from "@/components/Swap";
import { Typography, Card, CardContent, Stack, Button, Box, Avatar } from "@mui/material";
import { motion } from "framer-motion";

const contacts = [
    {
        name: "مهندس نظرنژاد",
        phone: "0903-871-9255",
        telLink: "tel+989038719255",
        image: "/avatars/hussain.jpg",
        type: "نرم افزار"
    },
    {
        name: "مهندس رجائیان",
        phone: "0915-769-4535",
        telLink: "tel:+989157694535",
        image: "/avatars/mohsen.jpg",
        type: "سخت افزار"
    }
];

const sx = {
    width: 75,
}

export function ContactUs() {
    return (
        <Section sx={{ py: { xs: 6, md: 12 }, position: 'relative', overflow: 'hidden' }}>
            {/* Background image */}
            <Box
                component="img"
                src="/hippo-storm.png"
                alt="بنر هیپوگریف"
                sx={{
                    position: "absolute",
                    inset: 0,
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    opacity: 0.2,
                    transform: "scale(1.05)",
                }}
            />
            <Box component="div" id="contact-us" />
            <Stack justifyContent="center" alignItems="center" sx={{ height: '100%', maxWidth: '99vw', overflow: 'hidden' }}>

                <Stack direction={{ xs: 'column', md: 'row' }} gap={2} sx={{ mb: { xs: 0, md: 6 }, p: 4 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="currentColor"><path d="M12 22c-4.007 0-6.01 0-7.255-1.318S3.5 17.242 3.5 13s0-6.364 1.245-7.682S7.993 4 12 4s6.01 0 7.255 1.318S20.5 8.758 20.5 13s0 6.364-1.245 7.682S16.007 22 12 22M8 4V2m8 2V2"></path><path d="M14.018 9.493a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-5.955 7.223c1.058-1.63 2.739-2.24 3.955-2.239s2.848.61 3.906 2.24c.068.105.087.234.025.344c-.247.439-1.016 1.31-1.57 1.369c-.638.067-2.307.077-2.36.077s-1.772-.01-2.41-.077c-.556-.06-1.324-.93-1.572-1.37c-.061-.109-.042-.238.026-.344"></path></g></svg>
                    <Stack gap={2}>
                        <Typography variant="h4" fontWeight="bold">
                            تماس با ما
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            maxWidth="sm"
                            mx="auto"
                        >
                            ما همیشه آماده‌ی پاسخ‌گویی، مشاوره و همکاری هستیم. برای ارتباط مستقیم با ما، از شماره‌های زیر استفاده کنید.
                        </Typography>
                    </Stack>
                </Stack>



                <Box>
                    <Swap>

                        {contacts.map((contact, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                            >
                                <Card sx={theme => ({
                                    border: `3.5px solid ${theme.palette.primary.main}`,
                                    minWidth: 350
                                })}>
                                    <Stack direction="row" alignItems="stretch">
                                        <Avatar
                                            src={contact.image}
                                            alt={contact.name}
                                            sx={theme => ({
                                                ...sx,
                                                border: "none",
                                                borderLeft: `2px solid ${theme.palette.primary.main}`,
                                                height: 78,
                                            })}
                                            variant="square"
                                        />
                                        <CardContent sx={{ flex: '1 1 auto', m: 0 }}>
                                            <Typography variant="body1" fontWeight="bold">{contact.name}</Typography>
                                            <Typography variant="caption" sx={{ color: "#FFFFFF !important" }}>{contact.phone}</Typography>
                                        </CardContent>
                                        <Button
                                            LinkComponent="a"
                                            href={contact.telLink}
                                            variant="contained"
                                            sx={{ ...sx, borderRadius: 0 }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.778 11.942C2.83 10.29 2.372 8.94 2.096 7.572c-.408-2.024.526-4.001 2.073-5.263c.654-.533 1.404-.35 1.791.343l.873 1.567c.692 1.242 1.038 1.862.97 2.52c-.069.659-.536 1.195-1.469 2.267zm0 0c1.919 3.346 4.93 6.36 8.28 8.28m0 0c1.653.948 3.002 1.406 4.37 1.682c2.024.408 4.001-.526 5.262-2.073c.534-.654.351-1.404-.342-1.791l-1.567-.873c-1.242-.692-1.862-1.038-2.52-.97c-.659.069-1.195.536-2.267 1.469zm7.715-15.995L13 11m6.773-6.773c-.505-.505-2.888-.01-3.608 0m3.608 0c.505.505.01 2.888 0 3.608" color="currentColor"></path></svg>
                                        </Button>
                                    </Stack>
                                </Card>
                            </motion.div>
                        ))}
                    </Swap>
                </Box>
            </Stack>
        </Section>
    );
}
