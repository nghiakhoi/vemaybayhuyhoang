import React, { Component } from 'react';
import { Button, Modal, Checkbox, Radio, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import FieldGroup from './FieldGroup';
import axios from 'axios';
import domain from '../../router/domain';
import CKEditor from "./CKEditor";

var imageselected = null;

const getTinkhuyenmaiById = (id) =>
  axios.post(domain + '/getalltinkhuyenmaibyid', {
    id: id
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

class MyLargeModalTinKhuyenMai extends Component {
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
      files: [],
      id: this.props.product.id,
      tieude: this.props.product.tieude,
      des: this.props.product.des,
      motangan: this.props.product.motangan,
      noidung: this.props.product.noidung,
      keyword: this.props.product.keyword,
      vitri: this.props.product.vitri,
      hinhdaidien: this.props.product.hinhdaidien,
    };
  }

  handleProductTable(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleAnhieninfo() {
    this.setState({ anhieninfo: !this.state.anhieninfo });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    getTinkhuyenmaiById(this.props.iddonhang).then((result) => {
      this.setState({
        donhang: result.data,
        show: true,
      });
    });
  }
  onDeleteClick() {
    if (window.confirm('Chắc chắn xóa?')) {
      axios.post(domain + "/deletetinkhuyenmainbyid", {
        idtintuc: this.state.id
      }).then((res) => { res.data.result === "ok" ? this.deleteAndAlert() : alert("Thất bại") })
    }
  }

  handlesubmitform() {
    axios.post(domain + "/edittinkhuyenmaibyid", {
      idtintuc: this.state.id,
      tieude: this.state.tieude,
      des: this.state.des,
      contentStateTomTat: this.state.motangan,
      contentStateNoiDung: this.state.noidung,
      keyword: this.state.keyword,
      vitri: this.state.vitri,
      hinhdaidien: this.state.files.length !== 0 ? this.state.files.base64 : this.state.hinhdaidien,
    }).then((res) => { res.data.result === "ok" ? this.closeModalAndAlert() : alert("Thất bại") })
  }

  handleChangeTextEditorTomTat = (data) => {
    this.setState({
      motangan: data
    });
  }
  handleChangeTextEditorNoiDung = (data) => {
    this.setState({
      noidung: data
    });
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
            <h2>Sửa tin tức số {this.props.iddonhang}</h2>
          </Modal.Header>
          <Modal.Body>

            <form>
              <FormGroup controlId={this.state.donhang.length !== 0 ? this.state.donhang[0].id : ""}>
                <ControlLabel>Tiêu đề</ControlLabel>
                <FormControl name="tieude" defaultValue={this.state.donhang.length !== 0 ? this.state.donhang[0].tieude : ""} componentClass="input" onChange={(evt) => { this.handleProductTable(evt) }} />
              </FormGroup>

              <FormGroup controlId={this.state.donhang.length !== 0 ? this.state.donhang[0].id : ""}>
                <ControlLabel>Description</ControlLabel>
                <FormControl name="des" defaultValue={this.state.donhang.length !== 0 ? this.state.donhang[0].des : ""} componentClass="textarea" onChange={(evt) => { this.handleProductTable(evt) }} />
              </FormGroup>
              Mô tả ngắn
              <CKEditor id="motangan" value={this.state.donhang.length !== 0 ? this.state.donhang[0].motangan : ""} onChange={this.handleChangeTextEditorTomTat} />
              <br />
              Nội dung
              <CKEditor id="noidung" value={this.state.donhang.length !== 0 ? this.state.donhang[0].noidung : ""} onChange={this.handleChangeTextEditorNoiDung} />


              <FormGroup controlId={this.state.donhang.length !== 0 ? this.state.donhang[0].id : ""}>
                <ControlLabel>Keyword</ControlLabel>
                <FormControl name="keyword" defaultValue={this.state.donhang.length !== 0 ? this.state.donhang[0].keyword : ""} componentClass="input" onChange={(evt) => { this.handleProductTable(evt) }} />
              </FormGroup>

              <FormGroup controlId={this.state.donhang.length !== 0 ? this.state.donhang[0].id : ""}>
                <ControlLabel>Vị trí</ControlLabel>
                <FormControl name="vitri" defaultValue={this.state.donhang.length !== 0 ? this.state.donhang[0].vitri : ""} componentClass="input" onChange={(evt) => { this.handleProductTable(evt) }} />
              </FormGroup>

              <FormGroup controlId="hinhdaidien" controlname="hinhdaidien">
                <ControlLabel>Hình đại diện</ControlLabel>
                <input id="ckfinder-input-1" onChange={(event) => { this.handleChangeText(event) }} name="image" type="text" style={{ "width": "60%" }} />
                <button onClick={(event) => {
                  event.preventDefault();
                  selectFileWithCKFinder('ckfinder-input-1', (imageselected) => {
                    //return imageselected
                    this.setState({
                      hinhdaidien: imageselected
                    });
                  });
                }} id="ckfinder-popup-1" className="button-a button-a-background">Browse Server</button>
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

export default MyLargeModalTinKhuyenMai;