import { Box } from "@mui/material";
import BreadcrumbsComponent from "../breadcrumbs/breadcrumbs";

type ViewScreenProps = {
  title?: string;
  coverImage?: string;
  children: JSX.Element;
};

const ViewScreen = (props: ViewScreenProps) => {
  return (
    <Box marginBottom={8}>
      {props.title && (
        <BreadcrumbsComponent
          title={props.title}
          coverImage={props.coverImage}
        />
      )}
      <Box marginInline={20} minHeight={200}>
        {props.children}
      </Box>
    </Box>
  );
};

export default ViewScreen;
