import React, { Component } from 'react';

class TinTucItem extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="tour-listing-row" style={{ marginBottom: "20px" }}>
                    <div className="tour-item">
                        <div className="row">
                            <div className="col-sm-12 col-xs-12 col-lg-12 col-md-12 text-left">
                                <div className=" col-lg-3" >
                                    <img style={{ width: "200px", height: "130px", margin: "0 auto", display: "block" }} className="img" src={this.props.hasdanhmuc === false ? this.props.hinhdaidien : this.props.hinhdaidien} />

                                </div>
                                <div className="col-lg-9 pull-right">
                                    <div className="info-top">
                                        <h3 className="title" style={{ marginTop: "0px" }}>
                                            <a className="theme-color" href={"/tin-chi-tiet/" + this.props.slug + "." + this.props.idtin + ".html"}>{this.props.tieude}</a>
                                        </h3>
                                        <div className="description"><div dangerouslySetInnerHTML={{ __html: this.props.motangan }} /></div>
                                    </div>
                                </div>
                                <div className="clearfix" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </React.Fragment>
        );
    }
}

export default TinTucItem;