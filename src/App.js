import React from 'react';
import {
    Route,
    Switch,
    withRouter
} from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Footer from './navbar/Footer';
import Home from './views/Homepage';
import Kontakt from './views/Kontakt';
import Info from './views/Info';
import Horoskop from './views/Horoskop';
import Horoskopi from './views/Horoskopi';
import TedenskiHoroskopi from './views/TedenskiHoroskopi';
import Mhoroskop from './views/MesecniHoroskop';
import MesecniHoroskopi from './views/MesecniHoroskopi';
import Numerologija from './views/Numerologija';
import NotFound from './views/NotFound';
import './App.css';
import './css/app.css';
import './css/bootstrap.css';

function App() {
    return (
        <div className="App ">
            <div className='container main-container'>
                <Navbar/>
                <div id='content-wrap'>
                    <Switch>
                        <Route
                            path="/" exact
                            component={Home}
                        />
                        <Route
                            path="/kontakt" exact
                            component={Kontakt}
                        />
                        <Route
                            path="/info" exact
                            component={Info}
                        />
                        <Route
                            path="/horoskop/:sign" exact
                            component={Horoskop}
                        />
                        <Route
                            path="/horoskop" exact
                            component={Horoskopi}
                        />
                        <Route
                            path="/tedenski_horoskop" exact
                            component={TedenskiHoroskopi}
                        />
                        <Route
                            path="/mesecni_horoskop/:year/:month" exact
                            component={Mhoroskop}
                        />
                        <Route
                            path="/mesecni_horoskop" exact
                            component={MesecniHoroskopi}
                        />
                        <Route
                            path="/numerologija" exact
                            component={Numerologija}
                        />
                        <Route component={NotFound}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default withRouter(App);
