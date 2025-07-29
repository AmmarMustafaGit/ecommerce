import {
    Box,
    Container,
    Rating,
    Stack,
    Typography,
    useTheme,
    ToggleButton,
    ToggleButtonGroup,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Dialog,
    IconButton,
    Tooltip,
} from '@mui/material';

import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useState } from 'react';
import { Close } from '@mui/icons-material';
import ProductDetails from './ProductDetails';
import { useGetproductByNameQuery } from '../../Redux/product';

const Main = () => {
    const theme = useTheme();
    const toggleBtnStyle = {
        color: theme.palette.text.primary,
        textTransform: 'capitalize !important',
    };

    const handleAlignment = (event, newValue) => {
        if (newValue !== null) 
        setMyData(newValue)
    };

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);




    const allProductsAPI = "products?populate=*"
    const menCategoryAPI = "products?populate=*&filters[productCategory][$eq]=men"
    const womenCategoryAPI = "products?populate=*&filters[productCategory][$eq]=women"

    const [myData, setMyData] = useState(allProductsAPI)
    // @ts-ignore
    const { data, error, isLoading } = useGetproductByNameQuery(myData)

    console.log(data)
    if(data){
        console.log(data.data)
    }
    if(isLoading){
        return(
            <Typography variant='h6'> Loading... </Typography>
        )
    }
    if(error){
        return(
            <Typography variant='h6'> {error.
// @ts-ignore
            message} </Typography>
        )
    }
    if (data) {
        return (
            <Container
                sx={{
                    maxWidth: { xl: '1490px', lg: '1400px', xs: '100%' },
                    mt: { xs: 2, md: 0 },
                    py: { xs: 4, md: 9 },
                    px: { xs: 1, sm: 2 },
                }}
            >
                {/* Top Section */}
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    flexWrap="wrap"
                    gap={3}
                >
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{ fontSize: { xs: '24px', sm: '30px', md: '35px' }, fontWeight: 600 }}
                        >
                            Selected Products
                        </Typography>
                        <Typography fontWeight={500} fontSize={{ xs: '14px', sm: '16px', md: '18px' }}>
                            All our new arrivals in an exclusive brand selection
                        </Typography>
                    </Box>

                    <ToggleButtonGroup
                        value={myData}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="product category filter"
                        color="error"
                        sx={{
                            flexWrap: 'wrap',
                            justifyContent: { xs: 'center', sm: 'unset' },
                            gap: 1,
                            '.Mui-selected': {
                                border: '1px solid rgba(233, 69, 96, 0.5) !important',
                                color: '#e94560 !important',
                                backgroundColor: 'transparent !important',
                            },
                        }}
                    >
                        <ToggleButton className="mybtn" sx={toggleBtnStyle} value={allProductsAPI}>
                            All Products
                        </ToggleButton>
                        <ToggleButton className="mybtn" sx={toggleBtnStyle} value={menCategoryAPI}>
                            Men Category
                        </ToggleButton>
                        <ToggleButton className="mybtn" sx={toggleBtnStyle} value={womenCategoryAPI}>
                            Women Category
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>

                {/* Product Cards */}
                <Stack
                    direction="row"
                    flexWrap="wrap"
                    justifyContent={{ xs: 'center', sm: 'space-between' }}
                    rowGap={5}
                    columnGap={2}
                    mt={5}
                >
                    {data.data.map((item) => {

                        return (


                            <Card
                                key={item.id}
                                sx={{
                                    width: '100%',
                                    maxWidth: { xs: '100%', sm: '48%', md: '30%', lg: 333 },
                                    height: 480,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    borderRadius: 2,
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover .zoom-img': {
                                        transform: 'scale(1.2) rotate(2deg)',
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 277,
                                        overflow: 'hidden',
                                        borderTopLeftRadius: 2,
                                        borderTopRightRadius: 2,
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        className="zoom-img"
                                        // @ts-ignore
                                        image= {`${item.productImg[0].url}`}
                                        alt="Product Image"
                                        sx={{
                                            height: '100%',
                                            width: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.6s ease',
                                            transformOrigin: 'center',
                                        }}
                                    />
                                </Box>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                                        <Typography
                                            variant="h6"
                                            sx={{ fontSize: { xs: '16px', sm: '18px' } }}
                                            noWrap
                                        >
                                            {item.productTitle}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{ fontWeight: 'bold', color: '#DE405AFF' }}
                                        >
                                            ${item.productPrice}
                                        </Typography>
                                    </Stack>
                                    <Tooltip title={item.productDescription}>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                mt: 1,
                                                display: '-webkit-box',
                                                WebkitLineClamp: 3,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {item.productDescription}
                                        </Typography>
                                    </Tooltip>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                                    <Button
                                        onClick={handleClickOpen}
                                        variant="outlined"
                                        startIcon={<AddShoppingCartOutlinedIcon />}
                                        sx={{
                                            px: 3,
                                            py: 1,
                                            borderRadius: '20px',
                                            borderColor:
                                                theme.palette.mode === 'dark'
                                                    ? 'rgba(255,255,255,0.3)'
                                                    : 'rgba(0,0,0,0.3)',
                                            color: theme.palette.text.primary,
                                            textTransform: 'none',
                                            fontWeight: 500,
                                            fontSize: 14,
                                            transition: 'all 0.2s ease-in-out',
                                            '&:hover': {
                                                backgroundColor:
                                                    theme.palette.mode === 'dark'
                                                        ? 'rgba(255,255,255,0.1)'
                                                        : 'rgba(0,0,0,0.05)',
                                                borderColor:
                                                    theme.palette.mode === 'dark'
                                                        ? 'rgba(255,255,255,0.5)'
                                                        : 'rgba(0,0,0,0.4)',
                                            },
                                        }}
                                    >
                                        Add To Cart
                                    </Button>
                                    <Rating name="read-only" value={item.productRating} precision={0.1} readOnly />
                                </CardActions>
                            </Card>)

                    }
                    )}
                </Stack>

                {/* Dialog for product details */}
                <Dialog
                    sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <IconButton
                        onClick={handleClose}
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
                    <ProductDetails />
                </Dialog>
            </Container>
        );
    }
};

export default Main;
