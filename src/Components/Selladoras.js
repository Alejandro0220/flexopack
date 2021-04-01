import React from 'react';

import { useTheme, makeStyles } from '@material-ui/core/styles';
import Banner from '../Images/Selladoras/Banner.jpg'
import SelladoraBandaContinua from '../Images/Selladoras/SelladoraBandaContinua.jpg'
import SelladoraBandaContinua2 from '../Images/Selladoras/SelladoraBandaContinua2.jpg'
import SelladoraManual from '../Images/Selladoras/SelladoraManual.jpg'
import SelladoraDePedal from '../Images/Selladoras/SelladoraDePedal.jpg'

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
        top:'350px',
        left:'200px',
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
     estiloTitulo:{
        textShadow:'8px 8px 8px #666',
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
    tituloSelladoraBanda: {
        marginTop: '100px',
        color: 'black',
        fontSize: '36px',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        textAlign:'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '32px',

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
    imagenSelladoraBandaContinua: {
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
    imagenSelladoraBandaContinua2: {
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
    imagenSelladoraManual: {
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

    imagenSelladoraDePedal: {
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
}));
const Selladoras = () => {
   
    const classes = useStyles();
    const theme = useTheme();
    return ( 
        <>
             <Grid item xs={12}>
                        <img src={Banner} className={classes.banner}></img>
                        <Grid item xs={12} className={classes.tituloPrincipal}>
                       
                        <p className={classes.estiloTitulo}>Selladoras</p>
                    </Grid>
                    </Grid>
            <Container className={classes.root}>
                <Grid container >
                    <Grid item sm={6} xs={12}>
                        <Grid container direction='row'>
                        <Grid item sm={9} xs={12}className={classes.titulo}>
                        Selladoras Manuales
                        </Grid>
                        <Grid item sm={3} xs={12} >
                            <Divider className={classes.divider} />
                        </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.texto}>
                        Equipos económicos para el sellado en bolsa, debido a su accionamiento tipo impulso, ideal para la industrial pequeña y mediana.
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <img src={SelladoraManual} className={classes.imagenSelladoraManual}></img>
                    </Grid>
                </Grid>
                <Grid container >
                <Hidden xsDown >
                    <Grid item xs={6}>
                        <img src={SelladoraDePedal} className={classes.imagenSelladoraDePedal}></img>
                    </Grid>
                    <Grid item xs={6}>
                       <Grid container direction='row'>
                       <Grid item xs={9} className={classes.titulo}>
                        Selladoras de Pedal
                        </Grid>
                        <Grid item xs={3} >
                            <Divider className={classes.divider} />
                        </Grid>
                       </Grid>
                        <Grid item xs={12} className={classes.texto}>
                        Equipos semi-industriales para el sellado de bolsas plásticas y de papel, contamos con dos tipos de selladoras de Mordaza y de Impulso. Se ajustan a volúmenes pequeños y medianos, fácil operación.
                        </Grid>
                    </Grid>
                    </Hidden>
                    <Hidden xsUp >
                    
                    <Grid item sm={6} xs={12}>
                       <Grid container direction='row'>
                       <Grid item xs={12} sm={9} className={classes.titulo}>
                        Selladoras de Pedal
                        </Grid>
                        <Grid item sm={3} xs={12} >
                            <Divider className={classes.divider} />
                        </Grid>
                       </Grid>
                        <Grid item xs={12} className={classes.texto}>
                        Equipos semi-industriales para el sellado de bolsas plásticas y de papel, contamos con dos tipos de selladoras de Mordaza y de Impulso. Se ajustan a volúmenes pequeños y medianos, fácil operación.
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={SelladoraDePedal} className={classes.imagenSelladoraDePedal}></img>
                    </Grid>
                    </Hidden>
                </Grid>
                <Grid container align='center' justify='center'>
                    <Grid item xs={12}>
                        <Grid container direction='row'>
                        <Grid item sm={6} xs={12} className={classes.tituloSelladoraBanda}>
                        Selladoras Banda Continua
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <Divider className={classes.divider} />
                        </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.texto}>
                        Equipos industriales de alto rendimiento, ideal para el sellado de todo tipo de bolsas a gran escala, aptos para la industria alimentaria y farmacéutica por su construcción en acero inoxidable. Pueden entregarse con un codificador integrado a la máquina. </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={SelladoraBandaContinua} className={classes.imagenSelladoraBandaContinua}></img>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={SelladoraBandaContinua2} className={classes.imagenSelladoraBandaContinua2}></img>
                    </Grid>
                </Grid>
            </Container>

        </>

     );
}
 
export default Selladoras;