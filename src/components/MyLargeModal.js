import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import jetstarlogo from '../images/jetstarmini.png';
import vietjetlogo from '../images/vietjetmini.png';
import vietnamairlinelogo from '../images/vietnamairlinemini.png';

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

var priceAdultOrigin = 65000;
var priceChildOrigin = 65000;
var priceInfOrigin = 40000;
var priceAdult = 50000;
var priceChild = 50000;
var priceInf = 40000;
var adultnum = localStorage.getItem("adult") ? parseInt(localStorage.getItem("adult")) : 1;
var childnum = localStorage.getItem("child") ? parseInt(localStorage.getItem("child")) : 0;
var infnum = localStorage.getItem("inf") ? parseInt(localStorage.getItem("inf")) : 0;

class MyLargeModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAnhieninfo = this.handleAnhieninfo.bind(this);
    this.redirectToInputInfo = this.redirectToInputInfo.bind(this);

    this.state = {
      show: true,
      anhieninfo: false
    };
  }

  redirectToInputInfo() {
    localStorage.setItem("ticketchoosed", JSON.stringify(this.props.fullinfo));
    localStorage.setItem("ticketchoosedkhuhoi", JSON.stringify(this.props.fullinfoKhuHoi));
    window.location.replace("/yourinfo");
  }
  handleAnhieninfo() {
    this.setState({ anhieninfo: !this.state.anhieninfo });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    var totalall = (this.props.fullinfo.subtotal - (((priceAdultOrigin - priceAdult) * adultnum) + ((priceChildOrigin - priceChild) * childnum) + ((priceInfOrigin - priceInf) * infnum))) + (this.props.fullinfoKhuHoi !== null ? (this.props.fullinfoKhuHoi.subtotal - (((priceAdultOrigin - priceAdult) * adultnum) + ((priceChildOrigin - priceChild) * childnum) + ((priceInfOrigin - priceInf) * infnum))) : 0);
    var logo = this.props.fullinfo.airline === "Vietjet" ? vietjetlogo : this.props.fullinfo.airline === "Jetstar" ? jetstarlogo : vietnamairlinelogo;
    var logokhuhoi = this.props.fullinfoKhuHoi !== null ? this.props.fullinfoKhuHoi.airline === "Vietjet" ? vietjetlogo : this.props.fullinfoKhuHoi.airline === "Jetstar" ? jetstarlogo : vietnamairlinelogo : "";
    var showModalForTotalTable = (this.props.fullinfo !== null && this.props.fullinfoKhuHoi !== null) ?
      <React.Fragment>
        <h3>Khởi hành:</h3>

        <table className="TablePrice" style={{ "width": '100%' }} cellSpacing={5} cellPadding={5} border={0}>
          <thead>
            <tr>
              <td className="ItemHeader">Hành khách</td>
              <td className="ItemHeader">Số lượng</td>
              <td className="ItemHeader">Giá hãng</td>
              <td className="ItemHeader">Thuế và phí</td>
              <td className="ItemHeader">Giá 1 vé</td>
              <td className="ItemHeader">Thành tiền</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ "textAlign": 'center' }}>
              <td>Người lớn <small>(&gt; 12 tuổi)</small></td>
              <td><strong>{localStorage.getItem("adult") ? localStorage.getItem("adult") : "1"}</strong></td>
              <td><strong className="ItemPrice">{this.props.fullinfo.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
              <td><strong className="ItemPrice">{(this.props.fullinfo.adult.taxfee - (priceAdultOrigin) + (priceAdult)).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
              <td><strong className="ItemPrice">{((this.props.fullinfo.adult.taxfee - (priceAdultOrigin) + (priceAdult)) + this.props.fullinfo.baseprice).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
              <td><strong className="ItemPrice">{(((this.props.fullinfo.adult.taxfee - (priceAdultOrigin) + (priceAdult)) + this.props.fullinfo.baseprice) * adultnum).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
            </tr>
            {
              Array.isArray(this.props.fullinfo.child) ? null :
                <tr style={{ "textAlign": 'center' }}>
                  <td>Trẻ em <small>(2-12 tuổi)</small></td>
                  <td><strong>{localStorage.getItem("child") ? localStorage.getItem("child") : "0"}</strong></td>
                  <td><strong className="ItemPrice">{this.props.fullinfo.child.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                  <td><strong className="ItemPrice">{(this.props.fullinfo.child.taxfee - (priceChildOrigin) + (priceChild)).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                  <td><strong className="ItemPrice">{((this.props.fullinfo.child.taxfee - (priceChildOrigin) + (priceChild)) + this.props.fullinfo.child.baseprice).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                  <td><strong className="ItemPrice">{(((this.props.fullinfo.child.taxfee - (priceChildOrigin) + (priceChild)) + this.props.fullinfo.child.baseprice) * childnum).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                </tr>
            }
            {
              Array.isArray(this.props.fullinfo.inf) ? null :
                <tr style={{ "textAlign": 'center' }}>
                  <td>Em bé <small>(&lt; 2 tuổi)</small></td>
                  <td><strong>{localStorage.getItem("inf") ? localStorage.getItem("inf") : "0"}</strong></td>
                  <td><strong className="ItemPrice">{this.props.fullinfo.inf.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                  <td><strong className="ItemPrice">{(parseInt(this.props.fullinfo.inf.taxfee) - (priceInfOrigin) + (priceInf)).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                  <td><strong className="ItemPrice">{((parseInt(this.props.fullinfo.inf.taxfee) - (priceInfOrigin) + (priceInf)) + this.props.fullinfo.inf.baseprice).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                  <td><strong className="ItemPrice">{(((parseInt(this.props.fullinfo.inf.taxfee) - (priceInfOrigin) + (priceInf)) + this.props.fullinfo.inf.baseprice) * infnum).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                </tr>
            }
            <tr style={{ "textAlign": 'center' }}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>TỔNG TIỀN:</td>
              <td><strong className="ItemPrice" style={{ "color": "#0770cd" }}>{(this.props.fullinfo.subtotal - (((priceAdultOrigin - priceAdult) * adultnum) + ((priceChildOrigin - priceChild) * childnum) + ((priceInfOrigin - priceInf) * infnum))).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
            </tr>
          </tbody>
        </table>

        <h3>Khứ hồi:</h3>

        <table className="TablePrice" style={{ "width": '100%' }} cellSpacing={5} cellPadding={5} border={0}>
          <thead>
            <tr>
              <td className="ItemHeader">Hành khách</td>
              <td className="ItemHeader">Số lượng</td>
              <td className="ItemHeader">Giá hãng</td>
              <td className="ItemHeader">Thuế và phí</td>
              <td className="ItemHeader">Giá 1 vé</td>
              <td className="ItemHeader">Thành tiền</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ "textAlign": 'center' }}>
              <td>Người lớn <small>(&gt; 12 tuổi)</small></td>
              <td><strong>{localStorage.getItem("adult") ? localStorage.getItem("adult") : "1"}</strong></td>
              <td><strong className="ItemPrice">{this.props.fullinfoKhuHoi.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
              <td><strong className="ItemPrice">{(this.props.fullinfoKhuHoi.adult.taxfee - (priceAdultOrigin) + (priceAdult)).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
              <td><strong className="ItemPrice">{((this.props.fullinfoKhuHoi.adult.taxfee - (priceAdultOrigin) + (priceAdult)) + this.props.fullinfoKhuHoi.baseprice).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
              <td><strong className="ItemPrice">{(((this.props.fullinfoKhuHoi.adult.taxfee - (priceAdultOrigin) + (priceAdult)) + this.props.fullinfoKhuHoi.baseprice) * adultnum).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
            </tr>
            {
              Array.isArray(this.props.fullinfoKhuHoi.child) ? null :
                <tr style={{ "textAlign": 'center' }}>
                  <td>Trẻ em <small>(2-12 tuổi)</small></td>
                  <td><strong>{localStorage.getItem("child") ? localStorage.getItem("child") : "0"}</strong></td>
                  <td><strong className="ItemPrice">{this.props.fullinfoKhuHoi.child.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                  <td><strong className="ItemPrice">{(this.props.fullinfoKhuHoi.child.taxfee - (priceChildOrigin) + (priceChild)).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                  <td><strong className="ItemPrice">{((this.props.fullinfoKhuHoi.child.taxfee - (priceChildOrigin) + (priceChild)) + this.props.fullinfoKhuHoi.child.baseprice).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                  <td><strong className="ItemPrice">{(((this.props.fullinfoKhuHoi.child.taxfee - (priceChildOrigin) + (priceChild)) + this.props.fullinfoKhuHoi.child.baseprice) * childnum).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                </tr>
            }
            {
              Array.isArray(this.props.fullinfoKhuHoi.inf) ? null :
                <tr style={{ "textAlign": 'center' }}>
                  <td>Em bé <small>(&lt; 2 tuổi)</small></td>
                  <td><strong>{localStorage.getItem("inf") ? localStorage.getItem("inf") : "0"}</strong></td>
                  <td><strong className="ItemPrice">{this.props.fullinfoKhuHoi.inf.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                  <td><strong className="ItemPrice">{(parseInt(this.props.fullinfoKhuHoi.inf.taxfee) - (priceInfOrigin) + (priceInf)).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                  <td><strong className="ItemPrice">{((parseInt(this.props.fullinfoKhuHoi.inf.taxfee) - (priceInfOrigin) + (priceInf)) + this.props.fullinfoKhuHoi.inf.baseprice).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                  <td><strong className="ItemPrice">{(((parseInt(this.props.fullinfoKhuHoi.inf.taxfee) - (priceInfOrigin) + (priceInf)) + this.props.fullinfoKhuHoi.inf.baseprice) * infnum).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                </tr>
            }
            <tr style={{ "textAlign": 'center' }}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>TỔNG TIỀN:</td>
              <td><strong className="ItemPrice" style={{ "color": "#0770cd" }}>{(this.props.fullinfoKhuHoi.subtotal - (((priceAdultOrigin - priceAdult) * adultnum) + ((priceChildOrigin - priceChild) * childnum) + ((priceInfOrigin - priceInf) * infnum))).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
            </tr>
          </tbody>
        </table>


      </React.Fragment>
      : <React.Fragment>
        <h3>Khởi hành:</h3>

        <table className="TablePrice" style={{ "width": '100%' }} cellSpacing={5} cellPadding={5} border={0}>
          <thead>
            <tr>
              <td className="ItemHeader">Hành khách</td>
              <td className="ItemHeader">Số lượng</td>
              <td className="ItemHeader">Giá hãng</td>
              <td className="ItemHeader">Thuế và phí</td>
              <td className="ItemHeader">Giá 1 vé</td>
              <td className="ItemHeader">Thành tiền</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ "textAlign": 'center' }}>
              <td>Người lớn <small>(&gt; 12 tuổi)</small></td>
              <td><strong>{localStorage.getItem("adult") ? localStorage.getItem("adult") : "1"}</strong></td>
              <td><strong className="ItemPrice">{this.props.fullinfo.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
              <td><strong className="ItemPrice">{(this.props.fullinfo.adult.taxfee - (priceAdultOrigin) + (priceAdult)).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
              <td><strong className="ItemPrice">{((this.props.fullinfo.adult.taxfee - (priceAdultOrigin) + (priceAdult)) + this.props.fullinfo.baseprice).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
              <td><strong className="ItemPrice">{(((this.props.fullinfo.adult.taxfee - (priceAdultOrigin) + (priceAdult)) + this.props.fullinfo.baseprice) * adultnum).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
            </tr>
            {
              Array.isArray(this.props.fullinfo.child) ? null :
                <tr style={{ "textAlign": 'center' }}>
                  <td>Trẻ em <small>(2-12 tuổi)</small></td>
                  <td><strong>{localStorage.getItem("child") ? localStorage.getItem("child") : "0"}</strong></td>
                  <td><strong className="ItemPrice">{this.props.fullinfo.child.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                  <td><strong className="ItemPrice">{(this.props.fullinfo.child.taxfee - (priceChildOrigin) + (priceChild)).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                  <td><strong className="ItemPrice">{((this.props.fullinfo.child.taxfee - (priceChildOrigin) + (priceChild)) + this.props.fullinfo.child.baseprice).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                  <td><strong className="ItemPrice">{(((this.props.fullinfo.child.taxfee - (priceChildOrigin) + (priceChild)) + this.props.fullinfo.child.baseprice) * childnum).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                </tr>
            }
            {
              Array.isArray(this.props.fullinfo.inf) ? null :
                <tr style={{ "textAlign": 'center' }}>
                  <td>Em bé <small>(&lt; 2 tuổi)</small></td>
                  <td><strong>{localStorage.getItem("inf") ? localStorage.getItem("inf") : "0"}</strong></td>
                  <td><strong className="ItemPrice">{this.props.fullinfo.inf.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                  <td><strong className="ItemPrice">{(parseInt(this.props.fullinfo.inf.taxfee) - (priceInfOrigin) + (priceInf)).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                  <td><strong className="ItemPrice">{((parseInt(this.props.fullinfo.inf.taxfee) - (priceInfOrigin) + (priceInf)) + this.props.fullinfo.inf.baseprice).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                  <td><strong className="ItemPrice">{(((parseInt(this.props.fullinfo.inf.taxfee) - (priceInfOrigin) + (priceInf)) + this.props.fullinfo.inf.baseprice) * infnum).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
                </tr>
            }
            <tr style={{ "textAlign": 'center' }}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>TỔNG TIỀN:</td>
              <td><strong className="ItemPrice" style={{ "color": "#0770cd" }}>{(this.props.fullinfo.subtotal - (((priceAdultOrigin - priceAdult) * adultnum) + ((priceChildOrigin - priceChild) * childnum) + ((priceInfOrigin - priceInf) * infnum))).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</strong></td>
            </tr>
          </tbody>
        </table>

      </React.Fragment>;
    var showModalForTotalInfo = (this.props.fullinfo !== null && this.props.fullinfoKhuHoi !== null) ?
      <React.Fragment>
        <table className="TablePrice" style={{ "width": '100%' }} cellSpacing={5} cellPadding={5} border={0}>
          <thead>
            <tr>
              <td className="ItemHeader" style={{ "textAlign": 'center', "color": "red" }}>Khởi hành</td>
              <td className="ItemHeader" style={{ "textAlign": 'center' }}>Hãng bay</td>
              <td className="ItemHeader" style={{ "textAlign": 'center' }}>Chặng bay</td>
              <td className="ItemHeader" style={{ "textAlign": 'center' }}>Thời gian đi</td>
              <td className="ItemHeader" style={{ "textAlign": 'center' }}>Thời gian đến</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ "textAlign": 'center' }}>
              <td>{get_day_name(this.props.fullinfo.datefull)}, {get_full_day_format_vietnam(this.props.fullinfo.datefull)}</td>
              <td><img className="airlineResultLogo" src={logo} />{this.props.fullinfo.airline}</td>
              <td>{this.props.depfull ? this.props.depfull.ten : null} → {this.props.desfull ? this.props.desfull.ten : null}</td>
              <td>{this.props.fullinfo.deptime}</td>
              <td>{this.props.fullinfo.destime}</td>
            </tr>
          </tbody>
        </table>


        <table className="TablePrice" style={{ width: '100%' }} cellSpacing={5} cellPadding={5} border={0}>
          <thead>
            <tr>
              <td className="ItemHeader" style={{ "textAlign": 'center', "color": "red" }}>Khứ hồi</td>
              <td className="ItemHeader" style={{ "textAlign": 'center' }}>Hãng bay</td>
              <td className="ItemHeader" style={{ "textAlign": 'center' }}>Chặng bay</td>
              <td className="ItemHeader" style={{ "textAlign": 'center' }}>Thời gian đi</td>
              <td className="ItemHeader" style={{ "textAlign": 'center' }}>Thời gian đến</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ "textAlign": 'center' }}>
              <td>{get_day_name(this.props.fullinfoKhuHoi.datefull)}, {get_full_day_format_vietnam(this.props.fullinfoKhuHoi.datefull)}</td>
              <td><img className="airlineResultLogo" src={logokhuhoi} />{this.props.fullinfoKhuHoi.airline}</td>
              <td>{this.props.desfull ? this.props.desfull.ten : null} → {this.props.depfull ? this.props.depfull.ten : null}</td>
              <td>{this.props.fullinfoKhuHoi.deptime}</td>
              <td>{this.props.fullinfoKhuHoi.destime}</td>
            </tr>
          </tbody>
        </table>


      </React.Fragment>
      : <React.Fragment>
        <table className="TablePrice" style={{ "width": '100%' }} cellSpacing={5} cellPadding={5} border={0}>
          <thead>
            <tr>
              <td className="ItemHeader" style={{ "textAlign": 'center', "color": "red" }}>Khởi hành</td>
              <td className="ItemHeader" style={{ "textAlign": 'center' }}>Hãng bay</td>
              <td className="ItemHeader" style={{ "textAlign": 'center' }}>Thời gian đi</td>
              <td className="ItemHeader" style={{ "textAlign": 'center' }}>Thời gian đến</td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ "textAlign": 'center' }}>
              <td>{get_day_name(this.props.fullinfo.datefull)}, {get_full_day_format_vietnam(this.props.fullinfo.datefull)}</td>
              <td><img className="airlineResultLogo" src={logo} />{this.props.fullinfo.airline}</td>
              <td>{this.props.fullinfo.deptime}</td>
              <td>{this.props.fullinfo.destime}</td>
            </tr>
          </tbody>
        </table>

      </React.Fragment>;

    return (
      <div>

        <Button style={{ "float": "right", "marginRight": "35px" }} bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Tiếp tục
            </Button>

        <Modal bsSize="large"
          aria-labelledby="contained-modal-title-lg" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <h2>Xác nhận thông tin chuyến bay</h2>
          </Modal.Header>
          <Modal.Body>
            {showModalForTotalInfo}

            <Button bsStyle="success" onClick={this.handleAnhieninfo}>Chi tiết</Button>

            {this.state.anhieninfo === true ? showModalForTotalTable : ""}

            <p style={{ "float": "right", "fontSize": "18px", "color": "black" }}>TỔNG THÀNH TIỀN: <strong style={{ "fontSize": "25px", "color": "#0770cd" }} className="ItemPrice">
              {totalall.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND
            </strong>
            </p>

          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.redirectToInputInfo}>Tiếp tục</Button>
            <Button onClick={this.handleClose}>Đóng</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default MyLargeModal;