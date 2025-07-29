import {
    Box,
    Container,
    Link,
    Stack,
    Typography,
    useTheme,
    Button,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconSection from './IconSection';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';

export default function Hero() {
    const theme = useTheme();

    const mySlider = [
        { text: 'MEN', link: '/banner-15.jpg', sale: '30%' },
        { text: 'WOMEN', link: '/banner-25.jpg', sale: '35%' },
    ];

    return (
        <Container
            sx={{
                maxWidth: {
                    xl: '1490px',
                    lg: '1400px',
                },
                mt: 2.5,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    pt: 4,
                    [theme.breakpoints.down('sm')]: {
                        py: 5,
                        bgcolor: '#fff',
                    },
                }}
            >
                {/* Swiper Slider */}
                <Swiper
                    pagination={{ dynamicBullets: true }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: true }}
                    speed={2000}
                    loop={true}
                    className="mySwiper"
                >
                    {mySlider.map((item) => (
                        <SwiperSlide key={item.link} className="parent-slider">
                            <img src={item.link} alt={`${item.text} banner`} />

                            <Box
                                sx={{
                                    [theme.breakpoints.up('sm')]: {
                                        position: 'absolute',
                                        left: '8%',
                                        textAlign: 'left',
                                    },
                                    [theme.breakpoints.down('sm')]: {
                                        py: 4,
                                        textAlign: 'center',
                                    },
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: 'rgb(31, 41, 55)',
                                        fontSize: '30px',
                                        fontWeight: 400,
                                    }}
                                >
                                    LIFESTYLE COLLECTION
                                </Typography>

                                <Typography
                                    variant="h3"
                                    sx={{
                                        color: 'rgb(31, 41, 55)',
                                        fontWeight: 500,
                                        my: 1,
                                        fontSize: '65px',
                                    }}
                                >
                                    {item.text}
                                </Typography>

                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    sx={{
                                        justifyContent: { xs: 'center', sm: 'left' },
                                    }}
                                >
                                    <Typography variant="h4" sx={{ color: 'rgb(31, 41, 55)', mr: 1 }}>
                                        SALE UP TO
                                    </Typography>
                                    <Typography variant="h4" sx={{ color: '#D23F57' }}>
                                        {item.sale}
                                    </Typography>
                                </Stack>

                                <Typography
                                    sx={{ fontSize: '15px', mt: 1, color: 'rgb(31, 41, 55)' }}
                                >
                                    Get Free Shipping on orders over $99.00
                                </Typography>

                                <Button
                                    sx={{
                                        mt: 4,
                                        width: '145px',
                                        height: '45px',
                                        borderRadius: '12px',
                                        bgcolor: 'rgb(31, 41, 55)',
                                        color: '#fff',
                                        '&:hover': {
                                            bgcolor: 'rgba(31, 41, 55, 0.95)',
                                        },
                                        fontSize: '15px',
                                        fontWeight: '600',
                                        textTransform: 'capitalize',
                                    }}
                                    variant="contained"
                                >
                                    Shop Now
                                </Button>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Right Side Ads */}
                <Box sx={{ display: { xs: 'none', md: 'block' }, minWidth: '26.6%' }}>
                    {/* Ad 1 */}
                    <Box sx={{ position: 'relative', mb: 2 }}>
                        <img src="/banner-17.jpg" alt="Summer Sale" width="100%" />
                        <Stack
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '31px',
                                transform: 'translateY(-50%)',
                            }}
                        >
                            <Typography variant="caption" sx={{ fontSize: '15px', color: '#2B3445' }}>
                                NEW ARRIVALS
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ mt: 1, fontWeight: 500, fontSize: '21px', color: '#2B3445', lineHeight: '16px' }}
                            >
                                Summer
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 500, fontSize: '21px', color: '#2B3445' }}
                            >
                                SALE 20% OFF
                            </Typography>
                            <Link
                                href="#"
                                underline="none"
                                sx={{
                                    mt: 1,
                                    color: '#2B3445',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    transition: '0.2s',
                                    '&:hover': {
                                        color: '#D23F57',
                                    },
                                }}
                            >
                                shop new <ArrowForwardIcon sx={{ fontSize: '13px' }} />
                            </Link>
                        </Stack>
                    </Box>

                    {/* Ad 2 */}
                    <Box sx={{ position: 'relative' }}>
                        <img src="/banner-16.jpg" alt="Gaming 4K" width="100%" />
                        <Stack
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '31px',
                                transform: 'translateY(-50%)',
                            }}
                        >
                            <Typography variant="caption" sx={{ fontSize: '15px', color: '#2B3445' }}>
                                GAMING 4K
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ mt: 1, fontWeight: 500, fontSize: '21px', color: '#2B3445', lineHeight: '16px' }}
                            >
                                DESKTOP &
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 500, fontSize: '21px', color: '#2B3445' }}
                            >
                                LAPTOPS
                            </Typography>
                            <Link
                                href="#"
                                underline="none"
                                sx={{
                                    mt: 1,
                                    color: '#2B3445',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    transition: '0.2s',
                                    '&:hover': {
                                        color: '#D23F57',
                                    },
                                }}
                            >
                                shop new <ArrowForwardIcon sx={{ fontSize: '13px' }} />
                            </Link>
                        </Stack>
                    </Box>
                </Box>
            </Box>

            {/* Icon Section */}
            <IconSection />
        </Container>
    );
}
