import { Box } from "@mui/material";
import ViewScreen from "../../components/view-screen/view-screen";
import IntroduceContent from "./introduce-content";

const IntroducePage = () => {
  return (
    <ViewScreen title="Giới thiệu">
      <Box paddingInline={1}>
        <IntroduceContent />
      </Box>
    </ViewScreen>
  );
};

export default IntroducePage;
