/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

import { Box, Typography } from "@mui/material";
import React from "react";

function ScrollingText() {
    return (
        <motion.div
            role="presentation"
            aria-hidden="true"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 18,
                ease: "linear",
            }}
            style={{
                display: "inline-block",
                whiteSpace: "nowrap",
                transform: "skewX(12deg)",
                minWidth: "100%",
                willChange: "transform", // optimization hint
            }}
        >
            <Typography
                variant="subtitle1"
                sx={{
                    fontWeight: 700,
                    color: "#fff",
                    fontStyle: "italic",
                    fontSize: { xs: 20, sm: 26, md: 30 },
                    display: "inline-block",
                    pr: 10, // acts as spacing between repeats
                }}
            >
                TODAY ONLY FOR{" "}
                <Box component="span" sx={{ fontWeight: 900 }}>
                    YOUR LOVING ELECTRONICS
                </Box>
            </Typography>
        </motion.div>
    );
}

export default React.memo(ScrollingText);
