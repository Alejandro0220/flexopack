import React from 'react';

import { useTheme, makeStyles } from '@material-ui/core/styles';
import Banner from '../Images/Codificadoras/banner.jpg'
import Manual from '../Images/Codificadoras/manual.jpg'
import Semiautomatica from '../Images/Codificadoras/Semiautomatica.jpg'
import Thermaltransfer from '../Images/Codificadoras/Thermaltransfer.jpg'
import { Container, Divider, Grid, Hidden } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {

        alignItems: 'center',
    },
    banner:{
        width: '100%',
        height: '400px',
        [theme.breakpoints.down('sm')]: {
            height: 280
        },
    },
    tituloPrincipal: {
        position:'absolute',
        top:'230px',
        left:'200px',
         color: 'white',
         fontSize: '74px',
         fontFamily: 'Helvetica',
         fontWeight: 'bold',
         [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
            top: '140px',
            left: '60px',
        },
     },
    titulo: {
        marginTop: '100px',
        color: 'black',
        fontSize: '36px',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',

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
        marginTop: '50px',
        fontFamily: 'Futura',
        fontSize: '20px',
        textAlign: 'left',

    },
    imagenManual: {
        width: '70%',
        height: '300px',
        marginTop: '100px',
        float:'left',
        [theme.breakpoints.down('sm')]: {
            float: 'none',
            marginTop: '70px',
            display: 'block',
            margin: 'auto'
        },
    },
    imagenSemiautomatica: {
        width: '70%',
        height: '300px',
        marginTop: '100px',
        float:'right',
        [theme.breakpoints.down('sm')]: {
            float: 'none',
            marginTop: '70px',
            display: 'block',
            margin: 'auto'
        },
    },
    imagenThermaltransfer: {
        width: '70%',
        height: '300px',
        marginTop: '100px',
        float:'right',
        [theme.breakpoints.down('sm')]: {
            float: 'none',
            marginTop: '70px',
            display: 'block',
            margin: 'auto'
        },
    },
}));
const Codificadoras = () => {
   
    const classes = useStyles();
    const theme = useTheme();
    return ( 
        <>
           
           <Grid item xs={12}>
                        <img src={Banner} className={classes.banner}></img>
                        <Grid item xs={12} className={classes.tituloPrincipal}>
                       
                        <p className={classes.estiloTitulo}>Codificadoras</p>
                    </Grid>
                    </Grid>
            <Container className={classes.root}>
                <Grid container >
                    <Grid item xs={12} sm={6}>
                        <Grid container direction='row'>
                        <Grid item xs={8} className={classes.titulo}>
                        Thermal Transfer
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Divider className={classes.divider} />
                        </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.texto}>
                        Equipos de alta tecnología para ensamblar en sistemas automáticos tales como: Flow Pack, Empacadoras Verticales tipo Sachet entre otras.
                           </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={Thermaltransfer} className={classes.imagenThermaltransfer}></img>
                    </Grid>
                </Grid>
                <Grid container >
                <Hidden xsDown>
                    <Grid item xs={12} sm={6}>
                        <img src={Manual} className={classes.imagenManual}></img>
                    </Grid>
                    <Grid item xs={6}>
                    <Grid container direction='row'>
                    <Grid item xs={9} className={classes.titulo}>
                        Codificador Manual
                        </Grid>
                        <Grid item xs={3} >
                            <Divider className={classes.divider} />
                        </Grid>
                    </Grid>
                        
                        <Grid item xs={12} className={classes.texto}>
                        Equipo económico de accionamiento manual, ideal para la impresión a calor de Lote y Vence en la pequeña y mediana industria, fácil de operar.
                        </Grid>
                    </Grid>
                    </Hidden>
                    <Hidden xsUp>
                    
                    <Grid item xs={12} sm={6}>
                    <Grid container direction='row'>
                    <Grid item xs={12} sm={9} className={classes.titulo}>
                        Codificador Manual
                        </Grid>
                        <Grid item xs={12} sm={3} >
                            <Divider className={classes.divider} />
                        </Grid>
                    </Grid>
                        
                        <Grid item xs={12} className={classes.texto}>
                        Equipo económico de accionamiento manual, ideal para la impresión a calor de Lote y Vence en la pequeña y mediana industria, fácil de operar.
                        </Grid>
                        
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={Manual} className={classes.imagenManual}></img>
                    </Grid>
                    </Hidden>
                </Grid>
                <Grid container >
                    <Grid item sm={6} xs={12}>
                        <Grid container direction='row'>
                        <Grid item xs={12} sm={11} className={classes.titulo}>
                        Codificador Semiautomático
                        </Grid>
                        <Grid item xs={12} sm={1} >
                            <Divider className={classes.divider} />
                        </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.texto}>
                        Equipo industrial para la impresión a calor de Lote y Vence en escalas medias y altas, cuenta con dos alternativas de manejo, manual a través de un pedal o automático controlado por un sensor. Fácil de operar.
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <img src={Semiautomatica} className={classes.imagenSemiautomatica}></img>
                    </Grid>
                </Grid>
            </Container>

        </>

     );
}
 
export default Codificadoras;