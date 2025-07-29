import {
    Box,
    Container,
    Divider,
    ListItemIcon,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";

import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";

export default function IconSection() {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

    const myIcons = [
        {
            icon: <ElectricBoltIcon fontSize="large" />,
            title: "Fast Delivery",
            subTitle: "Start from $10",
        },
        {
            icon: <WorkspacePremiumOutlinedIcon fontSize="large" />,
            title: "Money Guarantee",
            subTitle: "7 Days Back",
        },
        {
            icon: <AccessAlarmOutlinedIcon fontSize="large" />,
            title: "365 Days",
            subTitle: "For free return",
        },
        {
            icon: <CreditScoreOutlinedIcon fontSize="large" />,
            title: "Payment",
            subTitle: "Secure system",
        },
    ];

    return (
        <Container
            sx={{
                maxWidth: { xl: "1540px", lg: "1450px" },
                backgroundColor:
                    theme.palette.mode === "dark" ? "#000" : "#fff",
                color:
                    theme.palette.mode === "dark"
                        ? "#fff"
                        : "#2C333A",
                mt: 3,
                py: isMediumScreen ? 3 : 2,
            }}
        >
            <Stack
                direction="row"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="space-between"
                divider={isLargeScreen ? <Divider orientation="vertical" flexItem /> : null}
            >
                {myIcons.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            flex: "1 1 250px",
                            minWidth: "220px",
                            gap: 1.5,
                            py: 2,
                            justifyContent: isMediumScreen ? "center" : "flex-start",
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: "auto",
                                color:
                                    theme.palette.mode === "dark"
                                        ? "#fff"
                                        : "#2C333AFF",
                            }}
                            aria-label={item.title}
                        >
                            {item.icon}
                        </ListItemIcon>
                        <Box>
                            <Typography
                                variant="body1"
                                sx={{ fontWeight: 600 }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ fontWeight: 300 }}
                            >
                                {item.subTitle}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Stack>
        </Container>
    );
}
