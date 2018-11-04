import React, { Component } from 'react';

class HinhThucThanhToan extends Component {
    render() {
        return (
            <div className="left-container">
                <div>
                    <nav>
                        <fieldset className="breadcrumb">
                            <span className="crumbs">
                                <span className="crust" itemScope="itemscope" itemType="http://data-vocabulary.org/Breadcrumb">
                                    <a href="https://vebay247.vn/" title="Dat Ve May Bay 247, Đại Lý Vé Máy Bay Giá Rẻ Hàng Đầu VeBay247.vn" className="crumb" rel="up" itemProp="url">
                                        <span itemProp="title">Dat Ve May Bay 247, Đại Lý Vé Máy Bay Giá Rẻ Hàng Đầu VeBay247.vn</span>
                                    </a>
                                    <span className="arrow">
                                        <span>&gt;</span>
                                    </span>
                                </span>
                            </span>
                        </fieldset>
                    </nav>
                </div>
                <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t.method{background:#f9f9f9; margin-bottom:10px; border:1px solid RED; padding:10px; border-radius:10px; background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#ebebeb), to(#ffffff)); background: -webkit-linear-gradient(top, #e47a1d2b, #ebebeb); background: -moz-linear-gradient(top, #ffffff, #ebebeb); background: -ms-linear-gradient(top, #ffffff, #ebebeb); background: -o-linear-gradient(top, #ffffff, #ebebeb);}\n\t.method .submit{border-radius:5px; display:block; margin:auto auto; color:#FFF; background:#f39519; border:1px solid #fea461; padding:5px 8px; font-weight:bold; cursor:pointer; background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#e8791f), to(#fcb213)); background: -webkit-linear-gradient(top, #fcb213, #e8791f); background: -moz-linear-gradient(top, #fcb213, #e8791f); background: -ms-linear-gradient(top, #fcb213, #e8791f); background: -o-linear-gradient(top, #fcb213, #e8791f); }\n\t.method .submit:hover{background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#e8791f), to(#fea461)); background: -webkit-linear-gradient(top, #fea461, #e8791f); background: -moz-linear-gradient(top, #fea461, #e8791f); background: -ms-linear-gradient(top, #fea461, #e8791f); background: -o-linear-gradient(top, #fea461, #e8791f);}\n\t.method .text{background-color:#FFF; border-radius:5px; border: 1px solid #E78F08;-moz-box-shadow: 0 0 3px #E78F08;-webkit-box-shadow: 0 0 3px #E78F08;box-shadow: 0 0 3px #E78F08; padding:4px; max-width:80%; width:50%; margin-left:20px; display:inline-block;}\n" }} />
                <div className="left_item ">
                    <h1 className="title_item">
                        <b style={{ fontSize: '140%', color: 'green' }}>VUI LÒNG CHỌN HÌNH THỨC THANH TOÁN</b>
                    </h1>
                    <div className="content_category_item">
                        <b style={{ fontSize: '140%', color: 'green' }}>(ĐIỀN HOẶC CHỌN ĐỂ CHÚNG TÔI GỬI THÔNG TIN THANH TOÁN NGÂN HÀNG CHO QUÝ KHÁCH)</b>
                        <br />
                        <br />
                        <div className="method"><b className="title_item" style={{ color: '#d51317', cursor: 'pointer', fontSize: '140%', background: '-o-linear-gradient(top, #ffffff, #ebebeb)', marginBottom: 10, border: '1px solid #888', padding: 10, borderRadius: 10 }}>Giao Vé Tận Nơi</b>
                            <form   style={{ marginBottom: 10, border: '1px solid rgb(136, 136, 136)', padding: 0, borderRadius: 10, background: '-webkit-linear-gradient(top, rgb(255, 255, 255), rgb(235, 235, 235))' }}>
                                
                                Trong tuần, Nhân viên Vébay247 sẽ đến tận nơi HCM hoặc Đà Nẵng tại địa chỉ của Quý khách yêu cầu để giao vé và thu tiền khi Quý khách có yêu cầu đặt vé . Với hình thức này, Quý khách sẽ chịu mức phí vận chuyển là 0 - 50.000 vnđ/1 lần giao.<br />
                                <label>Địa chỉ giao vé: </label><input type="text" style={{ fontSize: '140%', padding: '7px 5px 5px 20px' }} name="address" className="text" defaultValue placeholder="Địa chỉ giao vé" />
                                <span className="clear" /><br />
                                <input type="submit"  value="Chọn hình thức thanh toán này" className="submit" style={{ fontSize: '140%' }} />
                                <span className="clear" />
                            </form>
                        </div>
                        <br />
                        <div className="method"><b className="title_item" style={{ color: '#d51317', cursor: 'pointer', fontSize: '140%', background: '-o-linear-gradient(top, #ffffff, #ebebeb)', marginBottom: 10, border: '1px solid #888', padding: 10, borderRadius: 10 }}>Thanh Toán Qua Chuyển Khoản</b>
                            <form  style={{ marginBottom: 10, display: 'none', padding: '7px 5px 5px 20px', color: 'black', fontSize: 15 }}>
                                <b style={{ fontWeight: 'bold', fontSize: '140%', display: 'block', background: '-o-linear-gradient(top, #ffffff, #ebebeb)', marginBottom: 10, border: '1px solid #888', padding: 10, borderRadius: 10 }}>Ngân hàng TMCP Ngoại Thương Việt Nam - Vietcombank</b>
                                <input type="hidden" defaultValue="dd18c-ngan-hang-tmcp-ngoai-thuong-viet-nam-vietcombank" name="method" />
                                Tên tài khoản :	 Đặng Tường Dương<br />
                                Số tài khoản :	0181.0015.18721<br />
                                Chi Nhánh	Tân Thuận - Q7 - HCM                                            <span className="clear" /><br />
                                <input type="submit" defaultValue="Chọn hình thức thanh toán này" className="submit" style={{ fontSize: '140%', padding: '7px 5px 5px 20px' }} />
                                <span className="clear" />
                            </form>
                            <form  style={{ marginBottom: 10, display: 'none', padding: '7px 5px 5px 20px', color: 'black', fontSize: 15 }}>
                                <b style={{ fontWeight: 'bold', fontSize: '140%', display: 'block', background: '-o-linear-gradient(top, #ffffff, #ebebeb)', marginBottom: 10, border: '1px solid #888', padding: 10, borderRadius: 10 }}>Ngân hàng TMCP Đầu tư và phát triển Việt Nam - BIDV</b>
                                <input type="hidden" defaultValue="03b19-ngan-hang-tmcp-dau-tu-va-phat-trien-viet-nam-bidv" name="method" />
                                Tên tài khoản :	 Đặng Tường Dương<br />
                                Số tài khoản :	1351.0000.361.356<br />
                                Chi Nhánh	Đinh Tiên Hoàng - Quận Bình Thạnh - HCM                                            <span className="clear" /><br />
                                <input type="submit" defaultValue="Chọn hình thức thanh toán này" className="submit" style={{ fontSize: '140%', padding: '7px 5px 5px 20px' }} />
                                <span className="clear" />
                            </form>
                            <form  style={{ marginBottom: 10, display: 'none', padding: '7px 5px 5px 20px', color: 'black', fontSize: 15 }}>
                                <b style={{ fontWeight: 'bold', fontSize: '140%', display: 'block', background: '-o-linear-gradient(top, #ffffff, #ebebeb)', marginBottom: 10, border: '1px solid #888', padding: 10, borderRadius: 10 }}>Ngân Hàng Nông Nghiệp - Phát Triển Nông Thôn - Agribank</b>
                                <input type="hidden" defaultValue="125b8-ngan-hang-nong-nghiep-phat-trien-nong-thon-agribank" name="method" />
                                Tên tài khoản :	 Đoàn Kiều Giang<br />
                                Số tài khoản :	1904.2061.72780<br />
                                Chi Nhánh	Miền Đông - Bình Thạnh - HCM                                            <span className="clear" /><br />
                                <input type="submit" defaultValue="Chọn hình thức thanh toán này" className="submit" style={{ fontSize: '140%', padding: '7px 5px 5px 20px' }} />
                                <span className="clear" />
                            </form>
                            <form  style={{ marginBottom: 10, display: 'none', padding: '7px 5px 5px 20px', color: 'black', fontSize: 15 }}>
                                <b style={{ fontWeight: 'bold', fontSize: '140%', display: 'block', background: '-o-linear-gradient(top, #ffffff, #ebebeb)', marginBottom: 10, border: '1px solid #888', padding: 10, borderRadius: 10 }}>Ngân hàng TMCP Á Châu - ACB</b>
                                <input type="hidden" defaultValue="2a061-ngan-hang-tmcp-a-chau-acb" name="method" />
                                Tên tài khoản :	 Đặng Tường Dương<br />
                                Số tài khoản :	8239.2419<br />
                                Chi Nhánh	Lê Văn Sỹ - Tân Bình - HCM                                            <span className="clear" /><br />
                                <input type="submit" defaultValue="Chọn hình thức thanh toán này" className="submit" style={{ fontSize: '140%', padding: '7px 5px 5px 20px' }} />
                                <span className="clear" />
                            </form>
                            <form  style={{ marginBottom: 10, display: 'none', padding: '7px 5px 5px 20px', color: 'black', fontSize: 15 }}>
                                <b style={{ fontWeight: 'bold', fontSize: '140%', display: 'block', background: '-o-linear-gradient(top, #ffffff, #ebebeb)', marginBottom: 10, border: '1px solid #888', padding: 10, borderRadius: 10 }}>Ngân hàng TMCP Kỹ Thương Việt Nam - Techcombank</b>
                                <input type="hidden" defaultValue="95fb3-ngan-hang-tmcp-ky-thuong-viet-nam-techcombank" name="method" />
                                Tên tài khoản :	 Đoàn Kiều Giang<br />
                                Số tài khoản :	1902.6615.832.022<br />
                                Chi Nhánh:	Bình Hòa - Nơ Trang Long - Bình Thạnh - HCM                                            <span className="clear" /><br />
                                <input type="submit" defaultValue="Chọn hình thức thanh toán này" className="submit" style={{ fontSize: '140%', padding: '7px 5px 5px 20px' }} />
                                <span className="clear" />
                            </form>
                            <form  style={{ marginBottom: 10, display: 'none', padding: '7px 5px 5px 20px', color: 'black', fontSize: 15 }}>
                                <b style={{ fontWeight: 'bold', fontSize: '140%', display: 'block', background: '-o-linear-gradient(top, #ffffff, #ebebeb)', marginBottom: 10, border: '1px solid #888', padding: 10, borderRadius: 10 }}>Ngân Hàng TMCP Sài Gòn Thương Tín Sacombank</b>
                                <input type="hidden" defaultValue="7fefa-ngan-hang-tmcp-sai-gon-thuong-tin-sacombank" name="method" />
                                Tên tài Khoản	  Đặng Tường Dương                                         <br />
                                Số tài khoản	  0600.2844.6988<br />
                                Chi Nhánh	  Nơ Trang Long, Bình Hòa, Bình Thạnh, HCM                                            <span className="clear" /><br />
                                <input type="submit" defaultValue="Chọn hình thức thanh toán này" className="submit" style={{ fontSize: '140%', padding: '7px 5px 5px 20px' }} />
                                <span className="clear" />
                            </form>
                            <form  style={{ marginBottom: 10, display: 'none', padding: '7px 5px 5px 20px', color: 'black', fontSize: 15 }}>
                                <b style={{ fontWeight: 'bold', fontSize: '140%', display: 'block', background: '-o-linear-gradient(top, #ffffff, #ebebeb)', marginBottom: 10, border: '1px solid #888', padding: 10, borderRadius: 10 }}>Ngân hàng TMCP Đông Á</b>
                                <input type="hidden" defaultValue="27a46-ngan-hang-tmcp-dong-a" name="method" />
                                Tên tài khoản :	 Đoàn Kiều Giang<br />
                                Số tài khoản :	0108.953.472<br />
                                Chi Nhánh	Bạch Đằng - Bình Thạnh - HCM                                            <span className="clear" /><br />
                                <input type="submit" defaultValue="Chọn hình thức thanh toán này" className="submit" style={{ fontSize: '140%', padding: '7px 5px 5px 20px' }} />
                                <span className="clear" />
                            </form>
                            <form  style={{ marginBottom: 10, display: 'none', padding: '7px 5px 5px 20px', color: 'black', fontSize: 15 }}>
                                <b style={{ fontWeight: 'bold', fontSize: '140%', display: 'block', background: '-o-linear-gradient(top, #ffffff, #ebebeb)', marginBottom: 10, border: '1px solid #888', padding: 10, borderRadius: 10 }}>Ngân hàng TMCP Công Thương Việt Nam - Vietinbank</b>
                                <input type="hidden" defaultValue="82e96-ngan-hang-tmcp-cong-thuong-viet-nam-vietinbank" name="method" />
                                Tên tài khoản :	 Đoàn Kiều Giang<br />
                                Số tài khoản :	1060.0674.0145<br />
                                Chi Nhánh:            Chi Nhánh 7 - HCM                                            <span className="clear" /><br />
                                <input type="submit" defaultValue="Chọn hình thức thanh toán này" className="submit" style={{ fontSize: '140%', padding: '7px 5px 5px 20px' }} />
                                <span className="clear" />
                            </form>
                            <form  style={{ marginBottom: 10, display: 'none', padding: '7px 5px 5px 20px', color: 'black', fontSize: 15 }}>
                                <b style={{ fontWeight: 'bold', fontSize: '140%', display: 'block', background: '-o-linear-gradient(top, #ffffff, #ebebeb)', marginBottom: 10, border: '1px solid #888', padding: 10, borderRadius: 10 }}>Ngân hàng xuất nhập khẩu Việt Nam EXIMBANK</b>
                                <input type="hidden" defaultValue="4f1d4-ngan-hang-xuat-nhap-khau-viet-nam-eximbank" name="method" />
                                Tên tài khoản	 Đặng Tường Dương   <br />
                                Số tài khoản	2206.148492.36694<br />
                                Chi Nhánh	 CN Sài Gòn                                            <span className="clear" /><br />
                                <input type="submit" defaultValue="Chọn hình thức thanh toán này" className="submit" style={{ fontSize: '140%', padding: '7px 5px 5px 20px' }} />
                                <span className="clear" />
                            </form>
                            <form  style={{ marginBottom: 10, display: 'none', padding: '7px 5px 5px 20px', color: 'black', fontSize: 15 }}>
                                <b style={{ fontWeight: 'bold', fontSize: '140%', display: 'block', background: '-o-linear-gradient(top, #ffffff, #ebebeb)', marginBottom: 10, border: '1px solid #888', padding: 10, borderRadius: 10 }}>Ngân Hàng Quân Đội MB Bank</b>
                                <input type="hidden" defaultValue="50b74-ngan-hang-quan-doi-mb-bank" name="method" />
                                Tên tài khoản	 Đoàn Kiều Giang<br />
                                Số tài khoản	20201.0775.0008<br />
                                Chi Nhánh	Quang Trung - Gò Vấp - HCM                                            <span className="clear" /><br />
                                <input type="submit" defaultValue="Chọn hình thức thanh toán này" className="submit" style={{ fontSize: '140%', padding: '7px 5px 5px 20px' }} />
                                <span className="clear" />
                            </form>
                            <form  style={{ marginBottom: 10, display: 'none', padding: '7px 5px 5px 20px', color: 'black', fontSize: 15 }}>
                                <b style={{ fontWeight: 'bold', fontSize: '140%', display: 'block', background: '-o-linear-gradient(top, #ffffff, #ebebeb)', marginBottom: 10, border: '1px solid #888', padding: 10, borderRadius: 10 }}>Ngân hàng Quốc Tế Việt Nam - VIB Bank</b>
                                <input type="hidden" defaultValue="f2eed-ngan-hang-quoc-te-viet-nam-vib-bank" name="method" />
                                Tên tài khoản  :   Đặng Tường Dương	<br />
                                Số tài khoản	:   63870.40600.43219 <br />
                                Chi Nhánh	:  Ngân Hàng Quốc Tế VIB Bank                                            <span className="clear" /><br />
                                <input type="submit" defaultValue="Chọn hình thức thanh toán này" className="submit" style={{ fontSize: '140%', padding: '7px 5px 5px 20px' }} />
                                <span className="clear" />
                            </form>
                            <form  style={{ marginBottom: 10, display: 'none', padding: '7px 5px 5px 20px', color: 'black', fontSize: 15 }}>
                                <b style={{ fontWeight: 'bold', fontSize: '140%', display: 'block', background: '-o-linear-gradient(top, #ffffff, #ebebeb)', marginBottom: 10, border: '1px solid #888', padding: 10, borderRadius: 10 }}>Ngân hàng TMCP Hàng Hải Việt Nam - MaritimeBank</b>
                                <input type="hidden" defaultValue="73919-ngan-hang-tmcp-hang-hai-viet-nam-maritimebank" name="method" />
                                Tên tài khoản :	 Đặng Tường Dương<br />
                                Số tài khoản :	0400.1017.941.704<br />
                                Chi Nhánh	Tô Hiến Thành - Q10 - HCM                                            <span className="clear" /><br />
                                <input type="submit" defaultValue="Chọn hình thức thanh toán này" className="submit" style={{ fontSize: '140%', padding: '7px 5px 5px 20px' }} />
                                <span className="clear" />
                            </form>
                            <form  style={{ marginBottom: 10, display: 'none', padding: '7px 5px 5px 20px', color: 'black', fontSize: 15 }}>
                                <b style={{ fontWeight: 'bold', fontSize: '140%', display: 'block', background: '-o-linear-gradient(top, #ffffff, #ebebeb)', marginBottom: 10, border: '1px solid #888', padding: 10, borderRadius: 10 }}>Ngân hàng TMCP Phát triển TP.HCM - HDBank</b>
                                <input type="hidden" defaultValue="99e16-ngan-hang-tmcp-phat-trien-tphcm-hdbank" name="method" />
                                Tên tài khoản :	 Đặng Tường Dương<br />
                                Số tài khoản :	0817.0407.000.1168<br />
                                Chi Nhánh	Lê Quang Định - Bình Thạnh - HCM                                            <span className="clear" /><br />
                                <input type="submit" defaultValue="Chọn hình thức thanh toán này" className="submit" style={{ fontSize: '140%', padding: '7px 5px 5px 20px' }} />
                                <span className="clear" />
                            </form>
                            <form  style={{ marginBottom: 10, display: 'none', padding: '7px 5px 5px 20px', color: 'black', fontSize: 15 }}>
                                <b style={{ fontWeight: 'bold', fontSize: '140%', display: 'block', background: '-o-linear-gradient(top, #ffffff, #ebebeb)', marginBottom: 10, border: '1px solid #888', padding: 10, borderRadius: 10 }}>Ngân hàng TMCP Việt Nam Thịnh Vượng - VPBank</b>
                                <input type="hidden" defaultValue="16333-ngan-hang-tmcp-viet-nam-thinh-vuong-vpbank" name="method" />
                                Tên tài khoản: Đoàn Kiều Giang	<br />
                                Số tài khoản	:   7909.4757<br />
                                Chi Nhánh	:  VPBank Nơ Trang Long                                            <span className="clear" /><br />
                                <input type="submit" defaultValue="Chọn hình thức thanh toán này" className="submit" style={{ fontSize: '140%', padding: '7px 5px 5px 20px' }} />
                                <span className="clear" />
                            </form>
                        </div>
                        <br />
                        <div className="method"><b className="title_item" style={{ color: '#d51317', cursor: 'pointer', fontSize: '140%', background: '-o-linear-gradient(top, #ffffff, #ebebeb)', marginBottom: 10, border: '1px solid #888', padding: 10, borderRadius: 10 }}>Thanh Toán Tại Phòng Vé</b>
                            <form  style={{ marginBottom: 10, display: 'block', padding: '7px 5px 5px 20px', color: 'black', fontSize: 15 }}>
                                <b style={{ fontWeight: 'bold', fontSize: '140%', display: 'block', background: '-o-linear-gradient(top, #ffffff, #ebebeb)', marginBottom: 10, border: '1px solid #888', padding: 10, borderRadius: 10 }}>Thanh Toán ATM</b>
                                <input type="hidden" defaultValue="069de-thanh-toan-atm" name="method" />
                                Quý khách mang theo thẻ ATM đến phòng vé để thanh toán và nhận vé                                            <span className="clear" /><br />
                                <input type="submit" defaultValue="Chọn hình thức thanh toán này" className="submit" style={{ fontSize: '140%', padding: '7px 5px 5px 20px' }} />
                                <span className="clear" />
                            </form>
                            <form  style={{ marginBottom: 10, display: 'block', padding: '7px 5px 5px 20px', color: 'black', fontSize: 15 }}>
                                <b style={{ fontWeight: 'bold', fontSize: '140%', display: 'block', background: '-o-linear-gradient(top, #ffffff, #ebebeb)', marginBottom: 10, border: '1px solid #888', padding: 10, borderRadius: 10 }}>Thanh Toán Bằng Tiền Mặt</b>
                                <input type="hidden" defaultValue="d5e68-thanh-toan-bang-tien-mat" name="method" />
                                Quý khách sẽ đến văn phòng Vé Bay 247 và thanh toán bằng tiền mặt                                            <span className="clear" /><br />
                                <input type="submit" defaultValue="Chọn hình thức thanh toán này" className="submit" style={{ fontSize: '140%', padding: '7px 5px 5px 20px' }} />
                                <span className="clear" />
                            </form>
                            <form  style={{ marginBottom: 10, display: 'block', padding: '7px 5px 5px 20px', color: 'black', fontSize: 15 }}>
                                <b style={{ fontWeight: 'bold', fontSize: '140%', display: 'block', background: '-o-linear-gradient(top, #ffffff, #ebebeb)', marginBottom: 10, border: '1px solid #888', padding: 10, borderRadius: 10 }}>Thanh Toán Thẻ VISA/Master</b>
                                <input type="hidden" defaultValue="17a6f-thanh-toan-the-visamaster" name="method" />
                                Quý khách mang theo thẻ VISA/Master đến phòng vé để thanh toán và nhận vé                                            <span className="clear" /><br />
                                <input type="submit" defaultValue="Chọn hình thức thanh toán này" className="submit" style={{ fontSize: '140%', padding: '7px 5px 5px 20px' }} />
                                <span className="clear" />
                            </form>
                        </div>
                        <span className="clear" />
                    </div>
                </div>
                <br className="clear" />
            </div>

        );
    }
}

export default HinhThucThanhToan;