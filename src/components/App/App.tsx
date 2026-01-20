import type {FC} from 'react';
import {useEffect, Fragment} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ReactGA from 'react-ga4';

import {Home} from '@/components/Home';
import {About} from '@/components/About';
import {config} from '@/config';

const App: FC = () => {
    useEffect(() => {
        if (config.gaId) {
            ReactGA.initialize(config.gaId);
        }
    }, []);
    useEffect(() => {
        if (config.gaId) {
            ReactGA.send({hitType: 'pageview', page: window.location.pathname, title: window.document.title});
        }
    }, []);
    return (
        <Fragment>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </Fragment>
    );
};

export default App;
