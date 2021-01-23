import React from 'react';
import {
    Route,
    Switch,
    withRouter
} from 'react-router-dom';
import Navbar from './extras/Navbar';
import Footer from './extras/Footer';
import Home from './views/Homepage';
import Contact from './views/Contact';
import Info from './views/Info';
import Horoscope from './views/Horoscope';
import Horoscopes from './views/Horoscopes';
import WeeklyHoroscopes from './views/WeeklyHoroscopes';
import MonthlyHoroscope from './views/MonthlyHoroscope';
import MonthlyHoroscopes from './views/MonthlyHoroscopes';
import Numerology from './views/Numerology';
import NotFound from './views/NotFound';
import './App.css';

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
                            component={Contact}
                        />
                        <Route
                            path="/info" exact
                            component={Info}
                        />
                        <Route
                            path="/horoskop/:sign" exact
                            component={Horoscope}
                        />
                        <Route
                            path="/horoskop" exact
                            component={Horoscopes}
                        />
                        <Route
                            path="/tedenski_horoskop" exact
                            component={WeeklyHoroscopes}
                        />
                        <Route
                            path="/mesecni_horoskop/:year/:month" exact
                            component={MonthlyHoroscope}
                        />
                        <Route
                            path="/mesecni_horoskop" exact
                            component={MonthlyHoroscopes}
                        />
                        <Route
                            path="/numerologija" exact
                            component={Numerology}
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
