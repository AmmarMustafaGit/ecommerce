import { useContext, useState, useCallback, useMemo } from "react";
import { ColorModeContext } from "../../theme";
import {
    Box,
    Container,
    IconButton,
    Stack,
    Typography,
    useTheme,
    List,
    ListItemButton,
    ListItemText,
    MenuItem,
    Menu,
    InputBase,
    Fade,
} from "@mui/material";
import {
    DarkModeOutlined,
    ExpandMore,
    LightModeOutlined,
    SearchOutlined as SearchOutlinedIcon,
} from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const LANG_OPTIONS = ["AR", "EN", "FR", "DE"];

export default function Header1() {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [showSearch, setShowSearch] = useState(false);
    const open = Boolean(anchorEl);

    const handleClickListItem = useCallback((event) => setAnchorEl(event.currentTarget), []);
    const handleMenuItemClick = useCallback((_, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    }, []);
    const handleClose = useCallback(() => setAnchorEl(null), []);

    const toggleColorMode = useCallback(() => {
        const newMode = theme.palette.mode === "dark" ? "light" : "dark";
        localStorage.setItem("mode", newMode);
        colorMode.toggleColorMode();
    }, [colorMode, theme.palette.mode]);

    const socialLinks = useMemo(() => [
        { href: "https://twitter.com/", icon: <TwitterIcon sx={{ fontSize: 20 }} /> },
        { href: "https://facebook.com/", icon: <FacebookIcon sx={{ fontSize: 20 }} /> },
        { href: "https://instagram.com/", icon: <InstagramIcon sx={{ fontSize: 20 }} /> },
    ], []);

    return (
        <Box sx={{ bgcolor: "#2B3445", py: 0.2 }}>
            <Container sx={{ maxWidth: { xl: "1540px", lg: "1450px" } }}>
                <Stack direction="row" alignItems="center" flexWrap="wrap">
                    <Typography
                        variant="body2"
                        sx={{
                            mr: 2,
                            p: "3px 10px",
                            bgcolor: "#D23f57",
                            borderRadius: 2,
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#fff",
                        }}
                    >
                        HOT
                    </Typography>

                    <Typography variant="body2" sx={{ fontSize: 14, fontWeight: 300, color: "#fff" }}>
                        Free Express Shipping
                    </Typography>

                    <Box flexGrow={1} />

                    <IconButton onClick={() => setShowSearch(true)}>
                        <SearchOutlinedIcon
                            sx={{
                                fontSize: 20,
                                color: "#fff",
                                cursor: "pointer",
                                display: { xs: "block", sm: "none" },
                            }}
                        />
                    </IconButton>

                    <Fade in={showSearch}>
                        <Box
                            onClick={() => setShowSearch(false)}
                            sx={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                                backdropFilter: "blur(5px)",
                                backgroundColor: "rgba(0,0,0,0.4)",
                                zIndex: 999,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                onClick={(e) => e.stopPropagation()}
                                sx={{
                                    bgcolor: "#fff",
                                    px: 2,
                                    py: 1,
                                    borderRadius: 2,
                                    width: "80%",
                                    maxWidth: 400,
                                }}
                            >
                                <InputBase autoFocus placeholder="Search..." sx={{ width: "100%", color: "black" }} />
                            </Box>
                        </Box>
                    </Fade>

                    <IconButton onClick={toggleColorMode} sx={{
                        color: theme.palette.mode === "dark" ? "#fff" : "#fbc02d",
                        backgroundColor: theme.palette.mode === "dark"
                            ? "rgba(255,255,255,0.06)"
                            : "rgba(255,223,70,0.15)",
                        backdropFilter: "blur(4px)",
                        borderRadius: "50%",
                        transition: "0.4s ease",
                        p: 0.8,
                        "&:hover": {
                            transform: "scale(1.15) rotate(10deg)",
                            boxShadow: theme.palette.mode === "dark"
                                ? "0 0 12px rgba(255,255,255,0.3)"
                                : "0 0 12px rgba(255,223,70,0.5)",
                            backgroundColor: theme.palette.mode === "dark"
                                ? "rgba(255,255,255,0.1)"
                                : "rgba(255,223,70,0.25)",
                            color: theme.palette.mode === "light" ? "#fbc02d" : "#fff",
                        },
                    }}>
                        {theme.palette.mode === "light" ? <LightModeOutlined sx={{ fontSize: 20 }} /> : <DarkModeOutlined sx={{ fontSize: 20 }} />}
                    </IconButton>

                    <List component="nav" aria-label="Language Selector" sx={{ p: 0, m: 0, ml: 1 }}>
                        <ListItemButton
                            id="lock-button"
                            aria-haspopup="listbox"
                            aria-controls="lock-menu"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClickListItem}
                            sx={{ "&:hover": { backgroundColor: "transparent" }, px: 1 }}
                        >
                            <ListItemText
                                sx={{ ".MuiTypography-root": { fontSize: 13, fontWeight: "bold", color: "#fff" } }}
                                secondary={LANG_OPTIONS[selectedIndex]}
                            />
                            <ExpandMore sx={{ fontSize: 16, color: "#fff" }} />
                        </ListItemButton>
                    </List>

                    <Menu
                        id="lock-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        slotProps={{ list: { "aria-labelledby": "lock-button", role: "listbox" } }}
                    >
                        {LANG_OPTIONS.map((option, index) => (
                            <MenuItem
                                key={option}
                                selected={index === selectedIndex}
                                onClick={(e) => handleMenuItemClick(e, index)}
                                sx={{ fontSize: 13, p: "3px 14px", minHeight: 13 }}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>

                    <Stack direction="row" spacing={1} ml={1}>
                        {socialLinks.map(({ href, icon }) => (
                            <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                <IconButton
                                    sx={{
                                        color: "#fff",
                                        transition: "0.3s",
                                        p: 0.5,
                                        "&:hover": { transform: "scale(1.2)" },
                                    }}
                                >
                                    {icon}
                                </IconButton>
                            </a>
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}
