
import { Button, Grid, makeStyles, Paper, TextField } from '@material-ui/core';
import { Email } from '@material-ui/icons';
import React, { useState } from 'react';
import Mapa from '../Images/Mapa.PNG'

const useStyles = makeStyles((theme) => ({
  root: {

    alignItems: 'center',
    marginTop: '30px'
  },
  textArea: {
    width: '79%',
    margin: '15px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },

  },
  inputs: {

    margin: '15px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  tituloPrincipal: {
    color: 'black',
    fontSize: '74px',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    margin: '15px',
    marginBottom:'60px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '35px',
    },
  },
  boton: {
    margin: '15px',
  },
  imgMapa:{
    width: '100%',
  },

}));
const Contacto = () => {
  const classes = useStyles();
  const [error, setError] = useState({
    flag: false,
    msg: "",
  });
  const [data, setData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [errorData, seterrorData] = useState({
    errorNombre: false,
    msgErrorNombre: "",
    errorApellido: false,
    msgErrorApellido: "",
    errorEmail: false,
    msgErrorEmail: "",
    errorTelefono: false,
    msgErrorTelefono: "",
    erroraMensaje: false,
    msgErrorMensaje: "",
    errorBoton: false
  });

  const handlerChangeDataEdit = (e, type, value) => {
    e.persist();
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    validateData(e.target.name, e.target.value)
  }

  const validateData = (atributo, value) => {
    switch (atributo) {
      case "nombre":
        if (value === "" || value === null) {
          seterrorData((prevState) => ({
            ...prevState,
            errorNombre: true,
            msgErrorNombre: "Indique su nombre"
          }))
          return true;
        } else {
          seterrorData((prevState) => ({
            ...prevState,
            errorNombre: false,
            msgErrorNombre: ""
          }))
          return false;
        }
      case "apellido":
        if (value === "" || value === null) {
          seterrorData((prevState) => ({
            ...prevState,
            errorApellido: true,
            msgErrorApellido: "Indique su apellido"
          }))
          return true;
        } else {
          seterrorData((prevState) => ({
            ...prevState,
            errorApellido: false,
            msgErrorApellido: ""
          }))
          return false;
        }
      case "email":
        console.log(value)
        var re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        if (value === "" || value === null) {
          seterrorData((prevState) => ({
            ...prevState,
            errorEmail: true,
            msgErrorEmail: "Indique su email"
          }))
          return true;
        } else if (!re.exec(value)) {
          seterrorData((prevState) => ({
            ...prevState,
            errorEmail: true,
            msgErrorEmail: "Email incorrecto"
          }))
          return true;

        } else {
          seterrorData((prevState) => ({
            ...prevState,
            errorEmail: false,
            msgErrorEmail: ""
          }))
          return false;
        }

      case "telefono":
        if (value === "" || value === null) {
          seterrorData((prevState) => ({
            ...prevState,
            errorTelefono: true,
            msgErrorTelefono: "Indique su tel??fono"
          }))
          return true;
        } else {
          seterrorData((prevState) => ({
            ...prevState,
            errorTelefono: false,
            msgErrorTelefono: ""
          }))
          return false;
        }
      case "mensaje":
        if (value === "" || value === null) {
          seterrorData((prevState) => ({
            ...prevState,
            errorMensaje: true,
            msgErrorMensaje: "Indique su mensaje"
          }))
          return true;
        } else {
          seterrorData((prevState) => ({
            ...prevState,
            errorMensaje: false,
            msgErrorMensaje: ""
          }))
          return false;
        }
    }

  }

  const envioCorreo = () => {
    Email.send({
      Host: "smtp.yourisp.com",
      Username: "username",
      Password: "password",
      To: 'alejandroquinteromedina@gmail.com',
      From: data.email,
      Subject: "This is the subject",
      Body: "And this is the body"
    }).then(
      message => alert(message)
    );
  }

  const errores = () => {
    let flagError = 0;
    for (const prop in data) {
      if (data.hasOwnProperty(prop)) {
        let error = validateData(prop, data[prop]);
        if (error) {
          flagError++;
        }
      }
    }
    if (flagError <= 0) {
      seterrorData((prevState) => ({
        ...prevState,
        errorBoton: true,
      }))
    } else {
      seterrorData((prevState) => ({
        ...prevState,
        errorBoton: false,
      }))
    }
  }

  
  return (


    <div className={classes.root}>
      <Grid container direction='row' justify='center'>
       
          <Grid item sm={5} xs={12}>
            <p className={classes.tituloPrincipal}>Encu??ntranos</p>

            {/* <TextField
              className={classes.inputs}
              name="nombre"
              label="Nombre"
              variant="outlined"
              onChange={handlerChangeDataEdit}
              error={errorData.errorNombre}
              helperText={errorData.msgErrorNombre}
            >

            </TextField>

            <TextField
              className={classes.inputs}
              name="apellido"
              label="Apellido"
              variant="outlined"
              value={data.apellido}
              onChange={handlerChangeDataEdit}
              error={errorData.errorApellido}
              helperText={errorData.msgErrorApellido}
            ></TextField>

            <TextField
              className={classes.inputs}
              name="email"
              label="Email"
              variant="outlined"
              value={data.email}
              onChange={handlerChangeDataEdit}
              error={errorData.errorEmail}
              helperText={errorData.msgErrorEmail}
            ></TextField>

            <TextField
              className={classes.inputs}
              name="telefono"
              label="Tel??fono"
              variant="outlined"
              type="number"
              value={data.telefono}
              onChange={handlerChangeDataEdit}
              error={errorData.errorTelefono}
              helperText={errorData.msgErrorTelefono}
            ></TextField>

            <TextField
              className={classes.textArea}
              name="mensaje"
              label="Multiline"
              multiline
              rows={3}
              variant="outlined"
              value={data.mensaje}
              onChange={handlerChangeDataEdit}
              error={errorData.errorMensaje}
              helperText={errorData.msgErrorMensaje}
            />
            
            <Button type='submit' variant="contained" disabled={errorData.errorBoton} className={classes.boton}>
              Enviar
            </Button> */}
            
           <a  target="_blank" href='https://www.google.com/maps/place/Cl.+36+%2393-29,+Medell%C3%ADn,+Antioquia/@6.249538,-75.6165233,17z/data=!3m1!4b1!4m5!3m4!1s0x8e4429820636c399:0xb14f663c3eb6e69!8m2!3d6.249922!4d-75.614561?hl=es'>
           <center><img src={Mapa} className={classes.imgMapa}></img>
           </center>
           </a>
           
          </Grid>
      </Grid>
    </div >


  );
}

export default Contacto;