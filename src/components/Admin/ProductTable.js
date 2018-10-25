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
                            <th>ID</th>
                            <th>Mã hóa đơn</th>
                            <th>Fullname</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Tổng tiền vé</th>
                            <th>Tổng tiền và hành lý</th>
                            <th>Ngày đặt</th>
                            <th>Trạng thái</th>
                            <th>Action</th>
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