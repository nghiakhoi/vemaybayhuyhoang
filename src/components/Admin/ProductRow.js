import React, { Component } from 'react';
import MyLargeModal from '../Admin/MyLargeModal';
import TextCell from './TextCell';


class ProductRow extends Component {
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
                    <TextCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                        "type": "code",
                        value: this.props.product.code,
                        id: this.props.product.id
                    }} />
                    <TextCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                        "type": "fullname",
                        value: this.props.product.fullname,
                        id: this.props.product.id
                    }} />
                    <TextCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                        "type": "phone",
                        value: this.props.product.phone,
                        id: this.props.product.id
                    }} />
                    <TextCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                        "type": "address",
                        value: this.props.product.address,
                        id: this.props.product.id
                    }} />
                    <TextCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                        "type": "subtotalorigin",
                        value: parseInt(this.props.product.subtotalorigin).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),
                        id: this.props.product.id
                    }} />
                    <TextCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                        "type": "subtotalwithhanhly",
                        value: parseInt(this.props.product.subtotalwithhanhly).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2),
                        id: this.props.product.id
                    }} />
                    <TextCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                        "type": "create_date",
                        value: this.props.product.create_date,
                        id: this.props.product.id
                    }} />
                    <td>
                        <select className="form-control" defaultValue={this.props.product.status} onChange={this.props.onProductTableUpdate} name="status" id={this.props.product.id} >
                            <option value="new">New</option>
                            <option value="cancel">Cancel</option>
                            <option value="checked">Checked</option>
                            <option value="done">Done</option>
                        </select>
                    </td>

                    <td className="del-cell">
                        <MyLargeModal onDeleteClick={this.onDelEvent.bind(this)} iddonhang={this.props.product.id} />
                    </td>
                </tr>
            </React.Fragment>
        );

    }
}

export default ProductRow;