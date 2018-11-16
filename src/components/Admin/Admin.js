import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Footer';
import HeaderBooking from '../HeaderBooking';

const checkUser = (token) =>
    axios.post('/checktoken', {
        token: token,
    }).then((res) => res.data)

class Admin extends Component {

    componentWillMount() {
        var token = localStorage.getItem("token");
        if (!token) {
            window.location.replace("/login");
        } else {
            checkUser(token).then((result) => {
                if (result.status === true) {
                    localStorage.setItem("token", result.token);
                    localStorage.setItem("userinfo", JSON.stringify(result.data));
                    var checkHasUserToJSON = result.data;
                    this.setState({
                        username: checkHasUserToJSON.username,
                    });

                } else {
                    window.location.replace("/login");
                }
            });
        }
    }

    render() {
        return (
            <div className="wrapper st-body">
                <HeaderBooking />
                <div className="contents-main" id="contents-main">
                    <div className="container">
                        <div className="vc_row wpb_row vc_row-fluid" style={{}}>
                            <div className="container">
                                <div className="row">
                                    <div className="wpb_column vc_column_container vc_col-sm-12">
                                        <div className="vc_column-inner ">
                                            <div className="wpb_wrapper">
                                                <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                                    <div className="wpb_column vc_column_container vc_col-sm-1 vc_hidden-md vc_hidden-sm vc_hidden-xs">
                                                        <div className="vc_column-inner ">
                                                            <div className="wpb_wrapper" />
                                                        </div>
                                                    </div>
                                                    <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-10 vc_col-md-12 vc_col-xs-12">
                                                        <div className="vc_column-inner ">
                                                            <div className="wpb_wrapper">
                                                                <div className="iw-heading  style1 vc_custom_1473754118183 text-center" style={{ width: '100%' }}>
                                                                    <h3 className="iwh-title" style={{ color: '#232323', fontSize: 48, fontFamily: 'Poppins', fontWeight: 300, lineHeight: 1 }}>Chào mừng Admin Vemaybayhuyhoang</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="wpb_column vc_column_container vc_col-sm-1 vc_hidden-md vc_hidden-sm vc_hidden-xs">
                                                        <div className="vc_column-inner ">
                                                            <div className="wpb_wrapper" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1473751760484">
                                                    <div className="wpb_column vc_column_container vc_col-sm-2">
                                                        <div className="vc_column-inner ">
                                                            <div className="wpb_wrapper">
                                                                <div className="iw-item-info  style2 vc_custom_1473751689652">
                                                                    <div className="icon theme-bg" style={{ fontSize: 30 }}><i className="ion-headphone" /></div>
                                                                    <div className="item-info-content">
                                                                        <h3 className="title"><a href="#">Thêm Tin tức</a></h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="wpb_column vc_column_container vc_col-sm-2">
                                                        <div className="vc_column-inner ">
                                                            <div className="wpb_wrapper">
                                                                <div className="iw-item-info  style2 vc_custom_1473751689652">
                                                                    <div className="icon theme-bg" style={{ fontSize: 30 }}><i className="ion-headphone" /></div>
                                                                    <div className="item-info-content">
                                                                        <h3 className="title"><a href="#">Danh Sách Tin Tức</a></h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >

        );
    }
}

export default Admin;