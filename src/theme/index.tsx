"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";


export function HippoThemeProvider({ children }: { children: ReactNode }) {
    return <ThemeProvider theme={theme} defaultMode="dark">
        {children}
    </ThemeProvider>
}