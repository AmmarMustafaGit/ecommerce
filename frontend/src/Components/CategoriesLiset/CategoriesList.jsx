import React, { memo, useMemo } from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";

const CategoriesList = () => {
    const theme = useTheme();

    const categories = useMemo(() => [
        { label: "Toys", image: "/toys.jpg" },
        { label: "Sports", image: "/Sports.jpg" },
        { label: "Gaming", image: "/Gaming.jpg" },
        { label: "Furniture", image: "/Furniture.jpg" },
        { label: "Fashion", image: "/Fashion.jpg" },
        { label: "Cameras", image: "/Cameras.jpg" },
    ], []);

    return (
        <Container
            sx={{
                maxWidth: {
                    xl: "1490px",
                    lg: "1400px",
                },
            }}
        >
            <Box
                sx={{
                    bgcolor: theme.palette.mode === "dark" ? "#121212" : "#f9f9f9",
                    px: 2,
                    py: 4,
                }}
            >
                <Typography variant="h6" mb={3} textAlign="center">
                    Shop by Category
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: 2.5,
                    }}
                >
                    {categories.map((cat) => (
                        <Box
                            key={cat.label}
                            role="button"
                            aria-label={`Shop ${cat.label}`}
                            tabIndex={0}
                            sx={{
                                width: { xs: "42%", sm: "30%", md: "15%" },
                                height: 220,
                                borderRadius: 2,
                                overflow: "hidden",
                                position: "relative",
                                boxShadow: 3,
                                cursor: "pointer",
                                transition: "transform 0.3s ease",
                                willChange: "transform",
                                "&:hover img": {
                                    transform: "scale(1.05)",
                                },
                                "&:focus-visible": {
                                    outline: `2px solid ${theme.palette.primary.main}`,
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={cat.image}
                                alt={`${cat.label} category`}
                                loading="lazy"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transition: "transform 0.4s ease",
                                    display: "block",
                                    willChange: "transform",
                                }}
                            />

                            <Box
                                sx={{
                                    position: "absolute",
                                    bottom: 16,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    backgroundColor:
                                        theme.palette.mode === "dark" ? "#f5f5f5" : "#fff",
                                    color: theme.palette.mode === "dark" ? "#222" : "#333",
                                    px: { xs: 2, sm: 2.5 },
                                    py: { xs: 1.2, sm: 1.5 },
                                    fontWeight: 600,
                                    fontSize: { xs: 13, sm: 14, md: 15 },
                                    borderRadius: "999px",
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                                    textAlign: "center",
                                    width: { xs: "75%", sm: "80%", md: "85%" },
                                    maxWidth: 160, "&:hover": {
                                        backgroundColor: "#2B3445",
                                        color: "#fff",
                                    },
                                }}
                            >
                                {cat.label}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default memo(CategoriesList);
