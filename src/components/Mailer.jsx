import * as React from "react";
import { useRef } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  form: {
    padding: "20px",
    backdropFilter: "blur(2px)",
    backgroundColor: "rgba(0,0,5,0.7)",
    borderRadius: "10px",
  },
  input: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px black inset",
    },
  },
});

const Mailer = ({ id }) => {
  const styles = useStyles();
  const form = useRef();

  const [sentSuccessfully, setSentSuccessfully] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const sendEmail = async (event) => {
    try {
      event.preventDefault();
      await emailjs.sendForm(
        "servicezp5yh1k",
        "template_txupyfr",
        form.current,
        "15SwNbyzlKNgjjpw7"
      );
      console.log("¡Mensaje enviado! / Mail sent!");
      setSentSuccessfully(true);
    } catch (error) {
      console.log(`Error al enviar / Error sending: ${JSON.stringify(error)}`);
      setSentSuccessfully(false);
    }
  };
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Container id={id} my={3} maxWidth="md">
      <Typography
        sx={{ paddingTop: "20px" }}
        variant="h4"
        component="h1"
        gutterBottom
      >
        {" "}
        Contacto{" "}
      </Typography>
      <Box
        ref={form}
        component="form"
        className={styles.form}
        onSubmit={sendEmail}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              required
              id="name"
              name="name"
              label="Tu Nombre"
              variant="outlined"
              InputProps={{
                classes: { input: styles.input },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              required
              id="mail"
              name="mail"
              label="Tu Mail"
              variant="outlined"
              type="email"
              InputProps={{
                classes: { input: styles.input },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="message"
              name="message"
              label="Tu Mensaje"
              multiline
              maxRows={4}
              variant="outlined"
              type="text"
              InputProps={{
                classes: { input: styles.input },
              }}
            />
          </Grid>
        </Grid>
        <Box textAlign="center" mt={2}>
          <Button
            type="submit"
            variant="outlined"
            size="large"
            startIcon={<SendIcon />}
            onClick={handleClick}
          >
            Enviar
          </Button>
        </Box>
        <Typography variant="body2" color="textSecondary" align="center" mt={2}>
          contactootracosa@gmail.com
        </Typography>
      </Box>
      {typeof sentSuccessfully === "boolean" ? (
        sentSuccessfully === true ? (
          <Snackbar
            open={open}
            autoHideDuration={5500}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert variant="filled" severity="success">
              <AlertTitle>¡Enviado!</AlertTitle>
              Tu mensaje ha sido enviado correctamente
            </Alert>
          </Snackbar>
        ) : (
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert variant="filled" severity="error">
              <AlertTitle>ERROR</AlertTitle>
              Hubo un error al enviar, vuelva a intentarlo más tarde o contacte
              con{" "}
              <a href="mailto:contactootracosa@gmail.com?Subject=Enviado%20desde%20otracosa.gatsbyjs.io&body=Hola%20Otra%20Cosa,%20">
                contactootracosa@gmail.com
              </a>
            </Alert>
          </Snackbar>
        )
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Mailer;
