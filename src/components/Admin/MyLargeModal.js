import React, { Component } from 'react';
import { Button, Modal, Checkbox, Radio, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import FieldGroup from './FieldGroup';
import PeopleItem from '../PeopleItem';
import SummaryChuyenBayItem from '../SummaryChuyenBayItem';
import axios from 'axios';
import domain from '../../router/domain';

const getInvoiceById = (iddonhang) =>
  axios.post(domain + '/getinvoicebyid', {
    iddonhang: iddonhang
  }).then((res) => res.data)
const editInvoiceById = (iddonhang) =>
  axios.post(domain + '/editinvoicebyid', {
    iddonhang: iddonhang
  }).then((res) => res.data)

const get_day_name = (custom_date) => {
  var myDate = custom_date;
  myDate = myDate.split("-");
  var newDate = myDate[2] + "-" + myDate[1] + "-" + myDate[0];
  var currentDate = new Date(newDate);
  var day_name = currentDate.getDay();
  var days = new Array("Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy");
  return days[day_name];
}
const get_full_day_format_vietnam = (custom_date) => {
  var myDate = custom_date;
  myDate = myDate.split("-");
  var year = myDate[2];
  var month = myDate[1];
  var day = myDate[0];
  var fulldayformatvietnam = day + " tháng " + month + " " + year;
  return fulldayformatvietnam;
}

class MyLargeModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAnhieninfo = this.handleAnhieninfo.bind(this);
    //this.redirectToInputInfo = this.redirectToInputInfo.bind(this);

    this.state = {
      show: false,
      anhieninfo: false,
      donhang: []
    };
  }


  componentWillMount() {

  }

  handleProductTable(evt) {
    //var mangtemp = this.state.donhang;
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    //var timobject1 = findObjectByKey(mangtemp, "id", item.id);
    var products = this.state.donhang.slice();
    var newProducts = products.map(function (product) {
      for (var key in product) {
        if (key === item.name && product.id === item.id) {
          product[key] = item.value;
        }
      }
      return product;
    });
    this.setState({ donhang: newProducts });
  };


  handleAnhieninfo() {
    this.setState({ anhieninfo: !this.state.anhieninfo });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    getInvoiceById(this.props.iddonhang).then((result) => {
      console.log(result.data);
      this.setState({
        donhang: result.data,
        show: true
      });
    });
  }

  printData = () => {
    if (this.state.donhang !== null) {

      return this.state.donhang.map((value, key) =>
        (
          value.loaichuyenbay === "di" ?
            <PeopleItem
              key={key}
              quydanh={value.quydanh}
              ho={value.ho}
              demvaten={value.tendemvaten}
            />
            : ""
        )
      );
    }
  }

  printDatachuyenbay = (loaichuyenbay) => {
    if (this.state.donhang !== null) {
      var findFirstItem = null;
      for (var i = 0; i < this.state.donhang.length; i++) {
        if (this.state.donhang[i].loaichuyenbay === loaichuyenbay) {
          findFirstItem = this.state.donhang[i].jsonchuyenbay;
          return (
            <SummaryChuyenBayItem
              jsonchuyenbay={findFirstItem}
            />
          )
        }
      }
    }
  }

  render() {
    return (
      <div>

        <Button style={{ marginRight: "5px" }} bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          <i className="fa fa-edit"></i>
        </Button>
        <Button style={{ marginRight: "5px" }} bsStyle="danger" bsSize="large" onClick={this.props.onDeleteClick.bind(this)}>
          <i className="fa fa-trash"></i>
        </Button>

        <Modal bsSize="large"
          aria-labelledby="contained-modal-title-lg" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <h2>Thông tin Đơn hàng số {this.props.iddonhang}</h2>
            <h2>Tên {this.state.donhang.length !== 0 ? this.state.donhang[0].fullname : ""}</h2>

          </Modal.Header>
          <Modal.Body>

            <form>
              <FormGroup>
                <ControlLabel>Ngày tạo: {this.state.donhang.length !== 0 ? this.state.donhang[0].create_date : ""}</ControlLabel>
                <FormControl.Static></FormControl.Static>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Code: {this.state.donhang.length !== 0 ? this.state.donhang[0].code : ""}</ControlLabel>
                <FormControl.Static></FormControl.Static>
              </FormGroup>
              <FieldGroup
                id={this.state.donhang.length !== 0 ? this.state.donhang[0].id : ""}
                name="fullname"
                type="text"
                label="Fullname"
                defaultValue={this.state.donhang.length !== 0 ? this.state.donhang[0].fullname : ""}
                placeholder="Enter fullname"
                onChange={(evt) => { this.handleProductTable(evt) }}
              />
              <FieldGroup
                id={this.state.donhang.length !== 0 ? this.state.donhang[0].id : ""}
                type="text"
                label="Phone"
                defaultValue={this.state.donhang.length !== 0 ? this.state.donhang[0].phone : ""}
                placeholder="Enter phone"
                onChange={(evt) => { this.handleProductTable(evt) }}
              />
              <FieldGroup
                id={this.state.donhang.length !== 0 ? this.state.donhang[0].id : ""}
                type="text"
                label="Address"
                defaultValue={this.state.donhang.length !== 0 ? this.state.donhang[0].address : ""}
                placeholder="Enter address"
                onChange={(evt) => { this.handleProductTable(evt) }}
              />
              <FieldGroup
                id={this.state.donhang.length !== 0 ? this.state.donhang[0].id : ""}
                type="email"
                label="Email address"
                defaultValue={this.state.donhang.length !== 0 ? this.state.donhang[0].email : ""}
                placeholder="Enter email"
                onChange={(evt) => { this.handleProductTable(evt) }}
              />
              <FieldGroup
                id={this.state.donhang.length !== 0 ? this.state.donhang[0].id : ""}
                type="text"
                label="Yêu cầu"
                defaultValue={this.state.donhang.length !== 0 ? this.state.donhang[0].yeucau : ""}
                placeholder="Enter yêu cầu"
                onChange={(evt) => { this.handleProductTable(evt) }}
              />
              <FieldGroup
                id={this.state.donhang.length !== 0 ? this.state.donhang[0].id : ""}
                type="text"
                label="Hình thức thanh toán"
                defaultValue={this.state.donhang.length !== 0 ? this.state.donhang[0].hinhthucthanhtoan : ""}
                placeholder="Enter hình thức thanh toán"
                onChange={(evt) => { this.handleProductTable(evt) }}
              />
              <FieldGroup
                id={this.state.donhang.length !== 0 ? this.state.donhang[0].id : ""}
                type="text"
                label="Tổng tiền"
                defaultValue={this.state.donhang.length !== 0 ? this.state.donhang[0].subtotalorigin : ""}
                placeholder="Enter tổng tiền"
                onChange={(evt) => { this.handleProductTable(evt) }}
              />
              <FieldGroup
                id={this.state.donhang.length !== 0 ? this.state.donhang[0].id : ""}
                type="text"
                label="Tổng tiền với hành lý"
                defaultValue={this.state.donhang.length !== 0 ? this.state.donhang[0].subtotalwithhanhly : ""}
                placeholder="Enter tổng tiền với hành lý"
                onChange={(evt) => { this.handleProductTable(evt) }}
              />

              <FormGroup controlId="status" controlname="status">
                <ControlLabel>Status</ControlLabel>
                <FormControl name="status" onChange={(evt) => { this.handleProductTable(evt) }} defaultValue={this.state.donhang.length !== 0 ? this.state.donhang[0].status : ""} componentClass="select" placeholder="Status">
                  <option value="new">New</option>
                  <option value="cancel">Cancel</option>
                  <option value="checked">Checked</option>
                  <option value="done">Done</option>
                </FormControl>
              </FormGroup>
              {this.printData()}
              {this.printDatachuyenbay("di")}
              {this.printDatachuyenbay("khuhoi")}
            </form>

          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.redirectToInputInfo}>Tiếp tục</Button>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div >
    );
  }
}

export default MyLargeModal;