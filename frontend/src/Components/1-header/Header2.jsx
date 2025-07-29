import {
  Container, IconButton, ListItem, Stack, Typography,
  InputBase, List, ListItemText, MenuItem, Menu, Badge
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import {
  ExpandMore, ShoppingCartOutlined, ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon
} from '@mui/icons-material';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { useState, useCallback } from 'react';

const LANG_OPTIONS = ['All Categories', 'CAR', 'Clothes', 'Electronics'];

const Search = styled('div')(({ theme }) => ({
  flexGrow: 0.4,
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  transition: '0.2s',
  '&:hover': { borderColor: "#2B3445" },
  '&:focus-within': { borderColor: "#BE334AFF" },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: '300px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '330px',
  },
  [theme.breakpoints.down('sm')]: {
    display: "none",
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: { width: '20ch' },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Header2() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);

  const handleClickListItem = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleMenuItemClick = useCallback((_, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <Container
      sx={{
        my: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: { xl: "1490px", lg: "1400px" },
      }}
    >
      {/* Brand */}
      <Stack alignItems="center">
        <ShoppingCartOutlined />
        <Typography variant="body2">E-commerce</Typography>
      </Stack>

      {/* Search Bar */}
      <Search sx={{ borderRadius: "10px", display: "flex", alignItems: "center" }}>
        <SearchIconWrapper>
          <SearchIcon
            sx={{
              borderRight: "1px solid rgb(125, 135, 156)",
              paddingRight: "5px",
              fontSize: "28px",
              color: "rgb(125, 135, 156)",
            }}
          />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        <List
          component="nav"
          aria-label="Category selector"
          sx={{
            borderBottomRightRadius: "10px",
            borderTopRightRadius: "10px",
            p: 0,
            borderLeft: "1px solid rgb(125, 135, 156)",
            // @ts-ignore
            bgcolor: theme.palette.myColor?.main ?? '#f5f5f5',
          }}
        >
          <ListItem
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickListItem}
            sx={{
              width: { xs: "auto", sm: "140px" },
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Stack direction="row" alignItems="center" gap="2px">
              <ListItemText secondary={LANG_OPTIONS[selectedIndex]} />
              <ExpandMore sx={{ fontSize: "16px" }} />
            </Stack>
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{ mt: 1 }}
          slotProps={{
            list: {
              'aria-labelledby': 'lock-button',
              role: 'listbox',
            },
          }}
        >
          {LANG_OPTIONS.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(e) => handleMenuItemClick(e, index)}
              sx={{ fontSize: "13px" }}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Search>

      {/* Icons */}
      <Stack direction="row" alignItems="center">
        <IconButton aria-label="cart">
          <StyledBadge
            badgeContent={4}
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: '#D23f57',
                color: '#fff',
              },
            }}
          >
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>

        <IconButton sx={{ ml: 2 }} aria-label="profile">
          <Person2OutlinedIcon />
        </IconButton>
      </Stack>
    </Container>
  );
}
