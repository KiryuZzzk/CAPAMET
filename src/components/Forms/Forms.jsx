import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarEmail, validarName, validarMessage } from "./validaciones";
import { fondoClaro } from "../UI/variables";
import { colorPrimario } from "../UI/variables";
import { colorSecundario } from "../UI/variables";
import { colorEfectos } from "../UI/variables";
import {Typography} from "@mui/material";
import Alert from '@mui/material/Alert';
import {AlertTitle} from "@mui/material";
import { useMediaQuery } from "@mui/material";


const DatosUsuario = (props) => {
  const {setPage} = props;
  
  const [email, setEmail] = useState({
    value: "",
    valid: null,
  });
  const [name, setName] = useState({
    value: "", 
    valid: null });
  const [message, setMessage] = useState({
    value: "", 
    valid: null });

  const [validForms, setValidForms] = useState("");

  const matches= useMediaQuery('(min-width:1032px)');
  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        my:"2em",
        mx:"auto",
        width: "50%",
        backgroundColor: fondoClaro,
        p:"2em", borderRadius:"10px", boxSizing:"border-box"
      }}
      onSubmit={(e) => {
        e.preventDefault();
        if (email.valid && name.valid) {
          console.log({email : email.value, name: name.value, message:message.value});
          setValidForms(true)
          window.scrollTo(0, 0);
        } else {
            console.log("Información inválida");
            setValidForms(false)
        }
      }}
    >


        {
        matches ? <Typography variant="h2"  sx={{fontSize:"3em", fontWeight:"400", 
        lineHeight:"4.5rem", textAlign:"center" , borderBottom:"4px solid",borderColor:colorSecundario, width:"50%"}}> 
        Contacto </Typography> : <Typography variant="h2" sx={{fontSize:"5vw", fontWeight:"400", 
        lineHeight:"4.5rem", borderBottom:"4px solid",borderColor:colorSecundario, textAlign:"center", mx:"auto", width:"50%"}}> 
        Contacto </Typography>

        }
        {
        (validForms === false) && <Alert severity="error">
        <AlertTitle><strong>Error</strong></AlertTitle>
        Por favor, ingresa un nombre y correo válidos
      </Alert>
      }
      {
        (validForms === true) && <Alert severity="success">
        <AlertTitle><strong>¡Bien hecho!</strong></AlertTitle>
        Nos pondremos en contacto pronto
      </Alert>
      }

      <TextField 
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={name.valid === false}
        helperText={
          name.valid === false && "Ingresa un nombre válido."
        }
        value={name.value}
        onChange={(input) => {
          const name = input.target.value;
          const valido = validarName(name);
          setName({ value: name, valid: valido });
          setValidForms("")
        }}
      />
      <TextField 
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={email.valid === false}
        helperText={
          email.valid === false && "Ingresa un correo electrónico válido."
        }
        value={email.value}
        onChange={(input) => {
          const email = input.target.value;
          const valido = validarEmail(email);
          setEmail({ value: email, valid: valido });
          setValidForms("")
        }}
      />
      <TextField 
        label="Mensaje"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="dense"
        type="text"
        helperText="Añadir un mensaje"
        value={message.value}
        onChange={(input) => {
          const message = input.target.value;
          const valido = validarMessage(message);
          setMessage({ value: message, valid: valido });
        }}
      />

      <Button variant="contained" size="large" type="submit" onClick={() => {}}
                        sx={{backgroundColor:colorPrimario, fontWeight:"bold", '&:focus,active':{backgroundColor:colorEfectos, color:"black", bt:"1em"},
                        '&:hover':{backgroundColor:colorSecundario, color:"white", fontWeight:"bold"}}}>
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosUsuario;