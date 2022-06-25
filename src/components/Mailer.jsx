import * as React from "react";
import { useRef } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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
});

const Mailer = ({ id }) => {
  const styles = useStyles();

  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_zp5yh1k",
        "template_txupyfr",
        form.current,
        "15SwNbyzlKNgjjpw7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  console.log(form)

  return (
    <Container id={id} my={2} maxWidth="md">
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
              id="name"
              name="name"
              label="Tu Nombre"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="mail"
              name="mail"
              label="Tu Mail"
              variant="outlined"
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="message"
              name="message"
              label="Tu Mensaje"
              multiline
              maxRows={4}
              variant="outlined"
              type="text"
              // value={value}
              // onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Box textAlign="center" mt={2}>
          <Button
            type="submit"
            
            variant="outlined"
            size="large"
            startIcon={<SendIcon />}
          >
            Enviar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Mailer;
