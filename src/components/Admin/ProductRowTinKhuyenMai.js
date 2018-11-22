import React, { Component } from 'react';
import MyLargeModal from './MyLargeModal';
import TextCell from './TextCell';
import ImageCell from './ImageCell';
import MyLargeModalTinKhuyenMai from './MyLargeModalTinKhuyenMai';


class ProductRowTinKhuyenMai extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    onDelEvent() {
        this.props.onDelEvent(this.props.product);

    }


    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {

        return (
            <React.Fragment>
                <tr className="eachRow">
                    <TextCell cellData={{
                        "type": "id",
                        value: this.props.product.id,
                        id: this.props.product.id
                    }} />
                    <ImageCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                        "type": "hinhdaidien",
                        value: this.props.product.hinhdaidien,
                        id: this.props.product.id
                    }} />
                    <TextCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                        "type": "tieude",
                        value: this.props.product.tieude,
                        id: this.props.product.id
                    }} />
                    <TextCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                        "type": "keyword",
                        value: this.props.product.keyword,
                        id: this.props.product.id
                    }} />

                    <td className="del-cell">
                        <MyLargeModalTinKhuyenMai getAgainData={this.props.getAgainData} onDeleteClick={this.onDelEvent.bind(this)} product={this.props.product} iddonhang={this.props.product.id} />
                    </td>
                </tr>
            </React.Fragment>
        );

    }
}

export default ProductRowTinKhuyenMai;