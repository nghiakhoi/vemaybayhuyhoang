import React, { Component } from 'react';
import axios from 'axios';
import HeaderBooking from './HeaderBooking';
import Footer from './Footer';
import TinTucItem from './TinTucItem';
import domain from '../router/domain';

const getAllTintucByDanhMuc = (iddanhmuc) =>
    axios.post(domain + '/getalltintucbydanhmuc', {
        iddanhmuc: iddanhmuc
    }).then((res) => res.data)
const getAllDanhmuc = () =>
    axios.post(domain + '/getalldanhmuc', {
    }).then((res) => res.data)
var limititemcheck = 0;

class ChiTietDanhMuc extends Component {
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

    handleClick(event) {
        event.preventDefault();
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    componentWillMount() {
        limititemcheck = 0;
        getAllTintucByDanhMuc(this.props.match.params.id).then((result) => {
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
        console.log(this.props.match.params.id);
        const { todos, currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

        const currentTodos = todos !== null ? todos.slice(indexOfFirstTodo, indexOfLastTodo) : "";
        console.log(currentTodos);
        const renderTodos = todos !== null ? currentTodos.map((todo, index) => {

            return (
                <TinTucItem
                    key={index}
                    idtin={todo.id}
                    tieude={todo.tieude}
                    slug={todo.slug}
                    motangan={todo.motangan}
                    hinhdaidien={todo.hinhdaidien}
                    motangan={todo.motangan}
                    hasdanhmuc={true}
                />
            )
        }) : "";

        // Logic for displaying page numbers
        const pageNumbers = [];
        if (todos !== null) {
            for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
                pageNumbers.push(i);
            }
        }


        const renderPageNumbers = todos !== null ? pageNumbers.map(number => {
            return currentPage === number ? (<span key={number} className="page-numbers current">{number} </span>) :
                (
                    <a id={number} onClick={this.handleClick.bind(this)} key={number} className="page-numbers" href="#">{number}</a>
                );
        }) : "";



        return (
            <React.Fragment>
                <div className="wrapper st-body">
                    <HeaderBooking />
                    <div className="page-content iw-category">
                        <div className="main-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12 col-xs-12 col-lg-9 col-md-8 blog-content">
                                        {/* {this.state.todos !== null ? this.state.todos.map((value, key) => {
                                    return (<TinTucItem
                                        key={key}
                                    />)
                                }) : ""} */}
                                        {todos !== null ? renderTodos : ""}

                                        <div className="page-nav">

                                            {todos !== null ? renderPageNumbers : ""}
                                            <div className="clearfix" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-xs-12 col-lg-3 col-md-4 default-sidebar">
                                        <div id="secondary" className="widget-area" role="complementary">
                                            <aside id="categories-2" className="widget widget_categories">
                                                <h3 className="widget-title"><span>DANH MỤC</span></h3>
                                                <ul>
                                                    {
                                                        this.state.danhmuctintuc !== null ? this.state.danhmuctintuc.map((value, key) => {
                                                            return (
                                                                <li key={key} className="cat-item">
                                                                    <a href={"/danh-muc/" + value.slug + "." + value.id + ".html"}>{value.ten}</a>
                                                                </li>
                                                            )
                                                        }) : ""
                                                    }
                                                </ul>
                                            </aside>
                                            <aside id="recent-posts-2" className="widget widget_recent_entries">
                                                <h3 className="widget-title"><span>TIN GẦN ĐÂY</span></h3>
                                                <ul className="recent-blog-posts recent-blog-posts-default">
                                                    {
                                                        todos !== null ? todos.map((value, key) => {
                                                            if (limititemcheck <= this.state.limititem) {
                                                                limititemcheck++
                                                                return (
                                                                    <li key={key} className="recent-blog-post">
                                                                        <a className="recent-blog-post-thumnail" href={"/tin-chi-tiet/" + value.slug + "." + value.id + ".html"}>
                                                                            <img src={value.hinhdaidien} />
                                                                        </a>
                                                                        <div className="recent-blog-post-detail">
                                                                            <h3 className="recent-blog-post-title"><a className="theme-color-hover" href={"/tin-chi-tiet/" + value.slug + "." + value.id + ".html"}>
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

export default ChiTietDanhMuc;