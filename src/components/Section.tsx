// components/Section.tsx
'use client'

import { Box, SxProps } from "@mui/material";
import { motion } from "framer-motion";

type Props = {
    children: React.ReactNode;
    sx?: SxProps;
};

export const Section = ({ children, sx = { bgcolor: 'background.default' } }: Props) => (
    <Box
        component={motion.section}
        sx={{ ...sx }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="h-screen flex items-center justify-center snap-start"
    >
        {children}
    </Box>
);
