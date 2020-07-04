import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from './components/Navigation-Bar';
import WidgetBoard from './components/Widget-Boarding';
import WidgetWeather from './components/Widget-Weather';
import WidgetFeatures from './components/Widget-Features';
import WidgetFooter from './components/Footer'
import { fetchIP, fetchWeather } from './../../actions/weather';


class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount() {
        this.props.fetchIP();
    }

    render() {
        return (
            <Fragment>
                <Navbar />
                <WidgetBoard />
                <WidgetWeather data={this.props.data} />
                <WidgetFeatures />
                <WidgetFooter />
            </Fragment>
        );
    }
}

LandingPage.propTypes = {
    fetchIP: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    fetchWeather: PropTypes.func.isRequired
}

const mapStatetoProps = state => ({
    data: state.weather
});

const mapDispatchToProps = {
    fetchIP, fetchWeather
};

export default connect(mapStatetoProps, mapDispatchToProps)(LandingPage);