import React, { Component } from 'react';

class CKEditor extends Component {
    constructor(props) {
        super(props);
        this.elementName = "editor_" + this.props.id;
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    render() {
        return (
            <textarea name={this.elementName} defaultValue={this.props.value}></textarea>
        )
    }

    componentDidMount() {
        let configuration = {
            toolbar: "Advanced",
            filebrowserBrowseUrl: '/ckfinder/ckfinder.html',
            filebrowserUploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files'
        };
        window.CKEDITOR.replace(this.elementName, configuration);
        var byThis = window.CKEDITOR.instances[this.elementName];
        window.CKEDITOR.instances[this.elementName].on("change", function () {
            let data = byThis.getData();
            this.props.onChange(data);
        }.bind(this));
    }
}

export default CKEditor;