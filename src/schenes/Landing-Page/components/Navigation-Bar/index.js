import React, { Component } from 'react';

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <nav>
            <ul className="menu">
                <li className="logo"><img src="./../assets/img/png/logotype.png" alt="logo" className="logo-img" /></li>
                <li className="item has-submenu">
                    <a tabindex="0" className="has-nav">Features</a>
                    <ul className="submenu">
                        <li className="subitem"><a href="#">Freelancer</a></li>
                        <li className="subitem"><a href="#">Startup</a></li>
                        <li className="subitem"><a href="#">Enterprise</a></li>
                    </ul>
                </li>
                <li className="item"><a href="#" className="has-nav">Pricing</a></li>
                <li className="item has-submenu">
                    <a tabindex="0" className="has-nav">Developer</a>
                    <ul className="submenu">
                        <li className="subitem"><a href="#">Design</a></li>
                        <li className="subitem"><a href="#">Development</a></li>
                        <li className="subitem"><a href="#">SEO</a></li>
                        <li className="subitem"><a href="#">Copywriting</a></li>
                    </ul>
                </li>
                <li className="item"><a href="#" className="has-nav">Blog</a></li>
                <li className="item"><a href="#" className="has-nav">Help</a></li>
                <li className="item"><a href="#" className="has-nav">Contact</a>
                </li>
                <li className="item button"><a href="#" className="btn-pricing">Log In</a></li>
                <li className="item button secondary"><a href="#" className="btn-register">Get Started</a></li>
                <li className="toggle"><a href="#"><i className="fas fa-bars"></i></a></li>
            </ul>
        </nav>
        );
    }
}

export default NavigationBar;
