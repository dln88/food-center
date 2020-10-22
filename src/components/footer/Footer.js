import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-bg">
                <div style={{ padding: '30px 0' }} className="container">
                    <ul className="list-unstyled list-inline d-flex justify-content-center">
                        <li className="list-inline-item"><a>About</a></li>
                        <li className="list-inline-item"><a>Movies</a></li>
                        <li className="list-inline-item"><a>Celebraties</a></li>
                        <li className="list-inline-item"><a>News</a></li>
                    </ul>
                    <ul className="list-unstyled list-inline d-flex justify-content-center">
                        <li className="list-inline-item"><a><i className="fab fa-twitter" /></a></li>
                        <li className="list-inline-item"><a><i className="fab fa-facebook-f" /></a></li>
                        <li className="list-inline-item"><a><i className="fab fa-instagram" /></a></li>
                        <li className="list-inline-item"><a><i className="fab fa-google-plus-g" /></a></li>
                        <li className="list-inline-item"><a><i className="fab fa-youtube" /></a></li>
                    </ul>
                    <p style={{ color: 'aliceblue' }} className="text-center">© Copyright 2019 HD Team - All Rights Reserved</p>
                </div>
            </footer>

        );
    }
}

export default Footer;