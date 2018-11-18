import React, { Component } from 'react';
import ProductTableTinTuc from './ProductTableTinTuc';
import HeaderBooking from '../HeaderBooking';
import Footer from '../Footer';
import axios from 'axios';
import domain from '../../router/domain';

const checkUser = (token) =>
    axios.post(domain + '/checktoken', {
        token: token,
    }).then((res) => res.data)

const getAllTintuc = (limit) =>
    axios.post(domain + '/getalltintuc', {
        limit: limit
    }).then((res) => res.data)

const editStatusInvoiceById = (idhoadon, status) =>
    axios.post(domain + '/editstatusinvoicebyid', {
        id: idhoadon,
        status: status
    }).then((res) => res.data)

class ListTinTuc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: null,
            filterText: "",
            products: [],
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
                    getAllTintuc(100).then((result) => {
                        this.setState({
                            products: result.data
                        });
                    });
                } else {
                    window.location.replace("/login");
                }
            });
        }
    }
    getAgainData() {
        getAllTintuc(100).then((result) => {
            this.setState({
                products: result.data
            });
        });
    }


    handleProductTable(evt) {
        var mangtemp = this.state.products;
        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value < 1 ? 1 : evt.target.value
        };
        //var timobject1 = findObjectByKey(mangtemp, "id", item.id);
        var products = this.state.products.slice();
        var newProducts = products.map(function (product) {

            for (var key in product) {
                if (key === item.name && product.id === item.id) {
                    product[key] = item.value;
                    editStatusInvoiceById(item.id, item.value);
                }
            }
            return product;
        });
        this.setState({ products: newProducts });
    };

    handleRowDel(product) {
        var tempArrayProduct = this.state.products;
        var index = this.state.products.indexOf(product);
        tempArrayProduct.splice(index, 1);
        this.setState({
            products: tempArrayProduct
        });
    };
    render() {
        return (
            <React.Fragment>
                <div className="wrapper st-body">
                    <HeaderBooking />
                    <h1>Tin tức</h1>
                    <ProductTableTinTuc getAgainData={this.getAgainData.bind(this)} inputValue={this.state.inputValue} onProductTableUpdate={this.handleProductTable.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText} />
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

export default ListTinTuc;