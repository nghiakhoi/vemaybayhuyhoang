import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

class IconCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateChoosed: this.props.dateChoosed
        };
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.type === "ngaysinhchild" ?
                        <p onClick={this.props.onClick} style={{ width: '100%', right: '3px', top: "3px", overflow: "hidden" }} className="form-control birthday children ">{this.state.dateChoosed[this.props.thutu].ngaysinhchild === null ? "Ngày sinh" : this.state.dateChoosed[this.props.thutu].ngaysinhchild}</p>
                        :
                        <p onClick={this.props.onClick} style={{ width: '100%', right: '3px', top: "3px", overflow: "hidden" }} className="form-control birthday children ">{this.state.dateChoosed[this.props.thutu].ngaysinhinf === null ? "Ngày sinh" : this.state.dateChoosed[this.props.thutu].ngaysinhinf}</p>


                }
                <FontAwesomeIcon style={{ position: 'absolute', right: '-20px', top: "3px", fontSize: "20px" }} onClick={this.props.onClick} icon={faCalendarAlt} size="2x" />
            </React.Fragment>

        );
    }
}

export default IconCalendar;