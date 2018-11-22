import React, { Component } from 'react';

class TinTucItem extends Component {
    render() {
        return (
            <article id="post-29" className="post-29 post type-post status-publish format-link has-post-thumbnail hentry category-food-and-drink tag-link post_format-post-format-link">
                <div className="post-item">
                    <div className="post-content">
                        <div className="featured-image">
                            <img width={870} height={370} src={this.props.hasdanhmuc === false ? this.props.hinhdaidien : this.props.hinhdaidien} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" sizes="(max-width: 870px) 100vw, 870px" />
                        </div>
                        <div className="post-content-detail">
                            <div className="post-content-head">
                                <div className="post-head-detail">
                                    <div className="post-main-info">
                                        <h3 className="post-title">
                                            <a href={"/tin-khuyen-mai/" + this.props.slug + "." + this.props.idtin + ".html"}>{this.props.tieude}</a>
                                        </h3>

                                    </div>
                                </div>
                            </div>
                            <div className="post-content-desc">
                                <div className="post-text">
                                    {this.props.motangan}
                                    <div className="clearfix" />
                                </div>
                                <div className="post-content-readmore">
                                    <a className="more-link" href={"/tin-khuyen-mai/" + this.props.slug + "." + this.props.idtin + ".html"}><i className="fa fa-arrow-circle-o-right" />Đọc tiếp</a>					</div>
                            </div>
                        </div>
                        <div className="clearfix" />
                    </div>
                </div>
            </article>
        );
    }
}

export default TinTucItem;