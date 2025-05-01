"use client"

import { Box, Stack } from "@mui/material"
import {
    animate,
    motion,
    MotionValue,
    useMotionValue,
    useMotionValueEvent,
    useScroll,
} from "framer-motion"
import { ReactNode, useRef } from "react"

export default function Swap({ children, height = 300 }: { children: ReactNode, height?: number }) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollXProgress } = useScroll({ container: ref })
    const maskImage = useScrollOverflowMask(scrollXProgress)

    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const onMouseDown = (e: any) => {
        if (!ref.current) return;
        isDown.current = true;
        startX.current = e.pageX - ref.current.offsetLeft;
        scrollLeft.current = ref.current.scrollLeft;
        ref.current.style.cursor = "grabbing";
    };

    const onMouseLeave = () => {
        if (!ref.current) return;
        isDown.current = false;
        ref.current.style.cursor = "grab";
    };

    const onMouseUp = () => {
        if (!ref.current) return;
        isDown.current = false;
        ref.current.style.cursor = "grab";
    };

    const onMouseMove = (e: any) => {
        if (!ref.current) return;
        if (!isDown.current) return;
        e.preventDefault();
        const x = e.pageX - ref.current.offsetLeft;
        const walk = (x - startX.current) * 1.5;
        ref.current.scrollLeft = scrollLeft.current - walk;
    };
    return (
        <Stack
            direction="row"
            gap={2}
            component={motion.div}
            ref={ref}
            style={{ maskImage } as any}
            sx={{
                height,
                maxWidth: '100vw',
                overflowX: 'auto',
                scrollSnapType: 'x',
                scrollBehavior: 'smooth',
                whiteSpace: 'nowrap',
                py: 2,
                cursor: "grab",
                userSelect: "none",
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none",
                px: 8,
                '& > *': {
                    scrollSnapAlign: 'start',
                    whiteSpace: 'normal'
                }
            }}
            className="nodrag"
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
        >
            <Box sx={{ minWidth: { xs: 100, md: 200, lg: 300 }, height: 100 }} />
            {children}
            <Box sx={{ minWidth: 100, height: 100 }} />
        </Stack>
    )
}

const left = `0%`
const right = `100%`
const leftInset = `20%`
const rightInset = `80%`
const transparent = `#0000`
const opaque = `#000`
function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
    const maskImage = useMotionValue(
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
    )

    useMotionValueEvent(scrollXProgress, "change", (value) => {
        if (value === 0) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
            )
        } else if (value === 1) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
            )
        } else if (
            scrollXProgress.getPrevious() === 0 ||
            scrollXProgress.getPrevious() === 1
        ) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
            )
        }
    })

    return maskImage
}
