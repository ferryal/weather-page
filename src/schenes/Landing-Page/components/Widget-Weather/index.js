import React, { Component } from 'react';
import moment from 'moment';


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const { weather, publicIP } = this.props.data;
        const day = moment().format('dddd');
        const date = moment().format('DD MMMM YYYY')
        return (
           <div className="wrapper-weather">
                <div className="wrapper-title">
                    <p className="location">{publicIP.city}, {publicIP.country_name}</p>
                    <span className="location">{day}, {date}</span>
                </div>
                { weather.weather ? weather.weather.map((data) => {
                    return (
                        <React.Fragment>
                            <div>
                                <p className="f-grey">{data.main}</p>
                                <br />
                                <p className="temp-weather">{Math.round(weather.main.temp)}</p>
                                <br />
                                <p className="temp-desc">{data.description}</p>
                            </div>
                            <div className="wrapper-condition">
                            <div className="m-15">
                                <p className="f-grey">Min.</p>
                                <p className="f-bold">{Math.round(weather.main.temp_min)}</p>
                            </div>
                            <div className="m-15">
                                <p className="f-grey">Max.</p>
                                <p className="f-bold">{Math.round(weather.main.temp_max)}</p>
                            </div>
                            <div className="m-15">
                                <p className="f-grey">Feels like</p>
                                <p className="f-bold">{Math.round(weather.main.feels_like)}</p>
                            </div>
                            <div className="m-15">
                                <p className="f-grey">Pressure</p>
                                <p className="f-bold">{weather.main.pressure}hPa</p>
                            </div>
                            <div className="m-15">
                                <p className="f-grey">Humidity</p>
                                <p className="f-bold">{weather.main.humidity}%</p>
                            </div>
                        </div> 
                        </React.Fragment>
                    )
                }) : ''}
                  
           </div> 
        );
    }
}

export default index;