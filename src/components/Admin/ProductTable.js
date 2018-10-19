import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
    render() {
        var onProductTableUpdate = this.props.onProductTableUpdate;
        var rowDel = this.props.onRowDel;
        var filterText = this.props.filterText;
        var product = this.props.products.map(function (product) {
            if (product === undefined) {
                return "";
            }
            return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id} />)
        });
        return (
            <React.Fragment>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Services ID</th>
                            <th>Services Description</th>
                            <th>Services Fee</th>
                            <th>Quantity</th>
                            <th>USD Subtotal</th>
                            <th>Currency</th>
                            <th>Rate</th>
                            <th>VND Subtotal</th>
                            <th>VND Actual</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {product}

                    </tbody>

                </table>
            </React.Fragment>
        );

    }
}

export default ProductTable;