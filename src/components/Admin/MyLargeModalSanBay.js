import React, { Component } from 'react';
import { Button, Modal, Checkbox, Radio, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import FieldGroup from './FieldGroup';
import axios from 'axios';
import domain from '../../router/domain';
import CKEditor from "./CKEditor";

var imageselected = null;

const getallsanbaybyid = (id) =>
  axios.post(domain + '/getallsanbaybyid', {
    id: id
  }).then((res) => res.data)

const getAllVungmien = () =>
  axios.post(domain + '/getallvungmien', {
  }).then((res) => res.data)

class MyLargeModalSanBay extends Component {
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
      danhmuctintuc: null,
      files: [],
      id: this.props.product.id,
      ten: this.props.product.ten,
      code: this.props.product.code,
      showinbanner: this.props.product.show,
      idvungmien: this.props.product.idvungmien,
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
    getallsanbaybyid(this.props.iddonhang).then((result) => {
      this.setState({
        donhang: result.data,
        show: true,
      });
    });
    getAllVungmien().then((result) => {
      var tempdata1 = result.data;
      this.setState({
        danhmuctintuc: tempdata1
      });
    })
  }
  onDeleteClick() {
    if (window.confirm('Chắc chắn xóa?')) {
      axios.post(domain + "/deletesanbaybyid", {
        idsanbay: this.state.id
      }).then((res) => { res.data.result === "ok" ? this.deleteAndAlert() : alert("Thất bại") })
    }
  }

  handlesubmitform() {
    axios.post(domain + "/editsanbaybyid", {
      idsanbay: this.state.id,
      ten: this.state.ten,
      code: this.state.code,
      show: this.state.showinbanner,
      idvungmien: this.state.idvungmien,
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
            <h2>Sửa chặng bay số {this.props.iddonhang}</h2>
          </Modal.Header>
          <Modal.Body>

            <form>
              <FormGroup controlId={this.state.donhang.length !== 0 ? this.state.donhang[0].id : ""}>
                <ControlLabel>Tên</ControlLabel>
                <FormControl name="ten" defaultValue={this.state.donhang.length !== 0 ? this.state.donhang[0].ten : ""} componentClass="input" onChange={(evt) => { this.handleProductTable(evt) }} />
              </FormGroup>
              <FormGroup controlId={this.state.donhang.length !== 0 ? this.state.donhang[0].id : ""}>
                <ControlLabel>Code</ControlLabel>
                <FormControl name="code" defaultValue={this.state.donhang.length !== 0 ? this.state.donhang[0].code : ""} componentClass="input" onChange={(evt) => { this.handleProductTable(evt) }} />
              </FormGroup>
              <FormGroup controlId={this.state.donhang.length !== 0 ? this.state.donhang[0].id : ""}>
                <ControlLabel>Show</ControlLabel>
                <FormControl name="showinbanner" defaultValue={this.state.donhang.length !== 0 ? this.state.donhang[0].show : ""} componentClass="input" onChange={(evt) => { this.handleProductTable(evt) }} />
              </FormGroup>

              <FormGroup controlId="idvungmien" controlname="idvungmien">
                <ControlLabel>Vùng miền</ControlLabel>
                <FormControl name="idvungmien" onChange={(evt) => { this.handleProductTable(evt) }} defaultValue={this.state.donhang.length !== 0 ? this.state.donhang[0].idvungmien : ""} componentClass="select" placeholder="Status">
                  {
                    this.state.danhmuctintuc !== null ? this.state.danhmuctintuc.map((value, key) => {
                      return (
                        <option key={key} value={value.id}>{value.tenvungmien}</option>
                      )
                    }) : null
                  }
                </FormControl>
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

export default MyLargeModalSanBay;