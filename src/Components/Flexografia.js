import React, { Fragment } from 'react';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Banner from '../Images/Flexografia/banner.jpg'
import EtiquetasTextiles from '../Images/Flexografia/etiquetas textiles.jpg'
import LineaBlanca from '../Images/Flexografia/linea blanca.jpg'
import Policromia from '../Images/Flexografia/policromia.jpg'
import { Container, Divider, Grid, Hidden } from '@material-ui/core';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



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
        top: '230px',
        left: '200px',
        color: 'white',
        fontSize: '74px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
            top: '120px',
            left: '60px',
        },
        fontFamily: 'Helvetica',
        fontWeight: 'bold',

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
    tituloPrincipal2: {
        position: 'absolute',
        top: '320px',
        left: '200px',
        color: 'white',
        fontSize: '74px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
            top: '160px',
            left: '60px',
        },
        fontFamily: 'Helvetica',
        fontWeight: 'bold',


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
    imagenLineaBlanca: {
        width: '250px',
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
    imagenPolicromia: {
        width: '300px',
        height: '300px',
        marginTop: '50px',
        float: 'left',
        [theme.breakpoints.down('sm')]: {
            float: 'none',
            marginTop: '70px',
            display:'block',
            margin:'auto'
        },
    },
    imagenEtiquetasTextiles: {
        width: '250px',
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
}));

const Flexografia = () => {

    const classes = useStyles();
    const theme = useTheme();
    return (

        <Fragment>

            <Grid item xs={12}>
                <img src={Banner} className={classes.banner}></img>
                <Grid item xs={12} >
                    <Grid item xs={6} className={classes.tituloPrincipal}>

                        <p className={classes.estiloTitulo}> Etiquetas</p>

                    </Grid>
                    <Grid item xs={6} className={classes.tituloPrincipal2}>
                        <p className={classes.estiloTitulo}>adhesivas</p>
                    </Grid>
                </Grid>
            </Grid>

            <Container className={classes.root}>
                <Grid container >
                    <Grid item sm={6} xs={12} justify='space-between'>
                        <Grid container direction='row'>
                            <Grid item xs={12} sm={6} className={classes.titulo}>
                                Línea Blanca
                        </Grid>
                            <Grid item sm={6} xs={12} >
                                <Divider className={classes.divider} />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.texto}>
                            Etiquetas adhesivas troqueladas, ideales para la rotulación de información variable en productos y empaques que requieran una identificación.
                        </Grid>
                    </Grid>
                    <Grid item xs={2}>

                    </Grid>
                    <Grid item xs={4}>
                        <img src={LineaBlanca} className={classes.imagenLineaBlanca}></img>
                    </Grid>
                </Grid>
                <Grid container >
                <Hidden xsDown>
                    <Grid item sm={6} xs={12} >
                        <img src={Policromia} className={classes.imagenPolicromia}></img>
                    </Grid>

                    <Grid item xs={6}>
                        <Grid container directio='row'>
                        
                            <Grid item xs={5} className={classes.titulo}>
                                Policromía
                        </Grid>
                            <Grid item xs={7} >
                                <Divider className={classes.divider} />
                            </Grid>
                           
                        </Grid>
                        <Grid item xs={12} className={classes.texto}>
                            Plasmamos tus diseños en etiquetas adhesivas troqueladas a full color, impresiones de alta calidad generando una identidad única a tu producto y/o empaque.
                        </Grid>
                    </Grid>

                    </Hidden>
                    <Hidden xsUp>
                    

                    <Grid item sm={6} xs={12}>
                        <Grid container directio='row'>
                        
                            <Grid item xs={5} className={classes.titulo}>
                                Policromía
                        </Grid>
                            <Grid item sm={7} xs={12} >
                                <Divider className={classes.divider} />
                            </Grid>
                           
                        </Grid>
                        <Grid item xs={12} className={classes.texto}>
                            Plasmamos tus diseños en etiquetas adhesivas troqueladas a full color, impresiones de alta calidad generando una identidad única a tu producto y/o empaque.
                        </Grid>
                    </Grid>
                    <Grid container  justify='center' >
                        <img src={Policromia} className={classes.imagenPolicromia}></img>
                    </Grid>
                    </Hidden>
                </Grid>

                <Grid container >
                    <Grid item sm={6} xs={12}>
                        <Grid container direction='row' >
                            <Grid item sm={8} xs={12} className={classes.titulo}>
                                Etiquetas Textiles
                        </Grid>
                            <Grid item sm={4} xs={12} >
                                <Divider className={classes.divider} />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.texto}>
                            Etiquetas de origen en nylon, satín y cartón, ideales para la industria textil, marroquinería y calzado.
                        </Grid>
                    </Grid>
                    
                    <Grid item sm={6} xs={12}>
                    
                        <img src={EtiquetasTextiles} className={classes.imagenEtiquetasTextiles}></img>
                        
                    </Grid>
                </Grid>
            </Container>


        </Fragment>

    );
}

export default Flexografia;