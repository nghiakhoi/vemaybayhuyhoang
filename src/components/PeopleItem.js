import React, { Component } from 'react';

class PeopleItem extends Component {
    render() {
        return (
            <table className="summary" >
                <tbody>
                    <tr>
                        <th>Hành khách:</th>
                        <td><strong>{this.props.quydanh==="ong"?"Ông":this.props.quydanh==="ba"?"Bà":this.props.quydanh==="anh"?"Anh":this.props.quydanh==="chi"?"Chị":this.props.quydanh==="betrai"?"Bé trai":this.props.quydanh==="begai"?"Bé gái":this.props.quydanh==="true"?"Bé trai":"Bé gái"},</strong> {this.props.ho} {this.props.demvaten}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default PeopleItem;