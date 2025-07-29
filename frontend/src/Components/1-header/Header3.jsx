import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {
  SportsEsportsOutlined,
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  Close,
} from "@mui/icons-material";
import useMediaQuery from '@mui/material/useMediaQuery';
import Links from "./Links";
import { useTheme } from '@mui/material';

export default function Header3() {
  const [state, setState] = useState({ right: false });
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(1);

  const isDesktop = useMediaQuery('(min-width:1110px)');
  const isMobile = useMediaQuery('(max-width:1100px)');

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setState({ ...state, [anchor]: open });
  };

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleListItemClick = (event, index) => setSelectedIndex(index);

  const menuItems = [
    { icon: <ElectricBikeOutlined fontSize="small" />, text: 'Bikes' },
    { icon: <LaptopChromebookOutlined fontSize="small" />, text: 'Electronics' },
    { icon: <MenuBookOutlined fontSize="small" />, text: 'Books' },
    { icon: <SportsEsportsOutlined fontSize="small" />, text: 'Games' },
  ];

  const navLinks = [
    { mainLink: "Home", subLink: ["Link 1", "Link 2", "Link 3"] },
    { mainLink: "Mega menu", subLink: ["Link 1", "Link 2", "Link 3"] },
    { mainLink: "Full screen Menu", subLink: ["Link 1", "Link 2", "Link 3"] },
    { mainLink: "Pages", subLink: ["Link 1", "Link 2", "Link 3"] },
    { mainLink: "User account", subLink: ["Link 1", "Link 2", "Link 3"] },
    { mainLink: "Vender account", subLink: ["Link 1", "Link 2", "Link 3"] }
  ];

  return (
    <Container
      sx={{
        maxWidth: { xl: "1490px", lg: "1400px" },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 5,
      }}
    >
      {/* Categories Menu Button */}
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 270,
            // @ts-ignore
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.secondary,
          }}
        >
          <WindowIcon sx={{ color: "#D23f57", fontSize: "19px" }} />
          <Typography sx={{ ml: 1, fontSize: "14px", textTransform: "capitalize" }}>
            Categories
          </Typography>
          <Typography sx={{ flexGrow: 1 }} />
          <KeyboardArrowRightOutlinedIcon sx={{ fontSize: "19px" }} />
        </Button>

        {/* Categories Dropdown Menu */}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{
            mt: "5px",
            // @ts-ignore
            ".MuiPaper-root": { width: 270, bgcolor: theme.palette.myColor.main },
          }}
          slotProps={{ list: { "aria-labelledby": "basic-button" } }}
        >
          {menuItems.map((item, index) => (
            <MenuItem key={index} onClick={handleClose}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      {/* Links for Large Screens */}
      {isDesktop && (
        <Stack direction="row" alignItems="center" gap={3}>
          <Links title="Home" />
          <Links title="Mega Menu" />
          <Links title="Full Screen Menu" />
          <Links title="Pages" />
          <Links title="User Account" />
          <Links title="Vendor Account" />
        </Stack>
      )}

      {/* Drawer Icon for Mobile */}
      {isMobile && (
        <IconButton onClick={toggleDrawer("right", true)}>
          <MenuIcon />
        </IconButton>
      )}

      {/* Drawer Content */}
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        sx={{ ".MuiPaper-root": { width: { xs: "100%", sm: "444px" } } }}
      >
        <Box role="presentation" sx={{ mx: "auto", mt: 6, pt: 10, position: "relative" }}>
          <IconButton
            onClick={toggleDrawer("right", false)}
            sx={{
              position: "absolute",
              top: 0,
              right: 10,
              transition: "0.3s",
              "&:hover": { rotate: "180deg", color: "red" }
            }}
          >
            <Close />
          </IconButton>

          {navLinks.map((navItem, idx) => (
            <Accordion key={idx} elevation={0} sx={{ bgcolor: "initial" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography component="span">{navItem.mainLink}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List component="nav" sx={{ py: 0, my: 0 }}>
                  {navItem.subLink.map((subLink, subIdx) => (
                    <ListItemButton
                      key={subIdx}
                      selected={selectedIndex === subIdx}
                      onClick={(event) => handleListItemClick(event, subIdx)}
                    >
                      <ListItemText primary={subLink} />
                    </ListItemButton>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Drawer>
    </Container>
  );
}
