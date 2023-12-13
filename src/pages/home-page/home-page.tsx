import styled from "styled-components";
import SliderBarComponent from "../../components/slide-show/slider-show";
import { Grid } from "@mui/material";
import ViewScreen from "../../components/view-screen/view-screen";
import ListCourse from "./list-course";
import ContentIntroduction from "./content-introduction";

const HomePage = () => {
  return (
    <HomePageStyled>
      <SliderBarComponent />
      <ViewScreen>
        <Grid container direction="row">
          <Grid item sm={3}>
            <ListCourse />
          </Grid>
          <Grid item sm={9}>
            <ContentIntroduction />
          </Grid>
        </Grid>
      </ViewScreen>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.div`
  min-height: 500px;
`;

export default HomePage;
