import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Footer';
import HeaderBooking from '../HeaderBooking';
import { Editor } from 'react-draft-wysiwyg';
// import { EditorState } from 'draft-js';
// import { convertFromHTML, convertFromRaw } from 'draft-js';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
import FileBase64 from 'react-file-base64';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import domain from '../../router/domain';

const checkUser = (token) =>
    axios.post(domain + '/checktoken', {
        token: token,
    }).then((res) => res.data)

const getAllDanhmuc = () =>
    axios.post(domain + '/getalldanhmuc', {
    }).then((res) => res.data)

function uploadImageCallBack(file) {
    return new Promise(
        (resolve, reject) => {
            const reader = new FileReader(); // eslint-disable-line no-undef
            reader.onload = e => resolve({ data: { link: e.target.result } });
            reader.onerror = e => reject(e);
            reader.readAsDataURL(file);
        });
}

class AddTinTuc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentStateTomTat: {},
            contentStateNoiDung: {},
            danhmuctintuc: null,
            files: [],
        }
    }

    getFiles = (files) => {
        this.setState({ files: files })
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
                    getAllDanhmuc().then((result) => {
                        var tempdata1 = result.data;
                        this.setState({
                            danhmuctintuc: tempdata1,
                            danhmuc: result.data[0].id
                        });
                    })
                } else {
                    window.location.replace("/login");
                }
            });
        }
    }

    onContentStateChangeTomTat = (contentStateTomTat) => {
        this.setState({
            contentStateTomTat,
        });
    };
    onContentStateChangeNoiDung = (contentStateNoiDung) => {
        this.setState({
            contentStateNoiDung,
        });
    };
    handleChangeText = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.post(domain + "/addtintuc", {
            tieude: this.state.tieude,
            des: this.state.des,
            contentStateTomTat: JSON.stringify(this.state.contentStateTomTat, null, 4),
            contentStateNoiDung: JSON.stringify(this.state.contentStateNoiDung, null, 4),
            keyword: this.state.keyword,
            danhmuc: this.state.danhmuc,
            hinhdaidien: this.state.files.base64,
        }).then((res) => { res.data.result === "ok" ? window.location.replace("/danhsachtintuc") : alert("Thất bại") })
    }

    render() {
        return (
            <React.Fragment>
                <div className="wrapper st-body">
                    <HeaderBooking />
                    <h3 className="iwh-title" style={{ color: '#232323', fontSize: 48, fontFamily: 'Poppins', fontWeight: 300, lineHeight: 1 }}>Thêm Tin Tức</h3>
                    <div className="iw-tour-listing" id="contents-main">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-lg-offset-3">
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
                                            <Editor
                                                toolbarClassName="toolbarClassName"
                                                wrapperClassName="wrapperClassName"
                                                editorClassName="editorClassName"
                                                onContentStateChange={this.onContentStateChangeTomTat}
                                                toolbar={{
                                                    image: {
                                                        uploadCallback: uploadImageCallBack,
                                                        previewImage: true,
                                                    },
                                                }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            Nội dung
                                            <Editor
                                                toolbarClassName="toolbarClassName"
                                                wrapperClassName="wrapperClassName"
                                                editorClassName="editorClassName"
                                                onContentStateChange={this.onContentStateChangeNoiDung}
                                                toolbar={{
                                                    image: {
                                                        uploadCallback: uploadImageCallBack,
                                                        previewImage: true,
                                                    },
                                                }}
                                            />

                                            {/* <div>{(draftToHtml(this.state.contentState))}</div>
                                            {`<p><span style=\"font-size: 10px;font-family: Georgia;\">ss111111ssssss</span></p>\n`}
                                            <div dangerouslySetInnerHTML={{ __html: (draftToHtml(this.state.contentState)) }} /> */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Keyword</label>
                                            <input onChange={this.handleChangeText.bind(this)} type="text" className="form-control" id="keyword" name="keyword" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Thuộc danh mục</label>
                                            <select onChange={this.handleChangeText.bind(this)} className="form-control" id="danhmuc" name="danhmuc">
                                                {
                                                    this.state.danhmuctintuc !== null ? this.state.danhmuctintuc.map((value, key) => {
                                                        return (
                                                            <option key={key} value={value.id}>{value.ten}</option>
                                                        )
                                                    }) : null
                                                }
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputFile">Hình đại diện</label>
                                            <FileBase64
                                                multiple={false}
                                                onDone={this.getFiles.bind(this)} />
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

export default AddTinTuc;