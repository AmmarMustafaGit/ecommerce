import { AddShoppingCartOutlined } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'

const ProductDetails = () => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, flexDirection: { xs: "column", md: "row" }, padding: { xs: "20px 0", md: "10px 0px", lg: "0px 0px" } }}>
            <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <img
                    src="/images.jpg"
                    alt="Product"
                    style={{
                        width: "100%",         // fills parent
                        maxWidth: 370,         // maximum size
                        height: "auto",        // maintains aspect ratio
                        objectFit: "cover",    // crops nicely if needed
                    }}
                />
            </Box>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography variant='h5'>WOMEN'S FASHION</Typography>
                <Typography my={0.4} fontSize={"22px"} color={'#D23F57'} variant="h6">$12.99</Typography>
                <Typography variant='body1'>
                    Lizards are a widespread group of squamate reptiles, with over
                    6,000 species, ranging across all continents except Antarctica.
                </Typography>
                <Stack direction={"row"} gap={1} my={2} sx={{ justifyContent: { xs: "center", md: "left" } }}>
                    {["/images.jpg", "/final.png"].map((item) => {
                        return (
                            <img key={item} style={{ borderRadius: 3 }} width={90} height={100} src={item} alt="" />
                        )
                    }
                    )}
                </Stack>
                <Button sx={{ textTransform: "capitalize", bgcolor: "#D23F57", padding: "8px 30px", outlineColor: "rgba(210, 63, 87, 0.5)", fontSize: "17px", "&:hover": { bgcolor: "#CE2440FF" }, color: "#fff" }} variant='contained'>
                    <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize='small' />
                    Buy now
                </Button>
            </Box>
        </Box>
    )
}

export default ProductDetails
