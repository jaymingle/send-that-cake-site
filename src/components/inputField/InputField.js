import React, { Component } from 'react';


class InputField extends Component {
    render() {
        return (
            <div className="form-control group material-input">
                <input 
                    className={`${this.props.className}`}
                    type={this.props.type}
                    name={this.props.name}
                    min={this.props.min}
                    max={this.props.max}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange}
                    required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>{this.props.label}</label>
            </div>

        )
    }
}

export default InputField;