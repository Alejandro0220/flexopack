import React from 'react';

import { useTheme, makeStyles } from '@material-ui/core/styles';
import Banner from '../Images/Cintas/Banner.jpg'
import CintaHotStamping from '../Images/Cintas/CintaHotStamping.png'
import CintasTermicas from '../Images/Cintas/CintasTermicas.png'
import { Container, Divider, Grid, Hidden } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
  
        alignItems: 'center',
    },
    banner: {
        width: '100%',
        height: '500px',
        [theme.breakpoints.down('sm')]: {
            height: 280,
            
        },
    },
    tituloPrincipal: {
        position: 'absolute',
        top: '450px',
        left: '800px',
        color: 'white',
        fontSize: '74px',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
            top: '250px',
            left: '280px',
        },
    },

    titulo: {
        marginTop: '100px',
        color: 'black',
        fontSize: '36px',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: '33px',

        },

    },
    estiloTitulo:{
        textShadow:'8px 8px 8px #666',
    },
    divider: {
        marginTop: '110px',
        background: 'black',
        [theme.breakpoints.down('sm')]: {
            marginTop: '30px',

        },
    },
    texto: {
        marginTop: '30px',
        fontFamily: 'Futura',
        fontSize: '20px',
        textAlign: 'left',

    },
    imagenCintaHotStamping: {
        width: '70%',
        height: '250px',
        marginTop: '100px',
        float: 'right',
        [theme.breakpoints.down('sm')]: {
            float: 'none',
            marginTop: '70px',
            display:'block',
            margin:'auto'

        },
    },
    imagenCintasTermicas: {
        width: '70%',
        height: '250px',
        marginTop: '100px',
        float: 'left',
        [theme.breakpoints.down('sm')]: {
            float: 'none',
            marginTop: '70px',
            display:'block',
            margin:'auto'

        },
    },

}));
const Cintas = () => {

    const classes = useStyles();
    const theme = useTheme();
    return (
        <>
            <Grid item sm={12}>
                <img src={Banner} className={classes.banner}></img>
                <Grid item xs={12} className={classes.tituloPrincipal}>

                    <p className={classes.estiloTitulo}>Cintas</p>
                    </Grid>
            </Grid>


            <Container >
                <Grid container >
                    <Grid item xs={12} sm={6}>
                        <Grid container direction='row'>
                            <Grid item sm={9} xs={12} className={classes.titulo}>
                                Cintas Hot Stamping
                        </Grid>
                            <Grid item xs={12} sm={3} >
                                <Divider className={classes.divider} />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.texto}>
                            Cintas para la codificación en laminados, bolsas plásticas, cartón y papel, las cuales nos permiten la impresión de Lote y Fecha de Vencimiento en codificadoras, fechadoras o loteadoras.
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={CintaHotStamping} className={classes.imagenCintaHotStamping}></img>
                    </Grid>
                </Grid>
                <Grid container >
                <Hidden xsDown>
                    <Grid item sm={6} xs={12}>
                        <img src={CintasTermicas} className={classes.imagenCintasTermicas}></img>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container direction='row'>
                            <Grid item xs={7} className={classes.titulo}>
                                Cintas Térmicas
                        </Grid>
                            <Grid item xs={5} >
                                <Divider className={classes.divider} />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.texto}>
                            Cintas térmicas tipo Cera, Cera-Resina, Resina y Resina de Lavado, Ideales para la marcación de etiquetas adhesivas. Cintas de alta adherencia con propiedades que las hacen resistentes a humedad, lavado y fricción.
                        </Grid>
                    </Grid>
                </Hidden>
                <Hidden xsUp>
                   
                    <Grid item sm={6} xs={12}>
                        <Grid container direction='row'>
                            <Grid item sm={7} xs={12} className={classes.titulo}>
                                Cintas Térmicas
                        </Grid>
                            <Grid item xs={12} sm={5} >
                                <Divider className={classes.divider} />
                            </Grid>
                        </Grid>
                        <Grid item sm={12} className={classes.texto}>
                            Cintas térmicas tipo Cera, Cera-Resina, Resina y Resina de Lavado, Ideales para la marcación de etiquetas adhesivas. Cintas de alta adherencia con propiedades que las hacen resistentes a humedad, lavado y fricción.
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <img src={CintasTermicas} className={classes.imagenCintasTermicas}></img>
                    </Grid>
                </Hidden>
                    
                </Grid>
            </Container>
        </>

    );
}

export default Cintas;