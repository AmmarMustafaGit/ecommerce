import { Box, Button, Typography, useTheme } from "@mui/material";
import { Suspense } from "react";

import ScrollingText from "./ScrollingText";

export default function SlantedPromoBanner() {
    const theme = useTheme()
    return (
        <Box
            component="section"
            sx={{
                mt: 6,
                mx: 2,
                backgroundColor: "#1c2431",
                borderRadius: 2,
                overflow: "hidden",
                height: { xs: 110, sm: 100 },
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 0,
                position: "relative",
                flexWrap: "wrap",
            }}
        >
            {/* Left Slanted Label */}
            <Box
                sx={{
                    width: { xs: "280px", sm: "320px" },
                    height: "110%",
                    clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                    bgcolor:
                        
                        // @ts-ignore
                        theme.palette.bg.main
                    ,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: "-20px",
                    mt: "-2px"
                }}
            >
                <Typography
                    variant="subtitle1"
                    sx={{
                        backgroundColor: "transparent",
                        fontWeight: 800,
                        color: theme.palette.mode === 'dark'
                            ? '#fff'
                            : '"#1c2431"',

                        fontSize: { xs: 16, sm: 20 },
                        whiteSpace: "nowrap",
                    }}
                >
                    BLACK FRIDAY SALE!
                </Typography>
            </Box>

            {/* Scrolling Text */}
            <Box
                sx={{
                    flex: 1,
                    height: "100%",
                    overflow: "hidden",
                    transform: "skewX(-12deg)",
                    display: "flex",
                    alignItems: "center",
                    px: 1,
                    minWidth: 0,
                }}
            >
                <Suspense
                    fallback={
                        <Typography
                            sx={{
                                color: "#fff",
                                fontWeight: 400,
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            Loading offers...
                        </Typography>
                    }
                >
                    <ScrollingText />
                </Suspense>
            </Box>

            {/* Call-to-action Button */}
            <Box sx={{ pr: 3, pl: 2 }}>
                <Button
                    variant="contained"
                    aria-label="Shop Black Friday Deals"
                    sx={{
                        backgroundColor: "#fff",
                        color: "#1c2431",
                        fontWeight: 600,
                        borderRadius: 2,
                        textTransform: "none",
                        px: 3,
                        py: 1,
                        fontSize: "0.9rem",
                        '&:hover': {
                            backgroundColor: "#D23F57",
                            color: "#fff"
                        },
                    }}
                >
                    Shop Now
                </Button>
            </Box>
        </Box>
    );
}
