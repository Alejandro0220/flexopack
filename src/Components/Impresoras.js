import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Banner from '../Images/Impresoras/banner.jpg'
import ImpresoraEscritorio from '../Images/Impresoras/ImpresoraEscritorio.jpg'
import ImpresoraIndustrial from '../Images/Impresoras/ImpresoraIndustrial.jpg'
import ImpresoraPortatil from '../Images/Impresoras/ImpresoraPortatil.jpg'
import { Container, Divider, Grid, Hidden } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
    },
    banner: {
        width: '100%',
        height: '400px',
        [theme.breakpoints.down('sm')]: {
            height: 280
        },
    },
    tituloPrincipal: {
        position: 'absolute',
        top: '300px',
        left: '200px',
        color: 'white',
        fontSize: '74px',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
            top: '220px',
            left: '60px',
        },

    },
    tituloPrincipal2: {
        position: 'absolute',
        top: '400px',
        left: '200px',
        color: 'white',
        fontSize: '74px',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
            top: '250px',
            left: '60px',
        },

    },
    estiloTitulo: {
        textShadow: '8px 8px 8px #666',
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
    imagenImpresoraEscritorio: {
        width: '70%',
        height: '300px',
        marginTop: '100px',
        float: 'right',
        [theme.breakpoints.down('sm')]: {
            float: 'none',
            marginTop: '70px',
            display: 'block',
            margin: 'auto'
        },
    },
    imagenImpresoraIndustrial: {
        width: '70%',
        height: '300px',
        marginTop: '100px',
        float: 'left',
        [theme.breakpoints.down('sm')]: {
            float: 'none',
            marginTop: '70px',
            display: 'block',
            margin: 'auto'
        },
    },
    imagenImpresoraPortatil: {
        width: '70%',
        height: '300px',
        marginTop: '100px',
        float: 'right',
        [theme.breakpoints.down('sm')]: {
            float: 'none',
            marginTop: '70px',
            display: 'block',
            margin: 'auto'
        },
    },
}));
const Impresoras = () => {


    const classes = useStyles();
    const theme = useTheme();
    return (
        <>

            <Grid item xs={12}>
                <img src={Banner} className={classes.banner}></img>
                <Grid item xs={12} >
                    <Grid item xs={6} className={classes.tituloPrincipal}>

                        <p className={classes.estiloTitulo}> Impresoras</p>

                    </Grid>
                    <Grid item xs={6} className={classes.tituloPrincipal2}>
                        <p className={classes.estiloTitulo}>de Etiquetas</p>
                    </Grid>
                </Grid>

            </Grid>
            <Container className={classes.root}>
                <Grid container >
                    <Grid item sm={6} xs={12}>
                        <Grid container direction='row'>
                            <Grid item sm={5} xs={12} className={classes.titulo}>
                                Escritorio
                        </Grid>
                            <Grid item sm={7} xs={12} >
                                <Divider className={classes.divider} />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.texto}>
                            Equipos compactos y prácticos que cumplen con calidad de impresión, alto rendimiento y velocidad. Ideales para la industria alimentaria, joyería, hospitalaria, y comercio retail.
                           </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={ImpresoraEscritorio} className={classes.imagenImpresoraEscritorio}></img>
                    </Grid>
                </Grid>
                <Grid container >
                    <Hidden xsDown>
                        <Grid item xs={12} sm={6}>
                            <img src={ImpresoraIndustrial} className={classes.imagenImpresoraIndustrial}></img>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container direction='row'>
                                <Grid item xs={5} className={classes.titulo}>
                                    Industrial
                        </Grid>
                                <Grid item sm={7} xs={12} >
                                    <Divider className={classes.divider} />
                                </Grid>

                            </Grid>

                            <Grid item xs={12} className={classes.texto}>
                                Equipos para la impresión de etiquetas a volúmenes altos y continuos, cumpliendo con calidad de impresión, rendimiento y velocidad. Ideales para industrias logísticas, alimentarias, comercial retail.
                        </Grid>
                        </Grid>
                    </Hidden>
                    <Hidden xsUp>
                        
                        <Grid item sm={6} xs={12} >
                            <Grid container direction='row'>
                                <Grid item xs={5} className={classes.titulo}>
                                    Industrial
                        </Grid>
                                <Grid item sm={7} xs={12} >
                                    <Divider className={classes.divider} />
                                </Grid>

                            </Grid>

                            <Grid item xs={12} className={classes.texto}>
                                Equipos para la impresión de etiquetas a volúmenes altos y continuos, cumpliendo con calidad de impresión, rendimiento y velocidad. Ideales para industrias logísticas, alimentarias, comercial retail.
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <img src={ImpresoraIndustrial} className={classes.imagenImpresoraIndustrial}></img>
                        </Grid>
                        </Grid>
                    </Hidden>
                </Grid>
                <Grid container >
                    <Grid item sm={6} xs={12}>
                        <Grid container direction='row'>
                            <Grid item sm={5} xs={12} className={classes.titulo}>
                                Portátiles
                        </Grid>
                            <Grid item sm={7} xs={12} >
                                <Divider className={classes.divider} />
                            </Grid>
                        </Grid>

                        <Grid item xs={12} className={classes.texto}>
                            Equipos de impresión móvil con fácil integración a sistemas MPOS. Alta resistencia a golpes y condiciones climatológicas. Ideales para el comercio TAT, trazabilidad, multas y recibos de venta en campo.
                         </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <img src={ImpresoraPortatil} className={classes.imagenImpresoraPortatil}></img>
                    </Grid>
                </Grid>
            </Container>
        </>

    );
}

export default Impresoras;