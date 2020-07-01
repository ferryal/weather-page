import React, { Component, Fragment } from 'react'
import Navbar from './components/Navigation-Bar';
import WidgetBoard from './components/Widget-Boarding';
import WidgetWeather from './components/Widget-Weather';


class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Fragment>
                <Navbar />
                <WidgetBoard />
                <WidgetWeather />
            </Fragment>
        );
    }
}

export default LandingPage;