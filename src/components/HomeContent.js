import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

const getAllTintuc = () =>
    axios.post('/getalltintuc', {
    }).then((res) => res.data)
var limititemcheck = 0;

class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: null,
            currentPage: 1,
            todosPerPage: 1,
            danhmuctintuc: null,
            limititem: 10,
        };
    }

    componentWillMount() {
        limititemcheck = 0;
        getAllTintuc().then((result) => {
            var tempdata = result.data;
            this.setState({
                todos: tempdata
            });
        })
    }

    render() {
        const { todos, currentPage, todosPerPage } = this.state;
        return (
            <div className="contents-main" id="contents-main">
                <article id="post-948" className="post-948 page type-page status-publish hentry">
                    <div className="entry-content">
                        <div className="container">
                            <div className="vc_row wpb_row vc_row-fluid" style={{}}>
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner ">
                                        <div className="wpb_wrapper">
                                            <div className="iw-heading  style4 vc_custom_1473841127609 text-center" style={{ width: '100%' }}>
                                                <h3 className="iwh-title" style={{ color: '#282828', fontSize: 48, fontFamily: 'Poppins', fontWeight: 300, lineHeight: 1 }}>Tin tức mới nhất
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="vc_row wpb_row vc_row-fluid vc_custom_1475565997597" style={{}}>
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner ">
                                        <div className="wpb_wrapper">
                                            <div className="row iw-travel-tours style4 style2">
                                                <div id="iw-isotope-travel-5-main" className="isotope">
                                                    {
                                                        todos !== null ? todos.map((value, key) => {
                                                            if (limititemcheck <= this.state.limititem) {
                                                                limititemcheck++
                                                                return (
                                                                    <div key={key} className="col-md-4 col-sm-6 col-xs-12 element-item">
                                                                        <div className="iw-tour-item">
                                                                            <div className="image-wrap">
                                                                                <img alt="test" src={"images/" + value.hinhdaidien} />
                                                                                <div className="booking-action">
                                                                                    <a className="link-to-detail theme-bg" href={"/tin-chi-tiet/" + value.slug + "." + value.id + ".html"}>
                                                                                        Xem thêm </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="info-wrap">
                                                                                <div className="info-left">
                                                                                    <h3 className="title">
                                                                                        <a className="theme-color-hover" href={"/tin-chi-tiet/" + value.slug + "." + value.id + ".html"}>{value.tieude}</a>
                                                                                    </h3>
                                                                                    <div className="post-meta">
                                                                                        <ul>
                                                                                            <li>
                                                                                                <span className="duration">{value.motangan}</span>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }
                                                        }) : ""
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* .entry-content */}
                    <div className="clearfix" />
                    <footer className="entry-footer ">
                    </footer>
                    {/* .entry-footer */}
                </article>
                {/* #post-## */}
            </div>
        );
    }
}

export default HomeContent;