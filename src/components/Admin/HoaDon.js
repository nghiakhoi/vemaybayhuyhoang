import React, { Component } from 'react';
import ProductTable from './ProductTable';

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
    handleProductTable(evt) {
        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value < 1 ? 1 : evt.target.value
        };
        var products = this.state.products.slice();
        var newProducts = products.map(function (product) {

            for (var key in product) {
                if (key === item.name && product.id === item.id) {
                    product[key] = item.value;
                    product['usdsubtotal'] = item.value * product['servicefee'];
                    product['vndsubtotal'] = item.value * product['servicefee'] * product['rate'];
                    product['vndactual'] = Math.round(item.value * product['servicefee'] * product['rate'] / 1000) * 1000;

                }
            }
            return product;
        });
        this.setState({ products: newProducts }, function () {
            var tongproduct = this.state.products.length === 0 ? 0 : this.state.products;
            var tongtien = 0;
            if (tongproduct.length !== 0) {
                for (let i = 0; i < tongproduct.length; i++) {
                    tongtien += tongproduct[i].usdsubtotal;
                }
                this.setState({
                    grandtotalnumber: tongtien,
                }, function () {
                    this.setState({
                        part2usd: (parseInt(this.state.grandtotalnumber) - parseInt(this.state.part1usd === "" ? "0" : this.state.part1usd)) + "",
                        part2vnd: ((parseInt(this.state.grandtotalnumber) - parseInt(this.state.part1usd === "" ? "0" : this.state.part1usd)) * parseInt(this.state.exchangerate)) + "",
                    });
                });
            }
        });
    };
    handleAddEvent(e) {
        if (this.state.inputValue) {
            var tempArrayProduct = this.state.products;
            var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
            var product = {
                id: id,
                serviceid: this.state.inputValue.serviceid,
                servicedes: this.state.inputValue.servicedes,
                quantity: this.state.inputQuantity,
                servicefee: parseInt(this.state.inputValue.servicefee),
                usdsubtotal: parseInt(this.state.inputQuantity) * parseInt(this.state.inputValue.servicefee),
                currency: "USD",
                rate: parseInt(this.state.exchangerate),
                vndsubtotal: parseInt(this.state.inputQuantity) * parseInt(this.state.inputValue.servicefee) * parseInt(this.state.exchangerate),
                vndactual: Math.round(parseInt(this.state.inputQuantity) * parseInt(this.state.inputValue.servicefee) * parseInt(this.state.exchangerate) / 1000) * 1000,
            }

            let timobject1 = findObjectByKey(this.state.products, "serviceid", this.state.inputValue.serviceid);
            if (timobject1 !== null) {
                var item = {
                    serviceid: this.state.inputValue.serviceid
                };
                var products = this.state.products.slice();
                var inputQuantitystate = this.state.inputQuantity;
                var newProducts = products.map(function (product) {
                    for (var key in product) {

                        if (product.serviceid === item.serviceid) {
                            product['id'] = product.id;
                            product['quantity'] = (parseInt(product['quantity']) + parseInt(inputQuantitystate));
                            product['usdsubtotal'] = parseInt(product['quantity']) * parseInt(product['servicefee']);
                            product['vndsubtotal'] = parseInt(product['quantity']) * parseInt(product['servicefee']) * parseInt(product['rate']);
                            product['vndactual'] = Math.round(parseInt(product['quantity']) * parseInt(product['servicefee']) * parseInt(product['rate']) / 1000) * 1000;
                            return product;
                        }
                    }

                });
                this.setState({
                    products: [...this.state.products]
                }, function () {
                    this.setState({
                        inputValue: null,
                        inputQuantity: "1",
                    });
                });
                this.textInputSelect.current.focus();
                this.setValue(null);
            } else {
                tempArrayProduct.push(product);
                this.setState({
                    products: tempArrayProduct
                }, function () {
                    this.setState({
                        inputValue: null,
                        inputQuantity: "1",
                    });

                });
                this.textInputSelect.current.focus();
                this.setValue(null);
            }
            var tongproduct = this.state.products.length === 0 ? 0 : this.state.products;
            var tongtien = 0;
            if (tongproduct.length !== 0) {
                for (let i = 0; i < tongproduct.length; i++) {
                    tongtien += tongproduct[i].usdsubtotal;
                }
                this.setState({
                    grandtotalnumber: tongtien,
                }, function () {
                    this.setState({
                        part2usd: (parseInt(this.state.grandtotalnumber) - parseInt(this.state.part1usd === "" ? "0" : this.state.part1usd)) + "",
                        part2vnd: ((parseInt(this.state.grandtotalnumber) - parseInt(this.state.part1usd === "" ? "0" : this.state.part1usd)) * parseInt(this.state.exchangerate)) + "",
                    });
                });
            }

        } else {
            alert("Hãy nhập Service!");
        }

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
            <ProductTable inputValue={this.state.inputValue} onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText} />
        );
    }
}

export default HoaDon;