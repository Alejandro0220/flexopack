import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from "../BarraNavegación/index";
import Empresa from '../Components/Empresa';
import Cintas from "../Components/Cintas";
import Codificadoras from '../Components/Codificadoras';
import Contacto from '../Components/Contacto';
import Flexografia from '../Components/Flexografia';
import Impresoras from '../Components/Impresoras';
import Insumos from '../Components/Insumos';
import Selladoras from '../Components/Selladoras';
import EmpaqueAlVacio from '../Components/EmpaqueAlVacio'


const Routes = () => {
    return (
        <Router>
            <Menu>
                <Switch>
                    <Route path="/" exact component={Empresa} />
                    <Route path="/Cintas" exact component={Cintas}/>
                    <Route path="/Codificadoras" exact component={Codificadoras}/>
                    <Route path="/Contacto" exact component={Contacto}/>
                    <Route path="/Etiquetas" exact component={Flexografia}/>
                    <Route path="/Impresoras" exact component={Impresoras}/>
                    <Route path="/Insumos" exact component={Insumos}/>
                    <Route path="/Selladoras" exact component={Selladoras}/>
                    <Route path="/EmpaqueAlVacio" exact component={EmpaqueAlVacio}/>
                </Switch>
            </Menu>
        </Router>
    );
}

export default Routes;