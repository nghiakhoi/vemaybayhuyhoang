import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import FileBase64 from 'react-file-base64';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Button, Modal, Checkbox, Radio, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import FieldGroup from './FieldGroup';
import PeopleItem from '../PeopleItem';
import SummaryChuyenBayItem from '../SummaryChuyenBayItem';
import axios from 'axios';
import domain from '../../router/domain';

const getTintucById = (id) =>
  axios.post(domain + '/getalltintucbyid', {
    id: id
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

class MyLargeModalTinTuc extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAnhieninfo = this.handleAnhieninfo.bind(this);
    //this.redirectToInputInfo = this.redirectToInputInfo.bind(this);

    this.state = {
      show: false,
      anhieninfo: false,
      donhang: [],
      contentStateTomTat: {},
      contentStateNoiDung: {},
      danhmuctintuc: null,
      files: [],
      id: this.props.product.id,
      tieude: this.props.product.tieude,
      des: this.props.product.des,
      motangan: this.props.product.motangan,
      noidung: this.props.product.noidung,
      keyword: this.props.product.keyword,
      hinhdaidien: this.props.product.hinhdaidien,
      iddanhmuc: this.props.product.iddanhmuc,
    };
  }

  getFiles = (files) => {
    this.setState({ files: files })
  }


  componentWillMount() {

  }

  handleProductTable(evt) {
    //var mangtemp = this.state.donhang;
    // var item = {
    //   id: evt.target.id,
    //   name: evt.target.name,
    //   value: evt.target.value
    // };

    // var products = this.state.donhang.slice();
    // var newProducts = products.map(function (product) {
    //   for (var key in product) {
    //     if (key === item.name && product.id === item.id) {
    //       product[key] = item.value;
    //     }
    //   }
    //   return product;
    // });
    // this.setState({ donhang: newProducts });
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

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


  handleAnhieninfo() {
    this.setState({ anhieninfo: !this.state.anhieninfo });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    getTintucById(this.props.iddonhang).then((result) => {
      this.setState({
        donhang: result.data,
        show: true,
      });
    });
    getAllDanhmuc().then((result) => {
      var tempdata1 = result.data;
      this.setState({
        danhmuctintuc: tempdata1,
        danhmuc: result.data[0].id
      });
    })
  }
  onDeleteClick() {
    if (window.confirm('Chắc chắn xóa?')) {
      axios.post(domain + "/deletetintucbyid", {
        idtintuc: this.state.id
      }).then((res) => { res.data.result === "ok" ? this.deleteAndAlert() : alert("Thất bại") })
    }
  }

  handlesubmitform() {
    axios.post(domain + "/edittintucbyid", {
      idtintuc: this.state.id,
      tieude: this.state.tieude,
      des: this.state.des,
      contentStateTomTat: Object.keys(this.state.contentStateTomTat).length === 0 ? this.props.product.motangan : JSON.stringify(this.state.contentStateTomTat, null, 4),
      contentStateNoiDung: Object.keys(this.state.contentStateNoiDung).length === 0 ? this.props.product.noidung : JSON.stringify(this.state.contentStateNoiDung, null, 4),
      keyword: this.state.keyword,
      danhmuc: this.state.danhmuc,
      hinhdaidien: this.state.files.length !== 0 ? this.state.files.base64 : this.state.hinhdaidien,
    }).then((res) => { res.data.result === "ok" ? this.closeModalAndAlert() : alert("Thất bại") })
  }

  closeModalAndAlert() {
    alert("Sửa thành công!");
    this.props.getAgainData();
    this.setState({ show: false });
  }
  deleteAndAlert() {
    alert("Xóa thành công!");
    this.props.getAgainData();
  }

  render() {
    return (
      <div>

        <Button style={{ marginRight: "5px" }} bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          <i className="fa fa-edit"></i>
        </Button>
        <Button style={{ marginRight: "5px" }} bsStyle="danger" bsSize="large" onClick={this.onDeleteClick.bind(this)}>
          <i className="fa fa-trash"></i>
        </Button>

        <Modal bsSize="large"
          aria-labelledby="contained-modal-title-lg" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <h2>Thông tin Đơn hàng số {this.props.iddonhang}</h2>
            <h2>Tên {this.state.donhang.length !== 0 ? this.state.donhang[0].tieude : ""}</h2>

          </Modal.Header>
          <Modal.Body>

            <form>
              <FieldGroup
                id={this.state.donhang.length !== 0 ? this.state.donhang[0].id : ""}
                name="tieude"
                type="text"
                label="Tiêu đề"
                defaultValue={this.state.donhang.length !== 0 ? this.state.donhang[0].tieude : ""}
                onChange={(evt) => { this.handleProductTable(evt) }}
              />

              <FormGroup controlId={this.state.donhang.length !== 0 ? this.state.donhang[0].id : ""}>
                <ControlLabel>Description</ControlLabel>
                <FormControl name="des" defaultValue={this.state.donhang.length !== 0 ? this.state.donhang[0].des : ""} componentClass="textarea" onChange={(evt) => { this.handleProductTable(evt) }} />
              </FormGroup>
              Mô tả ngắn
              <Editor
                initialContentState={this.state.donhang.length !== 0 ? JSON.parse(this.state.donhang[0].motangan) : ""}
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
              <br />
              Nội dung
              <Editor
                initialContentState={this.state.donhang.length !== 0 ? JSON.parse(this.state.donhang[0].noidung) : ""}
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

              <FieldGroup
                id={this.state.donhang.length !== 0 ? this.state.donhang[0].id : ""}
                name="keyword"
                type="text"
                label="Keyword"
                defaultValue={this.state.donhang.length !== 0 ? this.state.donhang[0].keyword : ""}
                onChange={(evt) => { this.handleProductTable(evt) }}
              />

              <FormGroup controlId="iddanhmuc" controlname="iddanhmuc">
                <ControlLabel>Danh mục</ControlLabel>
                <FormControl name="iddanhmuc" onChange={(evt) => { this.handleProductTable(evt) }} defaultValue={this.state.donhang.length !== 0 ? this.state.donhang[0].iddanhmuc : ""} componentClass="select" placeholder="Status">
                  {
                    this.state.danhmuctintuc !== null ? this.state.danhmuctintuc.map((value, key) => {
                      return (
                        <option key={key} value={value.id}>{value.ten}</option>
                      )
                    }) : null
                  }
                </FormControl>
              </FormGroup>
              <FormGroup controlId="hinhdaidien" controlname="hinhdaidien">
                <ControlLabel>Hình đại diện</ControlLabel>
                <FileBase64
                  multiple={false}
                  onDone={this.getFiles.bind(this)} />
              </FormGroup>
            </form>

          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.handlesubmitform.bind(this)}>Sửa</Button>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div >
    );
  }
}

export default MyLargeModalTinTuc;