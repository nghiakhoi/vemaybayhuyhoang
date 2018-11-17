import React, { Component } from 'react';
import ProductTable from './ProductTable';
import HeaderBooking from '../HeaderBooking';
import Footer from '../Footer';
import axios from 'axios';
import domain from '../../router/domain';

const getAllInvoice = () =>
    axios.post(domain + '/getallinvoice', {
    }).then((res) => res.data)

const editStatusInvoiceById = (idhoadon, status) =>
    axios.post(domain + '/editstatusinvoicebyid', {
        id: idhoadon,
        status: status
    }).then((res) => res.data)

const findObjectByKey = (array, key, value) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}

class HoaDon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: null,
            filterText: "",
            products: [],
        }
    }


    componentWillMount() {
        getAllInvoice().then((result) => {
            console.log(result.data);
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
                    <h1>Đơn Hàng</h1>
                    <ProductTable inputValue={this.state.inputValue} onProductTableUpdate={this.handleProductTable.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText} />
                    <Footer />
                </div>

            </React.Fragment>

        );
    }
}

export default HoaDon;