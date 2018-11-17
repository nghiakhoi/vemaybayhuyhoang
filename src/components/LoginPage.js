import React, { Component } from 'react';
import axios from 'axios';
import Footer from './Footer';
import HeaderBooking from './HeaderBooking';
import domain from '../router/domain';

const submitLogin = (user, pass) =>
    axios.post(domain+'/userlogin', {
        username: user,
        password: pass
    }).then((res) => res.data)

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
        }
    }

    handleSumbitLogin(user, pass) {
        submitLogin(user, pass).then((result) => {
            if (result.status === true) {
                localStorage.setItem("token", result.token);
                localStorage.setItem("userinfo", JSON.stringify(result.data));
                this.setState({
                    username: result.data.username,
                    fullname: result.data.fullname,
                }, function () {
                    window.location.replace("/admin");
                });
            } else {
                alert("Username hoặc Password không đúng");
            }
        });
    }

    handleChange(evt) {
        if (evt.key === 'Enter') {
            this.handleSumbitLogin(this.state.username, this.state.password);
        } else {
            var name = evt.target.name;
            var value = evt.target.value;
            this.setState({
                [name]: value
            });
        }
    }

    render() {
        return (
            <div className="wrapper st-body">
                <HeaderBooking />
                <div className="contents-main" id="contents-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-xs-12 col-lg-12 col-md-12">
                                <article id="post-44" className="post-44 page type-page status-publish hentry">
                                    <div className="entry-content">
                                        <div className="woocommerce">
                                            <h2>Login</h2>
                                            <form className="login woocommerce-login">
                                                <div className="woocommerce-FormRow woocommerce-FormRow--wide form-row form-row-wide">
                                                    <label htmlFor="username" style={{ color: "black" }}>Username or email address <span className="required">*</span></label>
                                                    <input onKeyPress={(e) => { this.handleChange(e) }} onChange={(e) => { this.handleChange(e) }} type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" />
                                                </div>
                                                <div className="woocommerce-FormRow woocommerce-FormRow--wide form-row form-row-wide">
                                                    <label htmlFor="password" style={{ color: "black" }}>Password <span className="required">*</span></label>
                                                    <input onKeyPress={(e) => { this.handleChange(e) }} onChange={(e) => { this.handleChange(e) }} className="woocommerce-Input woocommerce-Input--text input-text" type="password" name="password" id="password" />
                                                </div>
                                                <div className="woocommerce-FormButton form-row">
                                                    <input onClick={() => { this.handleSumbitLogin(this.state.username, this.state.password) }} type="button" className="woocommerce-Button button" name="login" value="Login" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>{/* .entry-content */}
                                    <div className="clearfix" />
                                    <footer className="entry-footer ">
                                    </footer>{/* .entry-footer */}
                                </article>{/* #post-## */}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        );
    }
}

export default LoginPage;