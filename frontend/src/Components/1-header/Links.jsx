import { KeyboardArrowRightOutlined } from '@mui/icons-material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
    Paper,
    useTheme,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';

export default function Links({ title }) {
    const theme = useTheme();

    const listItemStyles = {
        display: "flex",
        px: 1.5,
        py: 0.7,
        "& .MuiTypography-root": {
            fontSize: "14px",
            fontWeight: 300,
            color: theme.palette.text.primary
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                zIndex: 555,
                color: theme.palette.text.primary,
                cursor: "pointer",
                "&:hover .dropdown-menu": {
                    display: "block"
                }
            }}
        >
            <Typography
                variant="body1"
                sx={{ fontSize: 14, fontWeight: 500, color: theme.palette.text.primary }}
            >
                {title}
            </Typography>
            <ExpandMore sx={{ fontSize: 16, ml: 1 }} />

            {/* Main Dropdown */}
            <Box
                className="dropdown-menu"
                role="menu"
                aria-haspopup="true"
                sx={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    minWidth: 170,
                    display: "none"
                }}
            >
                <Paper sx={{ mt: 3 }}>
                    <List disablePadding>
                        {/* Dashboard */}
                        <ListItem disablePadding>
                            <ListItemButton sx={listItemStyles}>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>

                        {/* Products with Submenu */}
                        <ListItem
                            disablePadding
                            sx={{
                                position: "relative",
                                "&:hover .sub-link": {
                                    display: "block"
                                }
                            }}
                        >
                            <ListItemButton sx={listItemStyles}>
                                <ListItemText primary="Products" />
                                <Box flexGrow={1} />
                                <KeyboardArrowRightOutlined fontSize="small" />
                            </ListItemButton>

                            {/* Submenu */}
                            <Box
                                className="sub-link"
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: "100%",
                                    ml: 1,
                                    display: "none",
                                    minWidth: 150
                                }}
                            >
                                <Paper>
                                    <List disablePadding>
                                        <ListItem disablePadding>
                                            <ListItemButton sx={{ ...listItemStyles, py: 0.75 }}>
                                                <ListItemText primary="Add Product" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton sx={{ ...listItemStyles, py: 0.5 }}>
                                                <ListItemText primary="Edit Product" />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </Paper>
                            </Box>
                        </ListItem>

                        {/* Orders */}
                        <ListItem disablePadding>
                            <ListItemButton sx={listItemStyles}>
                                <ListItemText primary="Orders" />
                            </ListItemButton>
                        </ListItem>

                        {/* Profile */}
                        <ListItem disablePadding>
                            <ListItemButton sx={listItemStyles}>
                                <ListItemText primary="Profile" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Paper>
            </Box>
        </Box>
    );
}
