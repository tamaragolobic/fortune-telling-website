import React from 'react';
import {
    Route,
    Switch,
    withRouter
} from 'react-router-dom';
import Navbar from './extras/Navbar';
import Footer from './extras/Footer';
import Home from './views/Homepage';
import ContactPage from './views/ContactPage';
import Info from './views/Info';
import Horoscope from './views/Horoscope';
import Horoscopes from './views/Horoscopes';
import WeeklyHoroscopes from './views/WeeklyHoroscopes';
import MonthlyHoroscope from './views/MonthlyHoroscope';
import MonthlyHoroscopes from './views/MonthlyHoroscopes';
import NameMeaning from './views/NameMeaning';
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
                        <Route path="/"
                               exact
                               component={Home}
                        />
                        <Route path="/kontakt"
                               exact
                               component={ContactPage}
                        />
                        <Route path="/info"
                               exact
                               component={Info}
                        />
                        <Route path="/horoskop/splosni"
                               exact
                               component={Horoscopes}
                        />
                        <Route path="/horoskop/splosni/:sign"
                               exact
                               component={Horoscope}
                        />
                        <Route path="/horoskop/tedenski"
                               exact
                               component={WeeklyHoroscopes}
                        />
                        <Route path="/horoskop/mesecni/:year/:month"
                               exact
                               component={MonthlyHoroscope}
                        />
                        <Route path="/horoskop/mesecni"
                               exact
                               component={MonthlyHoroscopes}
                        />
                        <Route path="/pomen_imena"
                               exact
                               component={NameMeaning}
                        />
                        <Route path="/numerologija"
                               exact
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
