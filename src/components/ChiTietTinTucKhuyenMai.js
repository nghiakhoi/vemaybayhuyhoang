import React, { Component } from 'react';
import axios from 'axios';
import HeaderBooking from './HeaderBooking';
import Footer from './Footer';
import domain from '../router/domain';

const getAllTintuc = () =>
    axios.post(domain + '/getalltintuc', {
    }).then((res) => res.data)
const getAllDanhmuc = () =>
    axios.post(domain + '/getalldanhmuc', {
    }).then((res) => res.data)
const getAllTintucKhuyenmai = (limit) =>
    axios.post(domain + '/getalltinkhuyenmai', {
        limit: limit
    }).then((res) => res.data)
var limititemcheck = 0;

class ChiTietTinTucKhuyenMai extends Component {
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
        getAllTintucKhuyenmai(20).then((result) => {
            var tempdata = result.data;
            this.setState({
                todos: tempdata
            });
        })
        getAllDanhmuc().then((result) => {
            var tempdata1 = result.data;
            this.setState({
                danhmuctintuc: tempdata1
            });
        })
    }

    render() {
        const { todos } = this.state;
        return (
            <React.Fragment>
                <div className="wrapper st-body">
                    <HeaderBooking />
                    <div className="page-content">
                        <div className="main-content">
                            <div className="container">
                                <div className="row">
                                    {this.state.todos !== null ? this.state.todos.map((value, key) => {
                                        if (value.id == this.props.match.params.id) {
                                            return (
                                                <React.Fragment key={key}>
                                                    <div className="col-sm-12 col-xs-12 col-lg-9 col-md-8 blog-content single-content">
                                                        <article id="post-29" className="post-29 post type-post status-publish format-link has-post-thumbnail hentry category-food-and-drink tag-link post_format-post-format-link">
                                                            <div className="post-item fit-video">
                                                                <div className="featured-image">
                                                                    <img width={870} height={370} src={value.hinhdaidien} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" sizes="(max-width: 870px) 100vw, 870px" />      </div>
                                                                <div className="post-content">
                                                                    <div className="post-content-head">
                                                                        <div className="post-head-detail">
                                                                            <h3 className="post-title">
                                                                                {value.tieude}
                                                                            </h3>
                                                                        </div>
                                                                    </div>
                                                                    <div className="post-content-desc">
                                                                        <div className="post-text">
                                                                            <div dangerouslySetInnerHTML={{ __html: value.noidung }} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* .entry-footer */}
                                                            </div>
                                                        </article>
                                                    </div>
                                                </React.Fragment>
                                            )
                                        }
                                    }) : ""}
                                    <div className="col-sm-12 col-xs-12 col-lg-3 col-md-4 default-sidebar">
                                        <div id="secondary" className="widget-area" role="complementary">

                                            <aside id="recent-posts-2" className="widget widget_recent_entries">
                                                <h3 className="widget-title"><span>TIN KHUYẾN MÃI LIÊN QUAN</span></h3>
                                                <ul className="recent-blog-posts recent-blog-posts-default">
                                                    {
                                                        todos !== null ? todos.map((value, key) => {
                                                            if (limititemcheck <= this.state.limititem) {
                                                                limititemcheck++
                                                                return (
                                                                    <li key={key} className="recent-blog-post">
                                                                        <a className="recent-blog-post-thumnail" href={"/tin-khuyen-mai/" + value.slug + "." + value.id + ".html"}>
                                                                            <img src={value.hinhdaidien} />
                                                                        </a>
                                                                        <div className="recent-blog-post-detail">
                                                                            <h3 className="recent-blog-post-title"><a className="theme-color-hover" href={"/tin-khuyen-mai/" + value.slug + "." + value.id + ".html"}>
                                                                                {value.tieude}
                                                                            </a>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="clearfix" />
                                                                    </li>
                                                                )
                                                            }
                                                        }) : ""
                                                    }

                                                </ul>
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

export default ChiTietTinTucKhuyenMai;