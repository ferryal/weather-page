import React, { Component } from 'react'


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <React.Fragment>
                <div className="wrapper-feature-content-1">
                    <div className="inbox-feature">
                        <b>INBOX</b>
                        <p className="tagline">All-in-one Inbox</p>
                        <p className="tagline-desc">Equip your agents with the best tools to give your customers a world-class customer engagement experience</p>
                        <p className="link">Learn More About Our Features</p>
                    </div>
                    <div className="inbox-screen">
                        <img className="" alt="" src="./../assets/img/png/inbox-screen.png" />
                        <img className="shape-1" alt="" src="./../assets/img/svg/Shape-2.svg" />
                    </div>
                </div>
                <div className="wrapper-feature-content-2">
                    <div><img className="disposition-screen" alt="" src="./../assets/img/png/disposition.png" /></div>
                    <div className="disposition-feature">
                        <b>DISPOSITION</b>
                        <p className="tagline">Generate Business Insight Through Disposition</p>
                        <p className="tagline-desc">Create and compile Disposition from every case to help you gain a business insight about what your customers say.</p>
                        <p className="link">Learn More About Our Features <img alt="" src="./../assets/img/SVG/icon-left-arrow.svg" /></p>
                    </div>
                </div>
                <div className="wrapper-feature-content-3">
                    <div className="user-sync-feature">
                        <b>USER SESSION SYNC</b>
                        <p className="tagline">User Session Synchronisation</p>
                        <p className="tagline-desc">Speeding up the workflow by helping your customers to start a conversation with you. Once your customers has logged in and need to get in touch with you, they don’t need to fill their information again.</p>
                        <p className="link">Learn More About Our Features <img alt="" src="./../assets/img/SVG/icon-left-arrow.svg" /></p>
                    </div>
                    <div className="user-sync-screen"><img alt="" src="./../assets/img/png/user-sync.png" /></div>
                </div>
                <div className="other-feature">
                    <div className="title"><b>Explore our other features!</b></div>
                    <div className="wrapper-explore">
                        <img src="./../assets/img/SVG/icon-clock.svg" alt="" />
                        <p className="title">Office Hours & Automated Messages</p>
                        <p className="description">Let your customers know when your agents are available to chat and respond with automated messages outside of the office hours.</p>
                    </div>
                    <div className="wrapper-explore">
                        <img src="./../assets/img/SVG/icon-tag.svg" alt="" />
                        <p className="title">Topics</p>
                        <p className="description">Assign incoming cases to agents based on their departments.</p>
                    </div>
                    <div className="wrapper-explore">
                        <img src="./../assets/img/SVG/icon-star.svg" alt="" />
                        <p className="title">Customer Ratings</p>
                        <p className="description">Measure the quality of your customer service by allowing your customers to rate their customer service experience.</p>
                    </div>
                    <p className="learn-more-home-explore">Learn More About Our Features</p>
                </div>
                <div className="interested">
                    <p>We’d love to talk about how we can work together. Interested?</p>
                    <button className="btn-see-pricing">See Pricing</button>
                    <button className="btn-try">Try for Free</button>
                </div>
            </React.Fragment>
        );
    }
}

export default index;