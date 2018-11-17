import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import TinTucItemKhuyenMai from './TinTucItemKhuyenMai';
import domain from '../router/domain';

const getAllTintucKhuyenmai = (limit) =>
    axios.post(domain + '/getalltinkhuyenmai', {
        limit: limit
    }).then((res) => res.data)
const getAllDanhmuc = () =>
    axios.post(domain + '/getalldanhmuc', {
    }).then((res) => res.data)
var limititemcheck = 0;

class DanhSachTinTucContentKhuyenMai extends Component {
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
        getAllTintucKhuyenmai(20).then((result) => {
            var tempdata = result.data;
            this.setState({
                todos: tempdata
            });
        })
    }

    componentDidMount() {
        localStorage.setItem("adult", 1);
        localStorage.removeItem("child");
        localStorage.removeItem("inf");
        localStorage.setItem("direction", 0);
        localStorage.removeItem("datedes");
        localStorage.removeItem("ticketchoosed");
        localStorage.removeItem("ticketchoosedkhuhoi");
        localStorage.removeItem("idhoadon");
        localStorage.setItem("datedep", moment().format("DD-MM-YYYY"));
        localStorage.setItem("dep", "SGN");
        localStorage.setItem("des", "HAN");
    }



    render() {
        const { todos, currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

        const currentTodos = todos !== null ? todos.slice(indexOfFirstTodo, indexOfLastTodo) : "";
        const renderTodos = todos !== null ? currentTodos.map((todo, index) => {

            return (
                <TinTucItemKhuyenMai
                    key={index}
                    idtin={todo.id}
                    tieude={todo.tieude}
                    slug={todo.slug}
                    motangan={todo.motangan}
                    hinhdaidien={todo.hinhdaidien}
                    motangan={todo.motangan}
                    hasdanhmuc={false}
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
                <div className="page-heading">
                    <div className="container">
                        <div className="container-inner">
                            <div className="container-inner-2">
                                <div className="page-title">
                                    <div className="iw-heading-title">
                                        <h1>Tin Khuyến Mãi</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-content iw-category">
                    <div className="main-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-xs-12 col-lg-12 col-md-12 blog-content">
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
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default DanhSachTinTucContentKhuyenMai;