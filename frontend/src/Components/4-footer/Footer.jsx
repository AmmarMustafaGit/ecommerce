import { Box, Typography, Stack, IconButton, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "rgb(34, 41, 53)",
                color: "white",
                py: 2,
                px: 2,
                boxShadow: "0 -2px 10px rgba(0,0,0,0.2)",
            }}
        >
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
                textAlign="center"
            >
                <Typography variant="body1" sx={{ fontSize: 16, fontWeight: 500 }}>
                    Designed & Developed by{" "}
                    <Button
                        component="a"
                        href="mailto:ammar@example.com"
                        sx={{
                            fontSize: 16,
                            color: "#ff7790",
                            textTransform: "capitalize",
                            p: 0,
                            minWidth: 0,
                        }}
                        variant="text"
                    >
                        Eng. Ammar Mustafa
                    </Button>{" "}
                    © {currentYear}
                </Typography>

                <Stack direction="row" spacing={1}>
                    <IconButton
                        aria-label="GitHub"
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: "white",
                            transition: "transform 0.3s ease",
                            "&:hover": { transform: "scale(1.1)" },
                        }}
                    >
                        <GitHubIcon fontSize="small" />
                    </IconButton>

                    <IconButton
                        aria-label="LinkedIn"
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: "white",
                            transition: "transform 0.3s ease",
                            "&:hover": { transform: "scale(1.1)" },
                        }}
                    >
                        <LinkedInIcon fontSize="small" />
                    </IconButton>

                    <IconButton
                        aria-label="Email"
                        href="mailto:ammar@example.com"
                        sx={{
                            color: "white",
                            transition: "transform 0.3s ease",
                            "&:hover": { transform: "scale(1.1)" },
                        }}
                    >
                        <EmailIcon fontSize="small" />
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Footer;
