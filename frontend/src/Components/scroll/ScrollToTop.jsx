import { KeyboardArrowUp } from '@mui/icons-material';
import { Fab, Zoom, Tooltip, styled } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';

// 💅 Styled Floating Action Button with elegant shadow
const StyledFab = styled(Fab)(() => ({
    position: 'fixed',
    bottom: 33,
    right: 33,
    width: 56,
    height: 56,
    borderRadius: '50%',
    backgroundColor: 'rgb(34, 41, 53)',
    color: '#fff',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.45), 0 4px 10px rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(6px)',
    transition: 'all 0.3s ease',
    '&:hover': {
        background: 'linear-gradient(135deg, #3c4455, #1e242f)',
        transform: 'scale(1.08) translateY(-2px)',
        boxShadow: '0 14px 35px rgba(0, 0, 0, 0.6), 0 6px 18px rgba(0, 0, 0, 0.25)',
    },
}));

const ScrollToTop = () => {
    const trigger = useScrollTrigger({ threshold: 150 });

    return (
        <Zoom in={trigger}>
            <Tooltip title="Back to Top" placement="left">
                <StyledFab
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    aria-label="scroll back to top"
                >
                    <KeyboardArrowUp fontSize="medium" />
                </StyledFab>
            </Tooltip>
        </Zoom>
    );
};

export default ScrollToTop;
