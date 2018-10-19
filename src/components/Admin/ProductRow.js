import React, { Component } from 'react';
import EditableCell from './EditableCell';
import TextCell from './TextCell';


class ProductRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: "USD"
        }
    }

    onDelEvent() {
        this.props.onDelEvent(this.props.product);

    }
    render() {

        return (
            <tr className="eachRow">


                <TextCell cellData={{
                    "type": "serviceid",
                    value: this.props.product.serviceid,
                    id: this.props.product.id
                }} />
                <TextCell cellData={{
                    "type": "servicedes",
                    value: this.props.product.servicedes,
                    id: this.props.product.id
                }} />
                <TextCell cellData={{
                    "type": "servicefee",
                    value: this.props.product.servicefee,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    "type": "quantity",
                    value: this.props.product.quantity,
                    id: this.props.product.id
                }} />

                <TextCell cellData={{
                    "type": "usdsubtotal",
                    value: this.props.product.usdsubtotal,
                    id: this.props.product.id
                }} />
                <td>
                    <select onChange={(e) => this.setState({
                        currency: e.target.value
                    })} name="currency" id={this.props.product.id} >
                        <option value="USD">USD</option>
                        <option value="VND">VND</option>
                    </select>
                </td>
                <TextCell formatText="#e51919" cellData={{
                    "type": "rate",
                    value: this.state.currency === "VND" ? parseInt(this.props.product.rate).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2) : 0,
                    id: this.props.product.id
                }} />
                <TextCell formatText="#e51919" cellData={{
                    "type": "vndsubtotal",
                    value: this.state.currency === "VND" ? this.props.product.vndsubtotal.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2) : 0,
                    id: this.props.product.id
                }} />
                <TextCell formatText="#e51919" cellData={{
                    "type": "vndactual",
                    value: this.state.currency === "VND" ? this.props.product.vndactual.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2) : 0,
                    id: this.props.product.id
                }} />
                <td className="del-cell">
                    <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn" />
                </td>
            </tr>
        );

    }
}

export default ProductRow;