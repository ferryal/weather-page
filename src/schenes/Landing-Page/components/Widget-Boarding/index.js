import React, { Component } from 'react'


class WidgetBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="wrapper-board">
                <div className="text-board">
                    <span>Omnichannel Messaging Platform for sales, marketing and support</span>
                    <p>Elevate your customer engagement experience by allowing your customers to reach you from WhatsApp, Twitter, FB Messenger, Telegram. LINE and email, and also easily manage it from a single  dashboard</p>
                </div>
                <div className="wrapper-btn">
                    <button className="btn-pricing">See Pricing</button>
                    <button className="btn-register">Get Started Now!</button>
                </div>
                <img src="./../assets/img/png/img-boarding.png" alt="" className="img-boarding"/>
            </div>
        );
    }
}

export default WidgetBoard;