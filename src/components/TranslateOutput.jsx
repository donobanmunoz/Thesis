import React, { Component } from 'react';

class TranslateOutput extends Component {
    render() {
        return (
          <div>
            <h2 className="text-success">{this.props.output}</h2>
          </div>
        );
    }
}

export default TranslateOutput;
