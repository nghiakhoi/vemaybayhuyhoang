import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Footer';
import HeaderBooking from '../HeaderBooking';
import domain from '../../router/domain';
import CKEditor from "./CKEditor";

var imageselected = null;

const checkUser = (token) =>
    axios.post(domain + '/checktoken', {
        token: token,
    }).then((res) => res.data)

function selectFileWithCKFinder(elementId, callback) {
    window.CKFinder.popup({
        chooseFiles: true,
        width: 800,
        height: 600,
        onInit: function (finder) {
            finder.on('files:choose', function (evt) {
                var file = evt.data.files.first();
                var output = document.getElementById(elementId);
                console.log(file.getUrl());
                output.value = file.getUrl();
                imageselected = output.value
                callback(imageselected);
            });

            finder.on('file:choose:resizedImage', function (evt) {
                var output = document.getElementById(elementId);
                output.value = evt.data.resizedUrl;
                imageselected = output.value
                callback(imageselected);
            });
        }
    });
}

class AddTinKhuyenMai extends Component {
    constructor(props) {
        super(props);
        this.state = {
            danhmuctintuc: null,
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
        axios.post(domain + "/addtinkhuyenmai", {
            tieude: this.state.tieude,
            des: this.state.des,
            contentStateTomTat: this.state.tomtat,
            contentStateNoiDung: this.state.noidung,
            keyword: this.state.keyword,
            vitri: this.state.vitri,
            hinhdaidien: this.state.image,
        }).then((res) => { res.data.result === "ok" ? window.location.replace("/admin/listtinkhuyenmai") : alert("Thất bại") })
    }

    render() {
        return (
            <React.Fragment>
                <div className="wrapper st-body">
                    <HeaderBooking />
                    <h3 className="iwh-title" style={{ color: '#232323', fontSize: 48, fontFamily: 'Poppins', fontWeight: 300, lineHeight: 1 }}>
                        Thêm Tin Khuyến Mãi
                    </h3>
                    <div className="iw-tour-listing" id="contents-main">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Tiêu đề</label>
                                            <input onChange={this.handleChangeText.bind(this)} type="text" className="form-control" id="tieude" name="tieude" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Description</label>
                                            <textarea onChange={this.handleChangeText.bind(this)} className="form-control" id="des" name="des"></textarea>
                                        </div>

                                        <div className="form-group">
                                            Mô tả ngắn
                                            <CKEditor id="motangan" value={this.props.value} onChange={this.handleChangeTextEditorTomTat} />
                                        </div>
                                        <div className="form-group">
                                            Nội dung
                                            <CKEditor id="noidung" value={this.props.value} onChange={this.handleChangeTextEditorNoiDung} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Keyword</label>
                                            <input onChange={this.handleChangeText.bind(this)} type="text" className="form-control" id="keyword" name="keyword" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Vị trí</label>
                                            <input onChange={this.handleChangeText.bind(this)} type="text" defaultValue="0" className="form-control" id="vitri" name="vitri" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputFile">Hình đại diện</label>
                                            <input id="ckfinder-input-1" onChange={(event) => { this.handleChangeText(event) }} name="image" type="text" style={{ "width": "60%" }} />
                                            <button onClick={(event) => {
                                                event.preventDefault();
                                                selectFileWithCKFinder('ckfinder-input-1', (imageselected) => {
                                                    //return imageselected
                                                    this.setState({
                                                        image: imageselected
                                                    });
                                                });
                                            }} id="ckfinder-popup-1" className="button-a button-a-background">Browse Server</button>
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

export default AddTinKhuyenMai;