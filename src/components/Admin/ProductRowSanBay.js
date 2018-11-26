import React, { Component } from 'react';
import TextCell from './TextCell';
import ImageCell from './ImageCell';
import MyLargeModalSanBay from './MyLargeModalSanBay';


class ProductRowSanBay extends Component {
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
                        "type": "ten",
                        value: this.props.product.ten,
                        id: this.props.product.id
                    }} />
                    <TextCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                        "type": "code",
                        value: this.props.product.code,
                        id: this.props.product.id
                    }} />
                    <TextCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                        "type": "show",
                        value: this.props.product.show,
                        id: this.props.product.id
                    }} />

                    <td className="del-cell">
                        <MyLargeModalSanBay getAgainData={this.props.getAgainData} onDeleteClick={this.onDelEvent.bind(this)} product={this.props.product} iddonhang={this.props.product.id} />
                    </td>
                </tr>
            </React.Fragment>
        );

    }
}

export default ProductRowSanBay;