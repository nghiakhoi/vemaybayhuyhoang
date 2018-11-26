import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Footer';
import HeaderBooking from '../HeaderBooking';
import domain from '../../router/domain';

const checkUser = (token) =>
    axios.post(domain + '/checktoken', {
        token: token,
    }).then((res) => res.data)
const getAllVungmien = () =>
    axios.post(domain + '/getallvungmien', {
    }).then((res) => res.data)

class AddSanBay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            danhmucvungmien: null,
            image: null,
            vitri: "0",
        }
    }

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
                    getAllVungmien().then((result) => {
                        var tempdata1 = result.data;
                        this.setState({
                            danhmucvungmien: tempdata1,
                            vungmien: result.data[0].id
                        });
                    })
                } else {
                    window.location.replace("/login");
                }
            });
        }
    }

    handleChangeText = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleChangeTextEditorTomTat = (data) => {
        this.setState({
            tomtat: data
        });
    }
    handleChangeTextEditorNoiDung = (data) => {
        this.setState({
            noidung: data
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.post(domain + "/addsanbay", {
            tieude: this.state.tieude,
            code: this.state.code,
            show: this.state.show,
            vungmien: this.state.vungmien,
        }).then((res) => { res.data.result === "ok" ? window.location.replace("/admin/listsanbay") : alert("Thất bại") })
    }

    render() {
        return (
            <React.Fragment>
                <div className="wrapper st-body">
                    <HeaderBooking />
                    <h3 className="iwh-title" style={{ color: '#232323', fontSize: 48, fontFamily: 'Poppins', fontWeight: 300, lineHeight: 1 }}>
                        Thêm chặng bay
                    </h3>
                    <div className="iw-tour-listing" id="contents-main">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Tên</label>
                                            <input onChange={this.handleChangeText.bind(this)} type="text" className="form-control" id="tieude" name="tieude" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Code</label>
                                            <input onChange={this.handleChangeText.bind(this)} type="text" className="form-control" id="code" name="code" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Show in Banner</label>
                                            <input onChange={this.handleChangeText.bind(this)} type="text" className="form-control" id="show" name="show" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Thuộc vùng miền</label>
                                            <select onChange={this.handleChangeText.bind(this)} className="form-control" id="vungmien" name="vungmien">
                                                {
                                                    this.state.danhmucvungmien !== null ? this.state.danhmucvungmien.map((value, key) => {
                                                        return (
                                                            <option key={key} value={value.id}>{value.tenvungmien}</option>
                                                        )
                                                    }) : null
                                                }
                                            </select>
                                        </div>
                                        <button onClick={(event) => { this.handleSubmit(event) }} type="button" className="btn btn-default">Submit</button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

export default AddSanBay;