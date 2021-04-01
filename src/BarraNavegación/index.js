import React, { useState, Fragment, useCallback } from 'react';
import { Button, Container, Grid, Typography, Hidden, IconButton, Menu, MenuItem, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons'
import ImgLogo from '../Images/logo.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        lineHeight: '26px',
        marginTop: '10px',
        marginBottom: '10px',

    },
    barraNavegacion: {
        width: 850,
        textAlign: 'center',

    },
    botonNavegacion: {
        color: 'black',
        fontSize: '14px',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',

    },
    footerFont: {
        fontSize: '16px',
        fontFamily: 'Futura',
        fontWeight: 'bold',

    },
    footer: {
        marginTop: '50px',
    }

});


function BarraNavegacion({ children }) {
    const classes = useStyles();
    const [value, setValue] = useState(0)
    const [anchorEl, setAnchorEl] = useState();

    const [openMenuProfile, setOpenMenuProfile] = useState(false);


    const handleChange = (newValue) => { setValue(newValue) }

    const toggleProfile = useCallback(() => {
        setOpenMenuProfile(!openMenuProfile);
    }, [openMenuProfile]);

    const handleProfile = useCallback((e) => {
        setAnchorEl(e.currentTarget);
    }, []);


    return (
        <Fragment>
            <Container className={classes.root}>

                <Grid container direction='row' alignItems='center'>
                    <Hidden mdDown>
                        <Grid item xs={2}>
                            <img src={ImgLogo} height='115px' />
                            
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container justify='space-evenly'>
                                <Grid item >
                                    <Button >
                                        <Link className={classes.botonNavegacion} style={{ textDecoration: 'none' }} to="/">
                                            INICIO
                                </Link>
                                    </Button>
                                </Grid>
                                <Grid item >
                                    <Button >
                                        <Link className={classes.botonNavegacion} style={{ textDecoration: 'none' }} to="/Etiquetas">
                                            ETIQUETAS
                                </Link>
                                    </Button>
                                </Grid>
                                <Grid item >
                                    <Button >
                                        <Link className={classes.botonNavegacion} style={{ textDecoration: 'none' }} to="/Cintas">
                                            CINTAS
                                </Link>
                                    </Button>
                                </Grid>
                                <Grid item >
                                    <Button >
                                        <Link className={classes.botonNavegacion} style={{ textDecoration: 'none' }} to="/Impresoras">
                                            IMPRESORAS
                                </Link>
                                    </Button>
                                </Grid>
                                <Grid item >
                                    <Button >
                                        <Link className={classes.botonNavegacion} style={{ textDecoration: 'none' }} to="/Selladoras">
                                            SELLADORAS
                                </Link>
                                    </Button>
                                </Grid>
                                <Grid item >
                                    <Button>
                                        <Link className={classes.botonNavegacion} style={{ textDecoration: 'none' }} to="/Codificadoras">
                                            CODIFICADORAS
                                </Link>
                                    </Button>
                                </Grid>
                                <Grid item >
                                    <Button>
                                        <Link className={classes.botonNavegacion} style={{ textDecoration: 'none' }} to="/EmpaqueAlVacio">
                                            EMPAQUE AL VACÍO
                                </Link>
                                    </Button>
                                </Grid>
                                <Grid item >
                                    <Button>
                                        <Link className={classes.botonNavegacion} style={{ textDecoration: 'none' }} to="/Insumos">
                                            INSUMOS
                                </Link>
                                    </Button>
                                </Grid>
                                <Grid item >
                                    <Button >
                                        <Link className={classes.botonNavegacion} style={{ textDecoration: 'none' }} to="/Contacto">
                                            CONTACTO
                                </Link>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Hidden lgUp>
                        <Grid container direction='row' justify='space-between'>

                            <Grid item xs={2} style={{ marginBottom: '10px' }} >
                                <IconButton onClick={(e) => {
                                    toggleProfile()
                                    handleProfile(e)
                                }}>
                                    <MenuIcon />
                                </IconButton>
                                <Menu anchorEl={anchorEl} open={openMenuProfile} onClose={toggleProfile}>
                                    <Box display='flex' flexDirection='column' justifyContent='center'>
                                        <Box>
                                            <MenuItem>
                                                <Link to='/' onClick={() => { toggleProfile() }} style={{ textDecoration: 'none', color: 'black' }}>
                                                INICIO
                                                </Link>
                                            </MenuItem>
                                            <MenuItem>
                                                <Link to='/Etiquetas' onClick={() => { toggleProfile() }} style={{ textDecoration: 'none', color: 'black' }}>
                                                    ETIQUETAS
                                                </Link>
                                            </MenuItem>
                                            <MenuItem>
                                                <Link to='/Cintas' onClick={() => { toggleProfile() }} style={{ textDecoration: 'none', color: 'black' }}>
                                                    CINTAS
                                                </Link>
                                            </MenuItem>
                                            <MenuItem>
                                                <Link to='/Impresoras' onClick={() => { toggleProfile() }} style={{ textDecoration: 'none', color: 'black' }}>
                                                    IMPRESORAS
                                                </Link>
                                            </MenuItem>
                                            <MenuItem>
                                                <Link to='/Selladoras' onClick={() => { toggleProfile() }} style={{ textDecoration: 'none', color: 'black' }}>
                                                    SELLADORAS
                                                </Link>
                                            </MenuItem>
                                            <MenuItem>
                                                <Link to='/Codificadoras' onClick={() => { toggleProfile() }} style={{ textDecoration: 'none', color: 'black' }}>
                                                    CODIFICADORAS
                                                </Link>
                                            </MenuItem>
                                            <MenuItem>
                                                <Link to='/Insumos' onClick={() => { toggleProfile() }} style={{ textDecoration: 'none', color: 'black' }}>
                                                    INSUMOS
                                                </Link>
                                            </MenuItem>
                                            <MenuItem>
                                                <Link to='/Contacto' onClick={() => { toggleProfile() }} style={{ textDecoration: 'none', color: 'black' }}>
                                                    CONTACTO
                                                </Link>
                                            </MenuItem>
                                        </Box>
                                    </Box>
                                </Menu>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant='h5'>Flexopack</Typography>

                            </Grid>
                            <Grid item xs={2}>
                                <img src={ImgLogo} height='40px' />
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Grid item xs={12}>
                        {children}
                    </Grid>
                </Grid>

                <Grid container alignItems='center' direction='column' className={classes.footer}>
                    <Grid item className={classes.footerFont} >Dirección Calle 36 # 93A 28</Grid>
                    <Grid item className={classes.footerFont}>Medellín - Colombia</Grid>
                    <Grid item className={classes.footerFont}>(+57) - 301 422 01 39 - 3003937705</Grid>
                </Grid>



            </Container>
        </Fragment>
    );
}

export default BarraNavegacion;