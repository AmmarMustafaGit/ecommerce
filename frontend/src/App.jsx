import Header1 from "./Components/1-header/Header1"
import Header2 from "./Components/1-header/Header2"
import Header3 from "./Components/1-header/Header3"
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./Components/2-hero/Hero";
import Main from "./Components/3-main/Main";
import Footer from "./Components/4-footer/Footer";
import CategoriesList from "./Components/CategoriesLiset/CategoriesList";
import PromoBanner from "./Components/Promo/PromoBanner";
import ScrollToTop from "./Components/scroll/ScrollToTop";
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}>
      <ThemeProvider
        // @ts-ignore
        theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
        <Box bgcolor={theme.
// @ts-ignore
        palette.bg.main}>
          <Hero/>
          <CategoriesList/>
          <PromoBanner/>
          <Main/>
        </Box>
        
        <Footer/>
        <ScrollToTop/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
export default App
