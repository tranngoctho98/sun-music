import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import logoMusic from "../../assets/images/logo-music.svg";
import styled from "styled-components";
import menus from "../../assets/data-jsons/menu.json";
import MenuComponent from "./menu";
import ContactComponent from "./contact";
import React from "react";
import theme from "../../theme/theme";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const AppBarWeb = () => {
  return (
    <>
      <ElevationScroll>
        <AppBarStyled sx={{ height: 75 }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                component="a"
                href="/sun-music"
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              >
                <img
                  className="logo-music"
                  src={logoMusic}
                  alt="logo-music"
                  loading="lazy"
                />
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {menus.map((menu) => (
                  <MenuComponent key={menu.id} {...menu} />
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <ContactComponent />
              </Box>
            </Toolbar>
          </Container>
        </AppBarStyled>
      </ElevationScroll>
      <Toolbar
        style={{ background: theme.palette.primary.main, height: "75px" }}
      />
    </>
  );
};

const AppBarStyled = styled(AppBar)`
  padding-inline: 10px;
  img.logo-music {
    width: 100%;
    max-width: 100%;
    height: 75px;
    object-fit: contain;
    color: #cd222d;
  }
`;

export default AppBarWeb;
