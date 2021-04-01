
import { Container, Divider, Grid, Hidden, makeStyles } from '@material-ui/core'
import React from 'react'
import Banner from '../Images/Flexografia/banner.jpg'
import DobleBarra from '../Images/Empacadoras al vacio/DobleBarra.jpg'
import DobleCampana from '../Images/Empacadoras al vacio/DobleCampana.jpg'
import VAC300 from '../Images/Empacadoras al vacio/VAC300.jpg'
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

export default function EmpaqueAlVacio() {
    const classes = useStyles();
    return (
        <div>
           <Grid item xs={12}>
                <img src={Banner} className={classes.banner}></img>
                <Grid item xs={12} >
                    <Grid item xs={6} className={classes.tituloPrincipal}>

                        <p className={classes.estiloTitulo}> Empacadoras</p>

                    </Grid>
                    <Grid item xs={6} className={classes.tituloPrincipal2}>
                        <p className={classes.estiloTitulo}>al vacío</p>
                    </Grid>
                </Grid>
            </Grid>
            <Container className={classes.root}>
                <Grid container >
                    <Grid item sm={6} xs={12} justify='space-between'>
                        <Grid container direction='row'>
                            <Grid item xs={12} sm={6} className={classes.titulo}>
                            VAC 300
                        </Grid>
                            <Grid item sm={6} xs={12} >
                                <Divider className={classes.divider} />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.texto}>
                        Equipo industrial para el empaque de productos altamente perecederos, de una sola cámara y una barra de sellado. Ideal para producciones de bajo volumen, estructura en acero inoxidable, compacta para una mesa.
                           </Grid>
                    </Grid>
                    <Grid item xs={2}>

                    </Grid>
                    <Grid item xs={4}>
                        <img src={VAC300} className={classes.imagenLineaBlanca}></img>
                    </Grid>
                </Grid>
                <Grid container >
                <Hidden xsDown>
                    <Grid item sm={6} xs={12} >
                        <img src={DobleBarra} className={classes.imagenPolicromia}></img>
                    </Grid>

                    <Grid item xs={6}>
                        <Grid container directio='row'>
                        
                            <Grid item xs={5} className={classes.titulo}>
                            Doble Barra
                        </Grid>
                            <Grid item xs={7} >
                                <Divider className={classes.divider} />
                            </Grid>
                           
                        </Grid>
                        <Grid item xs={12} className={classes.texto}>
                        Equipo industrial para el empaque de productos altamente perecederos, de una sola cámara y dos barras de sellado. Ideal para producciones de bajo y medio volumen, estructura en acero inoxidable, compacta para una mesa o con mueble.

                              </Grid>
                    </Grid>

                    </Hidden>
                    <Hidden xsUp>
                    

                    <Grid item sm={6} xs={12}>
                        <Grid container directio='row'>
                        
                            <Grid item xs={5} className={classes.titulo}>
                            Doble Barra

                        </Grid>
                            <Grid item sm={7} xs={12} >
                                <Divider className={classes.divider} />
                            </Grid>
                           
                        </Grid>
                        <Grid item xs={12} className={classes.texto}>
                        Equipo industrial para el empaque de productos altamente perecederos, de una sola cámara y dos barras de sellado. Ideal para producciones de bajo y medio volumen, estructura en acero inoxidable, compacta para una mesa o con mueble.
                               </Grid>
                    </Grid>
                    <Grid container  justify='center' >
                        <img src={DobleBarra} className={classes.imagenPolicromia}></img>
                    </Grid>
                    </Hidden>
                </Grid>

                <Grid container >
                    <Grid item sm={6} xs={12}>
                        <Grid container direction='row' >
                            <Grid item sm={8} xs={12} className={classes.titulo}>
                            Doble Campana
                        </Grid>
                            <Grid item sm={4} xs={12} >
                                <Divider className={classes.divider} />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.texto}>
                        Equipo industrial para el empaque de productos altamente perecederos, de dos cámaras y dos barras de sellado cada una. Ideal para producciones de alto volumen, estructura en acero inoxidable.  </Grid>
                    </Grid>
                    
                    <Grid item sm={6} xs={12}>
                    
                        <img src={DobleCampana} className={classes.imagenEtiquetasTextiles}></img>
                        
                    </Grid>
                </Grid>
            </Container> 
        </div>
    )
}
