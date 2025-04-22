"use client";

import { Section } from "@/components/Section";
import Swap from "@/components/Swap";
import { Typography, Card, CardContent, Stack, Button, Box, Avatar, Chip } from "@mui/material";
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

export function ContactUs() {
    return (
        <Section sx={{ py: { xs: 6, md: 12 } }}>

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
                    <Swap >

                        {contacts.map((contact, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                            >
                                <Card sx={{ minWidth: 250, height: 300, position: 'relative', overflow: 'visible', mt: 8 }}>
                                    <Avatar
                                        src={contact.image}
                                        alt={contact.name}
                                        sx={{
                                            width: 150,
                                            height: 150,
                                            position: 'absolute',
                                            left: 0,
                                            right: 0,
                                            top: 0,
                                            transform: 'translateY(-40%)',
                                            mx: 'auto'
                                        }}
                                    />
                                    <CardContent sx={{ pt: 14 }}>
                                        <Stack spacing={1} alignItems="center" textAlign="center">

                                            <Typography variant="subtitle1" fontWeight="bold">
                                                {contact.name}
                                            </Typography>
                                            <Chip label={contact.type} color="warning" size="small" />
                                            <Typography variant="h6" component="span" color="success.main" sx={{
                                                display: 'block',
                                                py: 2
                                            }}>
                                                {contact.phone}
                                            </Typography>
                                            <Button
                                                href={contact.telLink}
                                                variant="outlined"
                                                size="small"
                                                sx={{ mt: 1, borderRadius: 2 }}
                                            >
                                                تماس بگیرید
                                            </Button>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </Swap>
                </Box>
            </Stack>
        </Section>
    );
}
