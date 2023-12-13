import { Grid } from "@mui/material";
import ContactFormRegister from "./contact-form-register";
import ContactInformation from "./contract-information";
import ViewScreen from "../../components/view-screen/view-screen";

const ContactPage = () => {
  return (
    <ViewScreen title="Liên hệ">
      <Grid container>
        <Grid item sm={4} paddingInline={2}>
          <ContactFormRegister />
        </Grid>
        <Grid item sm paddingInline={2}>
          <ContactInformation />
        </Grid>
      </Grid>
    </ViewScreen>
  );
};

export default ContactPage;
