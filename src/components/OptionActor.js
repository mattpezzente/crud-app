import React, { Component } from 'react';

class OptionActor extends Component {
	constructor(props) {
		super(props)
	}

  render() {
    return <option key={this.props.key}>{this.props.name}</option>
  }
}

export default OptionActor