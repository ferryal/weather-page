import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <React.Fragment>
                <div className="wrapper-footer">
                    <div class="nav-footer">
                        <ul>
                            <li>Pricing</li>
                            <li><div className="separator" />Blog</li>
                            <li><div className="separator" />Help</li>
                            <li><div className="separator" />Documentations</li>
                            <li><div className="separator" />iOS SDK</li>
                            <li><div className="separator" />Android SDK</li>
                            <li><div className="separator" />Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="sosmed-footer">
                        <ul>
                            <li>
                                <img src="./../assets/img/SVG/icon-facebook.svg" alt="" />
                                <img src="./../assets/img/SVG/icon-twitter.svg" alt="" />
                                <img src="./../assets/img/SVG/icon-gitlab.svg" alt="" />
                                <img src="./../assets/img/SVG/icon-instagram.svg" alt="" />
                                <img src="./../assets/img/SVG/icon-linkedin.svg" alt="" />

                            </li>
                        </ul>
                    </div>
                    <p className="address">
                        <b>
                        Jl. Kyai Maja No.25c, RT.12/RW.2, Gunung, Kec. Kby. Baru,
                        <br />
                        Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12120
                        </b>
                    </p>
                    <p className="copyright">© 2020 TapTalk.io (PT Tap Talk Teknologi)</p>
                    <img className="icon-copyright" src="./../assets/img/png/copyright.png" alt="" />
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;