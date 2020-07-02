import React, { Component } from 'react'


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="wrapper-feature">
                <div className="inbox-feature">
                    <h6>INBOX</h6>
                    <p className="tagline">All-in-one Inbox</p>
                    <p className="tagline-desc">Equip your agents with the best tools to give your customers a world-class customer engagement experience</p>
                    <p className="link">Learn More About Our Features</p>
                </div>
                <div>
                    <img className="inbox-screen" alt="" src="./../assets/img/png/inbox-screen.png" />
                </div>
            </div>
        );
    }
}

export default index;