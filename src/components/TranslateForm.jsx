import React, { Component } from 'react';
import Traductor from './Tra'

class TranslateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textToTranslate: '',
            language: 'en'

        }
        this.translate = this.translate.bind(this);
    }
    translate(event) {
        event.preventDefault();
        var textToTranslate = this.refs.textToTranslate.text;
        var language = this.refs.language.text;
        this.props.translate(textToTranslate, language);
    }
    render() {
        return (
            <div>
                <form className="form-inline" onSubmit={this.translate}>
                    <input type="text"
                        placeholder="Enter a Text"
                        className="form-control"
                        refs="textToTranslate"/>
                    <select className="form-control" refs="language">
                        <option value="ru">Russian</option>s
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="zh">Chineese</option>
                    </select>
                    <input type="submit" className="btn btn-primary" value="Translate"/>
                </form>
            </div>
        );
    }
}

export default TranslateForm;
