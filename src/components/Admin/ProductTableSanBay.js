import React, { Component } from 'react';
import ProductRowSanBay from './ProductRowSanBay';

class ProductTableSanBay extends Component {
    render() {
        var onProductTableUpdate = this.props.onProductTableUpdate;
        var getAgainData = this.props.getAgainData;
        var rowDel = this.props.onRowDel;
        var filterText = this.props.filterText;
        var product = this.props.products.map(function (product) {
            if (product === undefined) {
                return "";
            }
            return (<ProductRowSanBay getAgainData={getAgainData} onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id} />)
        });
        return (
            <React.Fragment>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên</th>
                            <th>Code</th>
                            <th>Show</th>
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

export default ProductTableSanBay;