import { Container, Divider, Grid, Hidden, makeStyles, useTheme } from '@material-ui/core';
import React from 'react';
import Banner from '../Images//Insumos/Banner.jpg'
import BolsaAlVacio from '../Images//Insumos/BolsaAlVacio.jpg'
import Caracteres from '../Images//Insumos/Caracteres.jpg'
import CorreasDentadas from '../Images//Insumos/CorreasDentadas.webp'
import Rodillos from '../Images//Insumos/Rodillos.jpg'
import Teflon from '../Images//Insumos/Teflon.jpg'
const Insumos = () => {
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
            top: '350px',
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
            marginTop: '50px',
            fontFamily: 'Futura',
            fontSize: '20px',
            textAlign: 'center',
            [theme.breakpoints.down('sm')]: {
                textAlign: 'left',

            },

        },
        imagenRodillos: {
            width: '70%',
            height: '300px',
            float: 'left',
            [theme.breakpoints.down('sm')]: {
                float: 'none',
                marginTop: '70px',
                display: 'block',
                margin: 'auto'
            },

        },
        imagenTeflon: {
            width: '70%',
            height: '300px',
            float: 'right',
            marginTop: '80px',
            [theme.breakpoints.down('sm')]: {
                float: 'none',
                marginTop: '70px',
                display: 'block',
                margin: 'auto'
            },
        },
        imagenCorreas: {
            width: '70%',
            height: '300px',
            float: 'left',
            marginTop: '80px',
            [theme.breakpoints.down('sm')]: {
                float: 'none',
                marginTop: '70px',
                display: 'block',
                margin: 'auto'
            },
        },
        imagenCaracteres: {
            width: '70%',
            height: '300px',
            float: 'right',
            marginTop: '80px',
            [theme.breakpoints.down('sm')]: {
                float: 'none',
                marginTop: '70px',
                display: 'block',
                margin: 'auto'
            },
        },
        imagenBolsas: {
            width: '70%',
            height: '300px',
            float: 'left',
            marginTop: '80px',
            [theme.breakpoints.down('sm')]: {
                float: 'none',
                marginTop: '70px',
                display: 'block',
                margin: 'auto'
            },
        },
        tabla: {

            marginTop: '150px',
            [theme.breakpoints.down('sm')]: {
                float: 'none',
                alignContent: 'center',
                marginTop: '70px',
            },

        }
    }));
    const classes = useStyles();
    const theme = useTheme();
    return (
        <>
            <Grid item xs={12} className={classes.banner}>
                <img src={Banner} className={classes.banner}></img>
                <Grid item xs={12} className={classes.tituloPrincipal}>

                    <p className={classes.estiloTitulo}>Insumos</p>
                </Grid>
            </Grid>
            <Container className={classes.root}>
                <Grid container direction='row'>
                    <Grid item xs={12}>
                        <Grid container direction='row'>
                            <Grid item sm={5} xs={12} className={classes.titulo}>
                                Rodillos Entintadores
                            </Grid>
                            <Grid item sm={7} xs={12} >
                                <Divider className={classes.divider} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.texto}>
                        Rodillos entintadores o Hot Roller Ink, consumibles para los codificadores Hot Roll de las selladoras banda continua y Flow Pack
                             </Grid>
                    <Grid item sm={6} xs={12} className={classes.texto}>
                        <img src={Rodillos} className={classes.imagenRodillos}></img>
                    </Grid>

                    <Grid item sm={6} xs={12} >
                        <center>
                            <table border='1px' className={classes.tabla}>
                                <tr >
                                    <td>Dimensión</td>

                                    <td>Color</td>
                                </tr>
                                <tr>
                                    <td>16 mm</td>
                                    <td>Negro/Blanco</td>
                                </tr>
                                <tr>
                                    <td>32 mm</td>
                                    <td>Negro/Blanco</td>
                                </tr>
                                <tr>
                                    <td>36 mm</td>
                                    <td>Negro/Blanco</td>
                                </tr>
                            </table>
                        </center>
                    </Grid>
                    <Grid item sm={6} xs={12} >
                        <Grid container direction='row'>
                            <Grid item sm={8} xs={12} className={classes.titulo}>
                                Bandas de Teflón
                        </Grid>
                            <Grid item sm={4} xs={12}  >
                                <Divider className={classes.divider} />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.texto}>
                            Bandas de teflón continua o adhesivas, para todo tipo de selladora.
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={Teflon} className={classes.imagenTeflon}></img>
                    </Grid>
                </Grid>
                <Grid container >
                    <Hidden xsDown>
                        <Grid item xs={6}>
                            <img src={CorreasDentadas} className={classes.imagenCorreas}></img>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container direction='row'>
                                <Grid item xs={8} className={classes.titulo}>
                                    Correas Dentadas
                        </Grid>
                                <Grid item xs={4} >
                                    <Divider className={classes.divider} />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} className={classes.texto}>
                                Corres dentadas o de tracción para selladoras banda continua.
                       </Grid>

                        </Grid>
                    </Hidden>
                    <Hidden xsUp>

                        <Grid item sm={6} xs={12}>
                            <Grid container direction='row'>
                                <Grid item xs={8} className={classes.titulo}>
                                    Correas Dentadas
                        </Grid>
                                <Grid item sm={4} xs={12} >
                                    <Divider className={classes.divider} />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} className={classes.texto}>
                                Corres dentadas o de tracción para selladoras banda continua.
                       </Grid>

                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <img src={CorreasDentadas} className={classes.imagenCorreas}></img>
                        </Grid>
                    </Hidden>
                    <Grid item sm={6} xs={12}>
                        <Grid container direction='row'>
                            <Grid item sm={5} xs={12} className={classes.titulo}>
                                Caracteres
                        </Grid>
                            <Grid item sm={7} xs={12}>
                                <Divider className={classes.divider} />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.texto}>
                            Tipos en bronce o en acero, para codificadores hot stamping y selladoras banda continua respectivamente.
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <img src={Caracteres} className={classes.imagenCaracteres}></img>
                    </Grid>
                    <Hidden xsDown>
                    <Grid item xs={6}>
                        <img src={BolsaAlVacio} className={classes.imagenBolsas}></img>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container direction='row'>
                            <Grid item xs={7} className={classes.titulo}>
                                Bolsas al Vacío
                        </Grid>
                            <Grid item xs={5} >
                                <Divider className={classes.divider} />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.texto}>
                            Ideales para el empaque de productos altamente perecederos tales como Carnes, Quesos, Frutas y Verduras entre otros. Nuestras bolsas son fabricadas en una película co-extruida de 7 capas, en calibre de 65, 90 y 120 micras.entregando unas bolsas con excelentes propiedades mecánicas, de barrera, transparencia y sellabilidad.
                       </Grid>
                    </Grid>
                    </Hidden>
                    <Hidden xsUp>
                    
                    <Grid item xs={12} sm={6}>
                        <Grid container direction='row'>
                            <Grid item xs={7} className={classes.titulo}>
                                Bolsas al Vacío
                        </Grid>
                            <Grid item xs={12} sm={5}>
                                <Divider className={classes.divider} />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.texto}>
                            Ideales para el empaque de productos altamente perecederos tales como Carnes, Quesos, Frutas y Verduras entre otros. Nuestras bolsas son fabricadas en una película co-extruida de 7 capas, en calibre de 65, 90 y 120 micras.entregando unas bolsas con excelentes propiedades mecánicas, de barrera, transparencia y sellabilidad.
                       </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <img src={BolsaAlVacio} className={classes.imagenBolsas}></img>
                    </Grid>
                    </Hidden>
                </Grid>

            </Container>
        </>

    );
}

export default Insumos;