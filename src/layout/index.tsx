
import { Box } from "@mui/material";
import { ReactNode } from "react";


export function Layout({ children }: { children: ReactNode }) {
    return <Box
        sx={{
            bgcolor: 'background.default',
            minHeight: '100vh'
        }}>
        {children}
    </Box>
}