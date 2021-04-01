import { Container, Divider, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Banner1 from '../Images/Empresa/banner1.jpg'
import Banner2 from '../Images/Empresa/banner2.jpg'
import Banner3 from '../Images/Empresa/banner3.jpg'
import Banner4 from '../Images/Empresa/banner4.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const imagesPath = [
    {
        imgPath: Banner1,
    },
    {
        imgPath: Banner2,
    },
    {
        imgPath: Banner3,
    },
    {
        imgPath: Banner4,
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
  
        alignItems: 'center',
    },
    img: {
        height: 450,
        [theme.breakpoints.down('sm')]:{
            height:280
        },
        display: 'block',
        
        overflow: 'hidden',
        width: '100%',
        marginBottom:'30px',
    },
    titulo: {
        marginTop: '50px',
        color: 'black',
        fontSize: '74px',
        [theme.breakpoints.down('sm')]:{
            fontSize: '35px',
            alignItems:'center',
        },
        fontFamily: 'Helvetica',
        fontWeight: 'bold',

    },
    divider: {
        marginTop: '50px',
        background: 'black',
    },
    texto: {
        marginTop: '50px',
        fontFamily: 'Futura',
        fontSize: '20px',
        textAlign: 'left',
    }
}));


const Empresa = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = imagesPath.length;

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const classes = useStyles();
    const theme = useTheme();
    return (
        <>

<Grid item xs={12}>
<AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                
            >
                {imagesPath.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <img className={classes.img} src={step.imgPath} />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
</Grid> 
            


            <Container className={classes.root}>
                <Grid container direction='row' alignItems='center' justify="center" >
                    <Grid item xs={12} sm={8} className={classes.titulo}>
                        ¿Quiénes somos?
                </Grid>
                    <Grid item xs={12} sm={4}>
                        <Divider className={classes.divider} />
                    </Grid>
                    <Grid container justify='center' className={classes.texto} >
                        Somos una empresa que ofrece soluciones en etiquetado, codificación y sistemas de empaque para la industria manufacturera de Alimentos y Bebidas, Farmacéutica, Química, Floricultores y Textil.
                        Contamos con un portafolio en tecnologías de codificación y empaque de productos, un amplio catálogo de etiquetas línea blanca y en policromía, cintas térmicas y hot stamping, logrando que todos sus procesos y productos cumplan con la normatividad vigente.
                </Grid>
                </Grid>
            </Container>
        </>

    );
}

export default Empresa;